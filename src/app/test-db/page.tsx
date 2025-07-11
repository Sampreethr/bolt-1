'use client'

import { useState } from 'react'
import { client, databases, appwriteConfig } from '@/src/lib/appwrite'

export default function TestDatabase() {
  const [status, setStatus] = useState('Not tested')
  const [details, setDetails] = useState('')

  const testConnection = async () => {
    try {
      setStatus('Testing...')
      setDetails('Connecting to Appwrite...')
      
      // Test 1: Check if client is configured
      console.log('Project ID:', appwriteConfig.projectId)
      console.log('Endpoint:', appwriteConfig.endpoint)
      console.log('Database ID:', appwriteConfig.databaseId)
      
      // Test 2: Try to list databases
      const response = await databases.listDocuments(appwriteConfig.databaseId, 'your-collection-id');
      setStatus('✅ SUCCESS!');
      setDetails(`Connected successfully! Found ${response.documents.length} document(s)`);
      
      console.log('Documents:', response.documents);
      
    } catch (error) {
      setStatus('❌ FAILED')
      setDetails(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`)
      console.error('Connection error:', error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          🧪 Test Appwrite Connection
        </h1>
        
        {/* Configuration Display */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Configuration Status:</h2>
          <div className="space-y-2 text-sm">
            <p className="flex justify-between">
              <span className="font-medium">Project ID:</span>
              <span className={appwriteConfig.projectId ? 'text-green-600' : 'text-red-600'}>
                {appwriteConfig.projectId || '❌ NOT SET'}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Endpoint:</span>
              <span className={appwriteConfig.endpoint ? 'text-green-600' : 'text-red-600'}>
                {appwriteConfig.endpoint || '❌ NOT SET'}
              </span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Database ID:</span>
              <span className={appwriteConfig.databaseId ? 'text-green-600' : 'text-red-600'}>
                {appwriteConfig.databaseId || '❌ NOT SET'}
              </span>
            </p>
          </div>
        </div>
        
        {/* Test Button */}
        <div className="text-center mb-6">
          <button 
            onClick={testConnection}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            🚀 Test Connection
          </button>
        </div>
        
        {/* Results */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Status: <span className="text-blue-600">{status}</span>
          </h3>
          <div className="bg-gray-50 p-4 rounded border">
            <p className="text-sm text-gray-700">{details}</p>
          </div>
        </div>
        
        {/* Instructions */}
        <div className="mt-8 bg-blue-50 border border-blue-200 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-3">📋 Setup Instructions:</h3>
          <ol className="text-sm text-blue-700 space-y-1">
            <li>1. Make sure you've created your Appwrite project</li>
            <li>2. Update your <code className="bg-blue-100 px-1 rounded">.env.local</code> file with actual values</li>
            <li>3. Restart your development server</li>
            <li>4. Click "Test Connection" button above</li>
          </ol>
        </div>
        
        {/* Back to Home */}
        <div className="mt-6 text-center">
          <a 
            href="/" 
            className="text-blue-600 hover:text-blue-800 font-medium underline"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}