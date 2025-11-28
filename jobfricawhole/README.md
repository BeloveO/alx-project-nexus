# Jobfrica - Backend API

## Overview

A robust, scalable backend system for a modern job board platform built with Django REST Framework. This application provides comprehensive job management, role-based access control, and optimized search capabilities for both employers and job seekers.

## Key Features

### Authentication & Authorization

- **JWT-based authentication** with refresh and access tokens
- **Role-based access control** (Admin, Employer, Job Seeker)
- Secure password management and user registration
- Permission-based API access

### Job Management

- **CRUD operations** for job postings
- **Advanced filtering** by category, location, experience level, job type
- **Search functionality** across job titles, descriptions, and companies
- **Job expiration** based on application deadlines
- **Similar job recommendations**

### User Management

- **Multiple user roles**: Admin, Employer, Job Seeker
- **Employer profiles** with company information
- **Job seeker profiles** with application history
- **Application tracking system**

### Advanced Search & Filtering

- **Full-text search** capabilities
- **Location-based filtering**
- **Salary range filtering**
- **Experience level and job type filters**
- **Optimized database queries** with proper indexing

### Application System

- **Job application management**
- **Application status tracking**
- **Employer application review**
- **Duplicate application prevention**

Notifications System

- **Real-time notifications** for applications and job alerts
- **Email notifications** for important events
- **User notification preferences**
- **Mark as read** and bulk operations

## Technologies Used

| Technology | Purpose |
|------------|---------|
| **Python 3.11+** | Core programming language |
| **Django 5.2+** | Web framework |
| **Django REST Framework** | API development |
| **PostgreSQL** | Primary database |
| **Redis** | Caching and background tasks |
| **JWT** | Secure authentication |
| **Swagger/OpenAPI** | API documentation |
| **Django Filter** | Advanced filtering capabilities |
| **Postman** | API testing and documentation |
| **Jira** | Project management and sprint planning |

## Database Schema

### Core Models

- **Users** - Extended user model with role-based permissions
- **Jobs** - Job postings with comprehensive details
- **Applications** - Job applications and status tracking
- **Notifications** - Notifies users on jobs and applications updates

## Getting Started

### Prerequisites

- Python 3.11+
- PostgreSQL 14+
- Redis 6+
- Docker (optional)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/BeloveO/alx-project-nexus.git
cd jobfricawhole/jobfrica_backend
```

2. **Set up environment variables**

```bash
cp .env.example .env
# Edit .env with your configuration
```

3. **Set up virtual environment**

```bash
python3 -m venv venv
```

4. **Activate virtual environment**

```bash
source venv/bin/activate
```

5. **Install dependencies**

```bash
pip install -r requirements.txt
```

6. **Run migrations**

```bash
python manage.py migrate
```

7. **Create superuser**

```bash
python manage.py createsuperuser
```

8. **Run development server**
```bash
python manage.py runserver
```

### Docker Installation

```bash
# Using Docker Compose
docker-compose up -d

# Run migrations
docker-compose exec web python manage.py migrate

