# fantastic-adventure
coding platform project


+---------------------+              +---------------------+
|      Start          |              |                     |
|---------------------|              |                     |
|                     |              |                     |
|  User navigates to  |              |                     |
|  registration or   |              |                     |
|  login page         +------------->|  Server receives    |
|                     |              |  request            |
+---------------------+              |                     |
                                    +---------------------+
                                            |
                                            |
                                            v
+---------------------+              +---------------------+
|                     |              |                     |
|                     |              |                     |
|   User submits      +------------->|  Server processes   |
|   registration or   |              |  the request        |
|   login data        |              |                     |
|                     |              |                     |
+---------------------+              +---------------------+
                                            |
                                            |
                                            v
+---------------------+              +---------------------+
|                     |              |                     |
|                     |              |                     |
|  Server validates   +------------->|  Database checks    |
|  user data          |              |  for existing user  |
|                     |              |                     |
+---------------------+              +---------------------+
                                            |
                                            |
                                            v
+---------------------+              +---------------------+
|                     |              |                     |
|                     |              |                     |
|  If registration:   |              |  If login:          |
|  - New user created +------------->|  - User credentials |
|  - Success response |              |    validated        |
|                     |              |  - JWT generated    |
|                     |              |  - JWT sent to user |
+---------------------+              +---------------------+
                                            |
                                            |
                                            v
+---------------------+              +---------------------+
|                     |              |                     |
|                     |              |                     |
|  Response sent to   +------------->|  Response sent to   |
|  user               |              |  user               |
|                     |              |                     |
+---------------------+              +---------------------+
                                            |
                                            |
                                            v
+---------------------+              +---------------------+
|                     |              |                     |
|                     |              |                     |
|      End            |              |        End          |
|---------------------|              |---------------------|
|                     |              |                     |
|                     |              |                     |
+---------------------+              +---------------------+
