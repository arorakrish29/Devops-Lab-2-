# Report on Containerization and Container Orchestration

## 1. Introduction

Containerization is a technology that packages an application along with its required libraries, dependencies and configuration files into a single unit called a container. It allows applications to run consistently across different computing environments.

Container orchestration is the process of automatically managing containers, including their deployment, scaling, networking, availability and recovery.

Docker is a widely used containerization platform, while Kubernetes is a popular container orchestration platform.

## 2. Containerization

Containerization is a method of application deployment in which applications and their dependencies are packaged into isolated environments called containers.

Each container shares the host operating system's kernel but runs independently from other containers.

### Features of Containerization

- **Portability:** Containers can run across different environments.
- **Isolation:** Applications run in separate environments.
- **Lightweight:** Containers share the host operating system kernel.
- **Fast deployment:** Containers can start quickly.
- **Consistency:** Applications behave consistently across development, testing and production environments.

### Advantages of Containerization

1. Reduces environment-related compatibility problems.
2. Makes application deployment faster.
3. Uses system resources efficiently.
4. Simplifies application development and testing.
5. Supports microservices architecture.

## 3. Docker

Docker is an open-source platform used to build, package and run applications inside containers.

### Important Docker Components

- **Docker Engine:** The platform responsible for building and running containers.
- **Docker Image:** A read-only template containing application code and dependencies.
- **Docker Container:** A running instance of a Docker image.
- **Dockerfile:** A text file containing instructions to build a Docker image.
- **Docker Hub:** An online registry used to store and share Docker images.

### Basic Docker Workflow

1. Write application code.
2. Create a Dockerfile.
3. Build a Docker image.
4. Run a container using that image.
5. Test and deploy the application.

## 4. Container Orchestration

Container orchestration is the automated management of multiple containers across one or more machines.

When applications contain many containers, manually managing them becomes difficult. Orchestration platforms automate these operations.

### Main Functions

- Container deployment and scheduling.
- Automatic scaling.
- Load balancing.
- Service discovery and networking.
- Health monitoring.
- Automatic recovery of failed containers.
- Rolling updates and rollbacks.

## 5. Kubernetes

Kubernetes is an open-source container orchestration platform used to automate the deployment, scaling and management of containerized applications.

### Main Components of Kubernetes

**1. Cluster:** A group of machines that run containerized applications.

**2. Control Plane:** Manages the Kubernetes cluster and makes decisions about scheduling and cluster state.

**3. Worker Node:** A machine that runs application workloads.

**4. Pod:** The smallest deployable unit in Kubernetes. It contains one or more containers.

**5. Deployment:** Manages application Pods and maintains the desired number of replicas.

**6. Service:** Provides a stable network endpoint to access a group of Pods.

**7. kubelet:** An agent running on each worker node that communicates with the control plane and manages Pods.

## 6. Docker vs Kubernetes

| Docker | Kubernetes |
|---|---|
| Used for containerization | Used for container orchestration |
| Builds and runs containers | Manages containerized applications |
| Uses images and containers | Uses Pods, Deployments and Services |
| Provides container lifecycle operations | Automates deployment and scaling |
| Docker Engine runs containers | Kubernetes manages workloads across a cluster |

Docker and Kubernetes are complementary technologies. Docker can be used to build container images, while Kubernetes can manage applications using those images.

## 7. Benefits of Container Orchestration

1. **Scalability:** Automatically or manually increases and decreases application replicas.
2. **High Availability:** Maintains application availability by replacing failed Pods.
3. **Load Balancing:** Distributes network traffic across application instances.
4. **Self-Healing:** Restarts or replaces failed containers.
5. **Rolling Updates:** Updates applications gradually without stopping the entire application.
6. **Rollback:** Allows applications to return to a previous working version.

## 8. Real-World Applications

- **E-commerce:** Manages separate containers for payment, inventory and product services.
- **Banking:** Deploys and manages different application services independently.
- **Streaming Platforms:** Scales services according to user traffic.
- **Cloud Computing:** Supports portable application deployment across cloud environments.
- **Microservices:** Manages independently deployable application components.

## 9. Conclusion

Containerization makes applications portable, lightweight and consistent across different environments. Docker simplifies the process of building and running containers, while Kubernetes automates their deployment, scaling and management.

Together, containerization and orchestration improve application reliability, scalability, resource utilization and deployment efficiency. They are important technologies in modern DevOps and cloud-native application development.

## 10. Practical Implementation

As part of this laboratory assignment, an Nginx application was deployed using Kubernetes on a Minikube cluster.

The practical implementation included:

- Creating a Kubernetes Deployment with two replicas.
- Exposing the application using a NodePort Service.
- Implementing a rolling update.
- Performing a rollback to a previous Deployment revision.
- Scaling the application from two to four replicas and back to two.

This practical work demonstrated how containerized applications can be deployed, accessed, updated, recovered and scaled using Kubernetes.