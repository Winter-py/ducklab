# Home Lab Monitoring Dashboard

## Overview

This project is a desktop application that allows users to monitor their home lab by detecting and displaying networked devices (e.g., NAS, PCs, IoT devices). It is built using Go for the backend and Electron for the frontend.

# Features

Automatic Device Discovery: Uses ping, ARP, mDNS, and SNMP to detect devices on the network.

Real-Time Monitoring: Devices dynamically appear in the Electron dashboard.

WebSocket Communication: Backend updates the frontend in real time.

Cross-Platform Support: Works on Windows, macOS, and Linux.

Technologies Used

Backend (Go)

net - Network scanning

github.com/go-ping/ping - ICMP-based device detection

github.com/j-keck/arping - ARP scanning

github.com/hashicorp/mdns - mDNS service discovery

github.com/gosnmp/gosnmp - SNMP-based detection

github.com/gorilla/websocket - WebSocket communication

Frontend (Electron)

Electron.js - Desktop application framework

HTML/CSS/JavaScript - UI design

WebSocket - Real-time updates from Go backend

Project Structure
```
homelab-monitoring/
│── backend/                # Go backend
│   ├── main.go             # Entry point
│   ├── server/             # WebSocket & API logic
│   ├── discovery/          # Device discovery modules
│   ├── models/             # Data structures
│── frontend/               # Electron frontend
│   ├── main.js             # Electron entry point
│   ├── renderer/           # UI files
│── scripts/                # Utility scripts
│── start.sh                # Startup script (Linux/macOS)
│── start.bat               # Startup script (Windows)
│── README.md               # Documentation

```
Installation & Setup

Prerequisites

Install Go (https://golang.org/dl/)

Install Node.js & npm (https://nodejs.org/)

Running the Application

Clone the repository

git clone https://github.com/your-username/homelab-monitoring.git
cd homelab-monitoring

Start the backend

cd backend
go run main.go

Start the frontend

cd frontend
npm install
npm start

Or use the startup script

./start.sh  # macOS/Linux
start.bat   # Windows

# Usage

Once the application is running, it will scan the local network for devices.

Detected devices will automatically appear in the Electron dashboard.

The UI updates dynamically when new devices are found.

# Future Improvements

Add device type classification (e.g., PC, NAS, Printer, IoT)

Provide historical logs for detected devices

Allow user-configured alerts for new/unrecognized devices

Contributing

Pull requests and feature suggestions are welcome! Please fork the repository and submit a PR with your changes.

# License

This project is open-source and licensed under the MIT License.
