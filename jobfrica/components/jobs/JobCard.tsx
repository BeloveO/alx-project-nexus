import { MapPin, Clock, Building2, ArrowRight } from 'lucide-react'

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  experienceLevel: string
  salary?: string
  description?: string
  logo?: string
  tags: string[]
  postedDate: string
}

interface JobCardProps {
  job: Job
  onClick?: (job: Job) => void
}

export function JobCard({ job, onClick }: JobCardProps) {
  const handleClick = () => {
    if (onClick) {
      onClick(job)
    }
  }

  const getExperienceLevelColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'entry':
      case 'entry-level':
        return 'bg-green-100 text-green-800'
      case 'mid':
      case 'mid-level':
        return 'bg-blue-100 text-blue-800'
      case 'senior':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getJobTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'bg-blue-100 text-blue-800'
      case 'part-time':
        return 'bg-orange-100 text-orange-800'
      case 'contract':
        return 'bg-yellow-100 text-yellow-800'
      case 'remote':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer group"
      onClick={handleClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Company Logo */}
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shrink-0">
            {job.logo ? (
              <img
                src={job.logo}
                alt={`${job.company} logo`}
                className="w-8 h-8 rounded-md object-cover"
              />
            ) : (
              <Building2 className="w-6 h-6 text-white" />
            )}
          </div>

          {/* Job Info */}
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 text-lg">
              {job.title}
            </h3>
            <p className="text-gray-600 text-sm font-medium">{job.company}</p>
          </div>
        </div>

        {/* Job Type Badge */}
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getJobTypeColor(job.type)} whitespace-nowrap`}>
          {job.type}
        </span>
      </div>

      {/* Location and Posted Date */}
      <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4" />
          <span>{job.location}</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{job.postedDate}</span>
        </div>
      </div>

      {/* Experience Level */}
      <div className="mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getExperienceLevelColor(job.experienceLevel)}`}>
          {job.experienceLevel}
        </span>
      </div>

      {/* Salary */}
      {job.salary && (
        <div className="mb-4">
          <span className="font-semibold text-gray-900">{job.salary}</span>
        </div>
      )}

      {/* Tags */}
      {job.tags && job.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {job.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          {job.tags.length > 3 && (
            <span className="text-xs text-gray-500">
              +{job.tags.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Action Button */}
      <button
        className="w-full bg-gray-100 text-gray-900 py-3 px-4 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center gap-2"
        onClick={(e) => {
          e.stopPropagation()
          handleClick()
        }}
      >
        <span>View Details</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  )
}