# Create superuser
docker-compose exec web python manage.py createsuperuser
```

## 📚 API Documentation

### Access API Documentation

- **Swagger UI**: `/api/docs/`, `/swagger/`
- **ReDoc**: `redoc/`
- **API Schema**: `/api/schema/`
- **Postman Collection**: [Download Collection](https://beloveolusola-6289448.postman.co/workspace/Jobfrica_postman-API~c5658306-ecdd-4319-b34f-d1c1a564bd53/collection/50012756-095d8739-ce34-4f9f-aacc-dfe00d6df863?action=share&source=copy-link&creator=50012756)

### Key API Endpoints

#### Authentication

- `POST /api/auth/register/` - User registration
- `POST /api/auth/login/` - JWT token obtain
- `POST /api/auth/token/refresh/` - Refresh JWT token
- `POST /api/auth/logout/` - User logout
- `POST /token/` - obtain JWT token
- `POST /token/verify/` - Verify token
- `POST /token/blacklist/` - Blacklist token
- `GET/PUT /api/auth/profile/` - Get/update user profile
- `POST /api/auth/profile/password/` - Change password
- `POST /api/auth/profile/avatar/` - Upload profile avatar
- `GET /api/auth/` - Public user dashboard data
- `GET /api/auth/dashboard/` - Authenticated user dashboard data

#### Password & Email Management

- `POST /api/auth/password-reset/` - Request password reset
- `POST /api/auth/password-reset/confirm/` - Confirm password reset
- `GET /api/auth/verify-email/<token>/` - Verify email address
- `POST /api/auth/resend-verification/` - Resend verification email

#### Admin & Statistics

- `GET /api/auth/statistics/` - Admin statistics (admin only)

#### Jobs

- `GET /api/jobs/` - List all jobs (public)
- `POST /api/jobs/` - Create job (employers only)
- `GET /api/jobs/{id}/` - Retrieve job details
- `PUT /api/jobs/{id}/` - Update job (owner/admin)
- `DELETE /api/jobs/{id}/` - Delete job (owner/admin)
- `GET /api/jobs/{id}/similar/` - Get similar jobs
- `POST /api/jobs/{id}/apply/` - Apply for job
- `GET /api/categories/` - List all categories
- `POST /api/categories/` - Create category (admin only)
- `GET /api/skills/` - List all categories

#### Applications

- `GET /api/applications/` - List applications (employer/admin)
- `GET /api/applications/my-applications/` - User's applications
- `GET /api/jobs/{id}/applications/` - Job applications (employer)

#### Notifications

- `GET /api/notifications/` - List all user notifications
- `GET /api/notifications/unread/` - List unread notifications
- `GET /api/notifications/<id>/` - Get specific notification details
- `POST /api/notifications/<id>/mark-read/` - Mark notification as read
- `POST /api/notifications/mark-all-read/` - Mark all notifications as read
- `GET/PUT /api/notifications/preferences/` - Get/update notification preferences

## 🔐 Role-Based Access Control

### User Roles

1. **Admin**
   - Full system access
   - User management
   - Category management
   - View all applications

2. **Employer**
   - Create and manage job postings
   - View applications for their jobs
   - Company profile management

3. **Job Seeker**
   - Browse and search jobs
   - Apply for jobs
   - Manage personal applications
   - Profile management

## 🔍 Search & Filtering

### Available Filters

- `search` - Full-text search in title, description, company
- `category` - Filter by job category
- `location` - Filter by job location
- `job_type` - Full-time, Part-time, Contract, etc.
- `experience_level` - Entry, Mid, Senior, Executive
- `salary_min` / `salary_max` - Salary range filtering
- `company` - Filter by specific company

### Example Search Queries

```http
GET /api/jobs/?search=python&location=remote&experience_level=mid&salary_min=50000
GET /api/jobs/?category=technology&job_type=full_time
```


## 🧪 Postman Testing

### Postman Collection Setup

1. **Import Collection**
   - Download the Postman collection from `/docs/postman/`
   - Import into Postman using "Import" button
   - Or use direct link: [Postman Collection](https://www.postman.com/your-workspace/collection/your-collection-id)

2. **Environment Setup**
   ```json
   {
     "base_url": "http://localhost:8000",
     "token": "your_jwt_token_here",
     "admin_token": "admin_jwt_token_here"
   }
   ```

3. **Test Automation**
   ```bash
   # Run collection tests
   npm install -g newman
   newman run collections/JobBoardAPI.postman_collection.json -e environments/Development.postman_environment.json
   ```

### Key Test Scenarios

#### Authentication Flow
```javascript
// Pre-request script for authentication
pm.sendRequest({
    url: pm.variables.get("base_url") + '/api/auth/login/',
    method: 'POST',
    header: 'Content-Type:application/json',
    body: {
        mode: 'raw',
        raw: JSON.stringify({
            email: 'test@example.com',
            password: 'testpass123'
        })
    }
}, function (err, res) {
    pm.environment.set("token", res.json().access);
});
```

#### Job CRUD Tests
- Create job posting (Employer)
- Update job posting (Owner)
- Delete job posting (Admin)
- Public job listing (Unauthenticated)

#### Notification Tests
- Mark notifications as read
- Test notification preferences
- Bulk operations

## 🎯 Jira Sprint Management

### Project Setup in Jira

1. **Board Configuration**
   - **Project**: Job Board Backend
   - **Board Type**: Scrum
   - **Sprint Duration**: 2 weeks

2. **Issue Types**
   - **Epic**: Major features (Authentication, Job Management, Notifications)
   - **Story**: User stories with acceptance criteria
   - **Task**: Technical implementation tasks
   - **Bug**: Defect tracking
   - **Spike**: Research and investigation

### Sprint Workflow

#### Sprint Planning
```markdown
**Sprint 3: Notifications & Enhanced Search**
- **Duration**: 2024-01-15 to 2024-01-28
- **Capacity**: 40 story points
- **Goals**:
  - Implement real-time notifications system
  - Enhance search with advanced filters
  - Optimize database queries
```

#### User Story Template
```markdown
**As a** job seeker
**I want to** receive notifications when my application status changes
**So that** I can stay updated on my job applications

