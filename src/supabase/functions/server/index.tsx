import { Hono } from 'npm:hono'
import { cors } from 'npm:hono/cors'
import { logger } from 'npm:hono/logger'
import { createClient } from 'npm:@supabase/supabase-js@2'
import * as kv from './kv_store.tsx'

const app = new Hono()

// Configure CORS
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

app.use('*', logger(console.log))

const supabase = createClient(
  Deno.env.get('SUPABASE_URL')!,
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
)

// Contact form submission endpoint
app.post('/make-server-1a91da27/contact', async (c) => {
  try {
    const { name, email, subject, message } = await c.req.json()

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ 
        error: 'All fields are required' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Store contact submission in KV store
    const submissionId = `contact_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    const submissionData = {
      id: submissionId,
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString(),
      status: 'new'
    }

    await kv.set(submissionId, submissionData)

    // Also store in a list for easy retrieval
    const allSubmissions = await kv.get('contact_submissions') || []
    allSubmissions.push(submissionId)
    await kv.set('contact_submissions', allSubmissions)

    console.log(`Contact form submission received from ${email}`)

    return new Response(JSON.stringify({ 
      success: true,
      message: 'Contact form submitted successfully' 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.log(`Contact form submission error: ${error}`)
    return new Response(JSON.stringify({ 
      error: 'Failed to submit contact form' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

// Project view tracking endpoint
app.post('/make-server-1a91da27/track-project-view', async (c) => {
  try {
    const { projectId, projectTitle } = await c.req.json()

    if (!projectId) {
      return new Response(JSON.stringify({ 
        error: 'Project ID is required' 
      }), { 
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    // Get current view count
    const viewKey = `project_views_${projectId}`
    const currentViews = await kv.get(viewKey) || 0
    const newViewCount = currentViews + 1

    // Update view count
    await kv.set(viewKey, newViewCount)

    // Store project info if not exists
    const projectInfoKey = `project_info_${projectId}`
    const existingInfo = await kv.get(projectInfoKey)
    if (!existingInfo && projectTitle) {
      await kv.set(projectInfoKey, {
        id: projectId,
        title: projectTitle,
        firstViewed: new Date().toISOString(),
        lastViewed: new Date().toISOString()
      })
    } else if (existingInfo) {
      await kv.set(projectInfoKey, {
        ...existingInfo,
        lastViewed: new Date().toISOString()
      })
    }

    return new Response(JSON.stringify({ 
      success: true,
      views: newViewCount 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.log(`Project view tracking error: ${error}`)
    return new Response(JSON.stringify({ 
      error: 'Failed to track project view' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

// Get contact submissions (admin endpoint)
app.get('/make-server-1a91da27/admin/contacts', async (c) => {
  try {
    const submissionIds = await kv.get('contact_submissions') || []
    const submissions = []

    for (const id of submissionIds) {
      const submission = await kv.get(id)
      if (submission) {
        submissions.push(submission)
      }
    }

    // Sort by timestamp (newest first)
    submissions.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())

    return new Response(JSON.stringify({ 
      success: true,
      submissions 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.log(`Get contact submissions error: ${error}`)
    return new Response(JSON.stringify({ 
      error: 'Failed to get contact submissions' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

// Get project analytics (admin endpoint)
app.get('/make-server-1a91da27/admin/analytics', async (c) => {
  try {
    const projectViewKeys = await kv.getByPrefix('project_views_')
    const projectInfoKeys = await kv.getByPrefix('project_info_')
    
    const analytics = []

    for (const viewData of projectViewKeys) {
      const projectId = viewData.key.replace('project_views_', '')
      const projectInfo = projectInfoKeys.find(info => 
        info.key === `project_info_${projectId}`
      )

      analytics.push({
        projectId,
        title: projectInfo?.value?.title || 'Unknown Project',
        views: viewData.value,
        firstViewed: projectInfo?.value?.firstViewed,
        lastViewed: projectInfo?.value?.lastViewed
      })
    }

    // Sort by views (highest first)
    analytics.sort((a, b) => b.views - a.views)

    return new Response(JSON.stringify({ 
      success: true,
      analytics 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })

  } catch (error) {
    console.log(`Get project analytics error: ${error}`)
    return new Response(JSON.stringify({ 
      error: 'Failed to get project analytics' 
    }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
})

// Health check endpoint
app.get('/make-server-1a91da27/health', (c) => {
  return new Response(JSON.stringify({ 
    status: 'healthy',
    timestamp: new Date().toISOString() 
  }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
})

Deno.serve(app.fetch)