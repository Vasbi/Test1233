-- SQL to create all necessary tables for RiskTrackPro-3 local development
-- Run this after installing PostgreSQL and creating the database (e.g., risktrackpro_local)

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    registerName VARCHAR(255) NOT NULL,
    financialOption VARCHAR(255),
    projectManager VARCHAR(255) NOT NULL,
    registerDate VARCHAR(255) NOT NULL,
    organization VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS risks (
    id SERIAL PRIMARY KEY,
    priorityRank INTEGER NOT NULL,
    riskId VARCHAR(255) NOT NULL,
    issueId VARCHAR(255),
    openDate VARCHAR(255) NOT NULL,
    raisedBy VARCHAR(255) NOT NULL,
    ownedBy VARCHAR(255) NOT NULL,
    riskCause VARCHAR(255) NOT NULL,
    riskEvent VARCHAR(255) NOT NULL,
    riskEffect VARCHAR(255) NOT NULL,
    riskCategory VARCHAR(255) NOT NULL,
    probability FLOAT NOT NULL,
    impact INTEGER NOT NULL,
    riskRating INTEGER NOT NULL,
    adjustedRiskRating FLOAT,
    riskStatus VARCHAR(255) NOT NULL,
    responseType VARCHAR(255) NOT NULL,
    mitigation VARCHAR(255) NOT NULL,
    prevention VARCHAR(255) NOT NULL,
    projectId INTEGER NOT NULL REFERENCES projects(id)
);

CREATE TABLE IF NOT EXISTS issues (
    id SERIAL PRIMARY KEY,
    priorityRank INTEGER NOT NULL,
    uniqueId VARCHAR(255) NOT NULL,
    riskId VARCHAR(255),
    issueDate VARCHAR(255) NOT NULL,
    raisedBy VARCHAR(255) NOT NULL,
    ownedBy VARCHAR(255) NOT NULL,
    issueEvent VARCHAR(255) NOT NULL,
    issueEffect VARCHAR(255) NOT NULL,
    resolution VARCHAR(255),
    category VARCHAR(255) NOT NULL,
    impact INTEGER NOT NULL,
    status VARCHAR(255) NOT NULL,
    assignedTo VARCHAR(255) NOT NULL,
    closedDate VARCHAR(255),
    projectId INTEGER NOT NULL REFERENCES projects(id)
);

CREATE TABLE IF NOT EXISTS critical_dates (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    status VARCHAR(255) NOT NULL,
    entity VARCHAR(255),
    department VARCHAR(255),
    state VARCHAR(255),
    contractValue FLOAT,
    criticalIssue VARCHAR(255),
    criticalIssueDescription VARCHAR(255),
    reminderType VARCHAR(255),
    projectName VARCHAR(255),
    projectAddress VARCHAR(255),
    agreementType VARCHAR(255),
    agreementDate TIMESTAMP,
    agreementReference VARCHAR(255),
    dueDate TIMESTAMP,
    completedDate TIMESTAMP,
    notes TEXT,
    projectId INTEGER REFERENCES projects(id)
);

CREATE TABLE IF NOT EXISTS document_uploads (
    id SERIAL PRIMARY KEY,
    filename VARCHAR(255) NOT NULL,
    originalFilename VARCHAR(255) NOT NULL,
    filePath VARCHAR(255) NOT NULL,
    fileSize INTEGER NOT NULL,
    mimeType VARCHAR(255) NOT NULL,
    uploadedBy INTEGER REFERENCES users(id),
    uploadedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    analysisStatus VARCHAR(255) DEFAULT 'pending',
    analysisResults TEXT,
    analysisCompletedAt VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS project_tasks (
    id SERIAL PRIMARY KEY,
    projectId INTEGER NOT NULL REFERENCES projects(id),
    taskId VARCHAR(255) NOT NULL,
    taskName VARCHAR(255) NOT NULL,
    percentComplete FLOAT DEFAULT 0,
    startDate VARCHAR(255),
    finishDate VARCHAR(255),
    duration FLOAT,
    predecessors VARCHAR(255),
    successors VARCHAR(255),
    milestoneFlag BOOLEAN DEFAULT false,
    priority INTEGER,
    resources VARCHAR(255),
    notes TEXT,
    uploadedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS task_risk_links (
    id SERIAL PRIMARY KEY,
    taskId INTEGER NOT NULL REFERENCES project_tasks(id),
    riskId INTEGER NOT NULL REFERENCES risks(id),
    createdBy VARCHAR(255),
    aiSuggested BOOLEAN DEFAULT false,
    userConfirmed BOOLEAN DEFAULT false,
    lastValidated TIMESTAMP,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS critical_date_documents (
    id SERIAL PRIMARY KEY,
    criticalDateId INTEGER NOT NULL REFERENCES critical_dates(id),
    documentId INTEGER NOT NULL REFERENCES document_uploads(id),
    relationshipType VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS external_access_tokens (
    id SERIAL PRIMARY KEY,
    token VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    organization VARCHAR(255),
    purpose VARCHAR(255),
    accessType VARCHAR(255) NOT NULL,
    isActive BOOLEAN DEFAULT true,
    expiresAt TIMESTAMP NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    createdBy INTEGER REFERENCES users(id),
    lastUsedAt TIMESTAMP,
    ipAddress VARCHAR(255),
    accessCount INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS external_access_permissions (
    id SERIAL PRIMARY KEY,
    tokenId INTEGER NOT NULL REFERENCES external_access_tokens(id) ON DELETE CASCADE,
    criticalDateId INTEGER REFERENCES critical_dates(id) ON DELETE CASCADE,
    projectId INTEGER REFERENCES projects(id),
    canView BOOLEAN DEFAULT true,
    canEdit BOOLEAN DEFAULT false,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