**Acceptance Criteria:**
- [ ] Notification is created when application status changes
- [ ] Email is sent if user has email notifications enabled
- [ ] Notification appears in user's notification list
- [ ] User can mark notification as read
```

#### Sprint Backlog Example
| Issue Key | Title | Story Points | Assignee | Status |
|-----------|-------|--------------|----------|--------|
| JOB-101 | Implement notification models | 3 | Backend Dev | Done |
| JOB-102 | Create notification endpoints | 5 | Backend Dev | In Progress |
| JOB-103 | Email notification service | 3 | Backend Dev | To Do |
| JOB-104 | Notification preferences | 2 | Backend Dev | To Do |

### Daily Standup Format
```markdown
**Yesterday**: Worked on JOB-102 (notification endpoints)
**Today**: Completing JOB-102 and starting JOB-103
**Blockers**: None
```

## 🔐 Role-Based Access Control

### User Roles
1. **Admin**
   - Full system access
   - User management
   - Category management
   - View all applications
   - Access to statistics

2. **Employer**
   - Create and manage job postings
   - View applications for their jobs
   - Company profile management
   - Receive application notifications

3. **Job Seeker**
   - Browse and search jobs
   - Apply for jobs
   - Manage personal applications
   - Profile management
   - Set notification preferences

## 🔍 Search & Filtering

### Available Filters
- `search` - Full-text search in title, description, company
- `category` - Filter by job category
- `location` - Filter by job location
- `job_type` - Full-time, Part-time, Contract, etc.
- `experience_level` - Entry, Mid, Senior, Executive
- `salary_min` / `salary_max` - Salary range filtering
- `company` - Filter by specific company

### Example Search Queries
```http
GET /api/jobs/?search=python&location=remote&experience_level=mid&salary_min=50000
GET /api/jobs/?category=technology&job_type=full_time
```

## ⚡ Performance Optimizations

### Database Optimization

- **Proper indexing** on frequently queried fields
- **Selective field loading** to reduce data transfer
- **Query optimization** using Django ORM best practices
- **Database connection pooling**

### Caching Strategy

- **Redis caching** for frequently accessed data
- **Query result caching**
- **Template fragment caching**
- **Rate limiting** for API endpoints

### Background Tasks

- **Email notifications** for applications
- **Job expiration** checks
- **Analytics** and reporting
- **File processing**

## 🧪 Testing

```bash
# Run all tests
python manage.py test

# Run with coverage
coverage run manage.py test
coverage report

# Run specific test modules
python manage.py test apps.jobs.tests
```

## 🚀 Deployment

### Production Setup

1. **Set environment to production**
2. **Configure PostgreSQL database**
3. **Set up Redis for caching**
4. **Configure static files with WhiteNoise**
5. **Set up SSL/HTTPS**
6. **Configure monitoring and logging**

### Environment Variables

```env
DEBUG=False
SECRET_KEY=your-production-secret-key
DATABASE_URL=postgres://user:pass@host:port/dbname
REDIS_URL=redis://localhost:6379
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
CORS_ALLOWED_ORIGINS=https://your-frontend.com
```

## 📊 Monitoring & Logging

- **Django Debug Toolbar** (development)
- **Application performance monitoring**
- **Error tracking with Sentry**
- **Request/response logging**
- **Database query logging**

## 🤝 Contributing

### Development Workflow

1. **Create feature branch** from `develop`
2. **Implement changes** with tests
3. **Update Postman collection** if API changes
4. **Create Pull Request** with Jira ticket reference
5. **Code review** and merge

### Commit Convention

- `feat:` New features (JOB-123)
- `fix:` Bug fixes (JOB-124)
- `docs:` Documentation updates
- `test:` Test additions/modifications
- `chore:` Maintenance tasks

### Pull Request Template

```markdown
## Description
Brief description of the changes

## Changes
- List of changes made

## Testing
- [ ] Unit tests added/updated
- [ ] Postman tests updated
- [ ] All tests passing

## Postman Updates
- [ ] Collection updated if API changed
- [ ] Environment variables updated if needed
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email `beloveolusola@gmail.com` or create an issue in the repository.

## 🔗 Links

- [Postman Collection](https://beloveolusola-6289448.postman.co/workspace/Jobfrica_postman-API~c5658306-ecdd-4319-b34f-d1c1a564bd53/collection/50012756-095d8739-ce34-4f9f-aacc-dfe00d6df863?action=share&source=copy-link&creator=50012756)
- [Frontend Repository](https://github.com/theisraelolaleye/alx-project-nexus/tree/main/jobfrica)
- [API Documentation](https://jobfrica-backend.onrender.com/api/docs)
- [Frontend Integration](https://jobfrica.vercel.app/)

## 🤝 Contributors

- Belove Olusola (Backend Developer) - [Github](https://github.com/BeloveO), [Email](beloveolusola@gmail.com)
- Israel Olaleye (Frontend Developer) - [Github](https://github.com/theisraelolaleye), [Email](theisraelolaleye@gmail.com)

---

**Built with ❤️ using Django REST Framework**
