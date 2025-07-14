'use client'

import { useState, useCallback } from 'react'
import { 
  FileCheck, 
  Shield, 
  MapPin, 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  DollarSign,
  Building,
  Scale,
  Home,
  Calculator,
  AlertCircle,
  Phone,
  Briefcase
} from 'lucide-react'

interface BusinessType {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  selected: boolean;
  pricing: string;
  duration: string;
  requirements: string[];
}

interface OperatingState {
  id: string;
  name: string;
  code: string;
  selected: boolean;
  dueDates: {
    auditPeriod: string;
    submissionDeadline: string;
    requirements: string;
  };
}

interface AuditWorkflow {
  businessTypes: BusinessType[];
  operatingStates: OperatingState[];
  currentStep: 'businessType' | 'operatingStates' | 'summary';
}

export default function AuditServiceSelector(): JSX.Element {
  const [workflow, setWorkflow] = useState<AuditWorkflow>({
    businessTypes: [
      {
        id: 'real-estate',
        name: 'Real Estate',
        description: 'Property sales and real estate transactions',
        icon: Home,
        selected: false,
        pricing: '$499 + GST',
        duration: '7-14 business days',
        requirements: [
          'Property sales trust account records',
          'Rental bond trust account verification',
          'Commission trust account compliance',
          'ASIC regulatory compliance certification'
        ]
      },
      {
        id: 'conveyancing',
        name: 'Conveyancing',
        description: 'Legal property transfer and settlement services',
        icon: Scale,
        selected: false,
        pricing: '$649 + GST',
        duration: '10-14 business days',
        requirements: [
          'Settlement fund verification',
          'Client money handling compliance',
          'State conveyancing law compliance',
          'Professional standards verification'
        ]
      },
      {
        id: 'accounting',
        name: 'Accounting',
        description: 'Professional accounting and financial services',
        icon: Calculator,
        selected: false,
        pricing: '$899 + GST',
        duration: '14-21 business days',
        requirements: [
          'Client funds trust account audit',
          'Professional indemnity compliance',
          'Financial services regulations',
          'CPA/CA professional standards'
        ]
      },
      {
        id: 'legal',
        name: 'Legal Practice',
        description: 'Solicitors and legal practitioners',
        icon: Building,
        selected: false,
        pricing: '$1,500 + GST',
        duration: '21-28 business days',
        requirements: [
          'Legal practice trust account audit',
          'Client funds verification',
          'Law society requirements',
          'Professional conduct compliance'
        ]
      }
    ],
    operatingStates: [
      {
        id: 'nsw',
        name: 'New South Wales',
        code: 'NSW',
        selected: false,
        dueDates: {
          auditPeriod: 'Year ending 30 June',
          submissionDeadline: '30 September',
          requirements: 'Lodge via NSW Fair Trading Online Portal'
        }
      },
      {
        id: 'vic',
        name: 'Victoria',
        code: 'VIC',
        selected: false,
        dueDates: {
          auditPeriod: 'Year ending 30 June',
          submissionDeadline: '30 September',
          requirements: 'Lodge via Consumer Affairs Victoria myCAV portal'
        }
      },
      {
        id: 'qld',
        name: 'Queensland',
        code: 'QLD',
        selected: false,
        dueDates: {
          auditPeriod: 'Varies by licence type',
          submissionDeadline: '4 months after audit period',
          requirements: 'Lodge via QLD Office of Fair Trading portal'
        }
      },
      {
        id: 'wa',
        name: 'Western Australia',
        code: 'WA',
        selected: false,
        dueDates: {
          auditPeriod: 'Calendar/Financial year',
          submissionDeadline: '31 March / 30 September',
          requirements: 'Auditor delivers to Consumer Protection WA'
        }
      },
      {
        id: 'sa',
        name: 'South Australia',
        code: 'SA',
        selected: false,
        dueDates: {
          auditPeriod: 'Year ending 30 June',
          submissionDeadline: '30 September',
          requirements: 'Lodge via Consumer and Business Services'
        }
      },
      {
        id: 'tas',
        name: 'Tasmania',
        code: 'TAS',
        selected: false,
        dueDates: {
          auditPeriod: 'Year ending 30 June',
          submissionDeadline: '30 September',
          requirements: 'Lodge with Consumer, Building and Occupational Services'
        }
      },
      {
        id: 'act',
        name: 'Australian Capital Territory',
        code: 'ACT',
        selected: false,
        dueDates: {
          auditPeriod: 'Year ending 30 June',
          submissionDeadline: '30 September',
          requirements: 'Lodge via Access Canberra online form'
        }
      },
      {
        id: 'nt',
        name: 'Northern Territory',
        code: 'NT',
        selected: false,
        dueDates: {
          auditPeriod: 'Year ending 30 June',
          submissionDeadline: '30 September',
          requirements: 'Auditor delivers to Agents Licensing Board NT'
        }
      }
    ],
    currentStep: 'businessType'
  })

  const handleBusinessTypeSelect = useCallback((businessTypeId: string) => {
    setWorkflow(prev => ({
      ...prev,
      businessTypes: prev.businessTypes.map(type => ({
        ...type,
        selected: type.id === businessTypeId
      }))
    }))
  }, [])

  const handleStateSelect = useCallback((stateId: string) => {
    setWorkflow(prev => ({
      ...prev,
      operatingStates: prev.operatingStates.map(state => ({
        ...state,
        selected: state.id === stateId ? !state.selected : state.selected
      }))
    }))
  }, [])

  const handleNextStep = useCallback(() => {
    setWorkflow(prev => ({
      ...prev,
      currentStep: prev.currentStep === 'businessType' ? 'operatingStates' : 'summary'
    }))
  }, [])

  const handlePreviousStep = useCallback(() => {
    setWorkflow(prev => ({
      ...prev,
      currentStep: prev.currentStep === 'operatingStates' ? 'businessType' : 'operatingStates'
    }))
  }, [])

  const getSelectedBusinessType = useCallback(() => {
    return workflow.businessTypes.find(type => type.selected)
  }, [workflow.businessTypes])

  const getSelectedStates = useCallback(() => {
    return workflow.operatingStates.filter(state => state.selected)
  }, [workflow.operatingStates])

  const canProceedToNextStep = useCallback(() => {
    if (workflow.currentStep === 'businessType') {
      return workflow.businessTypes.some(type => type.selected)
    }
    if (workflow.currentStep === 'operatingStates') {
      return workflow.operatingStates.some(state => state.selected)
    }
    return false
  }, [workflow])

  const renderBusinessTypeStep = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 shadow-sm">
        <div className="flex items-start space-x-4 mb-6">
          <div className="p-3 bg-primary-500 rounded-xl">
            <FileCheck className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Company Type Classification</h2>
            <p className="text-gray-600">
              Select the type of business to customize the audit workflow and document requirements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workflow.businessTypes.map((businessType) => {
            const IconComponent = businessType.icon
            return (
              <div
                key={businessType.id}
                onClick={() => handleBusinessTypeSelect(businessType.id)}
                className={`
                  relative p-6 rounded-xl border-2 cursor-pointer transition-all duration-200 transform hover:scale-105 hover:shadow-md
                  ${businessType.selected 
                    ? 'border-primary-500 bg-primary-50 shadow-lg' 
                    : 'border-gray-200 bg-white hover:border-primary-300'
                  }
                `}
              >
                {businessType.selected && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="h-6 w-6 text-primary-500" />
                  </div>
                )}
                
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${
                    businessType.selected ? 'bg-primary-500' : 'bg-gray-100'
                  }`}>
                    <IconComponent className={`h-6 w-6 ${
                      businessType.selected ? 'text-white' : 'text-gray-600'
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {businessType.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {businessType.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <DollarSign className="h-4 w-4 text-green-600 mr-2" />
                        <span className="text-green-600 font-semibold">{businessType.pricing}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-blue-600">{businessType.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )

  const renderOperatingStatesStep = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 shadow-sm">
        <div className="flex items-start space-x-4 mb-6">
          <div className="p-3 bg-primary-500 rounded-xl">
            <MapPin className="h-6 w-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Operating States</h2>
            <p className="text-gray-600">
              Select all states where this business operates. This will determine audit requirements.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {workflow.operatingStates.map((state) => (
            <div
              key={state.id}
              onClick={() => handleStateSelect(state.id)}
              className={`
                relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 transform hover:scale-105
                ${state.selected 
                  ? 'border-primary-500 bg-primary-50 shadow-md' 
                  : 'border-gray-200 bg-white hover:border-primary-300'
                }
              `}
            >
              {state.selected && (
                <div className="absolute top-3 right-3">
                  <CheckCircle className="h-5 w-5 text-primary-500" />
                </div>
              )}
              
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${
                  state.selected ? 'bg-primary-500' : 'bg-gray-100'
                }`}>
                  <MapPin className={`h-5 w-5 ${
                    state.selected ? 'text-white' : 'text-gray-600'
                  }`} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-gray-900 font-bold mb-1">
                    {state.name}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {state.code}
                  </p>
                  
                  {state.selected && (
                    <div className="space-y-1 text-xs text-gray-600">
                      <div><strong>Audit Period:</strong> {state.dueDates.auditPeriod}</div>
                      <div><strong>Due Date:</strong> {state.dueDates.submissionDeadline}</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {getSelectedStates().length > 0 && (
          <div className="mt-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl">
            <h4 className="text-green-800 font-bold mb-2 flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Selected States ({getSelectedStates().length})
            </h4>
            <div className="grid grid-cols-1 gap-2">
              {getSelectedStates().map((state) => (
                <div key={state.id} className="bg-white rounded-lg p-3 border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-900 font-semibold">{state.name} ({state.code})</span>
                  </div>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div><strong>Audit Period:</strong> {state.dueDates.auditPeriod}</div>
                    <div><strong>Submission:</strong> {state.dueDates.submissionDeadline}</div>
                    <div><strong>Requirements:</strong> {state.dueDates.requirements}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const renderSummaryStep = () => {
    const selectedBusinessType = getSelectedBusinessType()
    const selectedStates = getSelectedStates()
    
    return (
      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 shadow-sm">
          <div className="flex items-start space-x-4 mb-6">
            <div className="p-3 bg-green-500 rounded-xl">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">Audit Configuration Summary</h2>
              <p className="text-gray-600">
                Review your audit service configuration before proceeding.
              </p>
            </div>
          </div>

          {selectedBusinessType && (
            <div className="mb-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                <selectedBusinessType.icon className="h-5 w-5 mr-2 text-primary-500" />
                {selectedBusinessType.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-green-600 font-semibold">{selectedBusinessType.pricing}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 text-blue-600 mr-2" />
                  <span className="text-blue-600">{selectedBusinessType.duration}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-gray-900 font-semibold mb-2">Audit Requirements:</h4>
                <ul className="space-y-1">
                  {selectedBusinessType.requirements.map((requirement, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <CheckCircle className="h-3 w-3 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
              <MapPin className="h-5 w-5 mr-2 text-primary-500" />
              Operating States ({selectedStates.length})
            </h3>
            
            <div className="space-y-3">
              {selectedStates.map((state) => (
                <div key={state.id} className="bg-white rounded-lg p-3 border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-900 font-semibold">{state.name}</span>
                    <span className="text-primary-600 text-sm font-semibold">{state.code}</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-gray-600">
                    <div><strong>Audit Period:</strong> {state.dueDates.auditPeriod}</div>
                    <div><strong>Due Date:</strong> {state.dueDates.submissionDeadline}</div>
                    <div className="md:col-span-2"><strong>Submission:</strong> {state.dueDates.requirements}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 px-6 rounded-xl transition-colors duration-200 flex items-center justify-center">
              <FileCheck className="h-5 w-5 mr-2" />
              Book Audit Service
            </button>
            
            <button className="flex-1 border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center">
              <Shield className="h-5 w-5 mr-2" />
              Request Quote
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-4 border border-primary-200">
            <Shield className="h-4 w-4 mr-2" />
            <span>Professional Audit Configuration</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trust Account Audit Setup
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Configure your professional audit service by selecting your business type and operating locations.
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[
              { step: 'businessType', label: 'Business Type', icon: Briefcase },
              { step: 'operatingStates', label: 'Operating States', icon: MapPin },
              { step: 'summary', label: 'Summary', icon: CheckCircle }
            ].map((item, index) => {
              const IconComponent = item.icon
              const isActive = workflow.currentStep === item.step
              const isCompleted = 
                (item.step === 'businessType' && workflow.businessTypes.some(t => t.selected)) ||
                (item.step === 'operatingStates' && workflow.operatingStates.some(s => s.selected)) ||
                (item.step === 'summary' && workflow.currentStep === 'summary')
              
              return (
                <div key={item.step} className="flex items-center">
                  <div className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary-500 text-white' 
                      : isCompleted 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    <IconComponent className="h-4 w-4" />
                    <span className="font-semibold text-sm">{item.label}</span>
                  </div>
                  {index < 2 && (
                    <ArrowRight className="h-4 w-4 text-gray-400 mx-2" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="space-y-6">
          {workflow.currentStep === 'businessType' && renderBusinessTypeStep()}
          {workflow.currentStep === 'operatingStates' && renderOperatingStatesStep()}
          {workflow.currentStep === 'summary' && renderSummaryStep()}
        </div>

        {workflow.currentStep !== 'summary' && (
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={handlePreviousStep}
              disabled={workflow.currentStep === 'businessType'}
              className="px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-semibold"
            >
              ← Previous
            </button>
            
            <button
              onClick={handleNextStep}
              disabled={!canProceedToNextStep()}
              className="px-6 py-3 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 flex items-center"
            >
              <span>Continue</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </button>
          </div>
        )}

        <div className="mt-8 bg-red-50 border-2 border-red-200 rounded-xl p-6">
          <div className="flex items-start space-x-3">
            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h4 className="text-red-800 font-bold mb-1">Emergency Audit Support</h4>
              <p className="text-red-700 text-sm mb-2">
                Need urgent compliance assistance? Our 24/7 emergency audit service is available for immediate support.
              </p>
              
              <a
                href="tel:1300283487"
                className="inline-flex items-center text-red-700 hover:text-red-800 font-semibold text-sm transition-colors duration-200"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span>Call 1300 AUDITS</span>
                <ArrowRight className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}