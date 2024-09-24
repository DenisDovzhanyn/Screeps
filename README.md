This project showcases the code used to manage and control creeps in the game **Screeps**. The primary objective is to automate tasks such as harvesting resources, upgrading controllers, and building structures through AI-driven behavior.

## Overview

The code consists of various roles defined for the creeps, each with its own specific responsibilities:

- **Harvester**: Responsible for collecting energy from sources and transferring it to structures that require energy.
- **Upgrader**: Focuses on upgrading the room controller, which is essential for unlocking new structures and capabilities.
- **Builder**: Handles the construction of new buildings and repairs existing structures.

### Key Features

- **Dynamic Creep Management**: The code includes logic to spawn new creeps based on current requirements, ensuring that there are enough harvesters, upgraders, and builders to maintain efficiency.
- **Resource Management**: Each creep intelligently decides when to harvest energy and when to perform their assigned tasks based on their energy levels.
- **Pathfinding**: Creeps utilize visual path styles to navigate the game environment effectively, making it easier to track their movements.

### Creep Roles

1. **Role Harvester**: Collects energy from sources and transfers it to structures.
2. **Role Upgrader**: Upgrades the room controller to progress in the game.
3. **Role Builder**: Constructs new buildings and repairs damaged ones.
