import { forwardRef } from 'react'

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  optional?: boolean
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, optional, ...props }, ref) => {
    return (
      <div>
        <label className="flex justify-between">
          <span className="block text-sm font-medium text-gray-700">
            {label}
          </span>
          {optional && (
            <span className="text-sm text-gray-500">Optional</span>
          )}
        </label>
        
        <textarea
          ref={ref}
          rows={4}
          className={`mt-1 block w-full rounded-md shadow-sm
            ${error
              ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
            } sm:text-sm`}
          {...props}
        />
        
        {error && (
          <p className="mt-1 text-sm text-red-600">{error}</p>
        )}
      </div>
    )
  }
)

FormTextarea.displayName = 'FormTextarea'

export default FormTextarea
