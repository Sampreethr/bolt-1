import EmailSubscription from '@/src/components/EmailSubscription'

export default function TestEmailPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
          Email Subscription Test
        </h1>
        
        <EmailSubscription />
        
        <div className="mt-8 p-4 bg-white dark:bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
            Debug Information
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            If the subscription form above doesn't work, check the browser console for errors.
          </p>
        </div>
      </div>
    </div>
  )
}