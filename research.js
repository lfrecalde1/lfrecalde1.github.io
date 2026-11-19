// Edit this file to update your website. No build step is required.
// Media, demo galleries, and links are documented in README.md.
window.portfolio = {
  'profile': {
    'name': 'Luis F. Recalde',
    'fullName': 'Luis F Recalde',
    'role': 'Research engineer & PhD candidate',
    'affiliation': 'Robotics Engineering · Worcester Polytechnic Institute',
    'portrait': {
      'src': 'assets/profile.webp',
      'alt': 'Luis F Recalde'
    },
    'intro':
      'I am a research engineer and PhD candidate in Robotics Engineering at Worcester Polytechnic Institute, working with Guanrui Li in the Aerial-robot Control and Perception (ACP) Lab.',
    'research':
      'My research aims to enable fully onboard autonomous navigation in unstructured environments. I develop control and estimation algorithms using nonlinear control theory, differential geometry, and numerical optimization.',
    'practice':
      'I take these methods from dynamical models and physics-based simulation to implementation and experiments on real robots.',
    'education':
      'I hold an MSc in Control Systems Engineering and a bachelor’s degree in Mechatronics Engineering.',
    'interests': ['Nonlinear control', 'Numerical optimization', 'State estimation', 'Robotics'],
    'links': {
      'CV': 'assets/documents/Luis_Fernando_Recalde_CV.pdf',
      'Email': 'mailto:lfrecalde@wpi.edu',
      'Google Scholar': 'https://scholar.google.com/citations?user=_v1511cAAAAJ&hl=en',
      'GitHub': 'https://github.com/lfrecalde1',
      'LinkedIn': 'https://www.linkedin.com/in/luis-f-recalde-8a6432123'
    },
    'email': 'lfrecalde@wpi.edu',
    'location': 'Worcester, Massachusetts',
    'labUrl': 'https://acp-lab.github.io/acplab-web/',
    'advisorUrl': 'https://lguanrui.github.io/',
    'advisorScholarUrl': 'https://scholar.google.com/citations?hl=en&user=v_bUoRAAAAAJ',
    'hero': {
      'src': 'assets/images/flight-paths.webp',
      'alt': 'Red and blue light trails from quadrotor flight experiments with DQ-NMPC'
    }
  },
  'publications': [
    {
      'id': 'racing',
      'title': 'DQ-MPCC: Dual-Quaternion MPCC for Quadrotor Racing',
      'authors': ['Bryan S. Guevara', 'Luis F. Recalde', 'Guanrui Li', 'Tiago Nascimento'],
      'venue': 'IEEE Robotics and Automation Letters',
      'venueShort': 'IEEE RA-L',
      'year': 2026,
      'topics': ['control'],
      'summary':
        'A dual-quaternion model predictive contouring controller for quadrotor racing, evaluated in simulation and real-world flight.',
      'links': {
        'Paper': 'https://arxiv.org/abs/2609.36482'
      },
      'bibtex':
        '@article{guevara2026dqmpcc,\n  title = {DQ-MPCC: Dual-Quaternion MPCC for Quadrotor Racing},\n  author = {Guevara, Bryan S. and Recalde, Luis F. and Li, Guanrui and Nascimento, Tiago},\n  journal = {IEEE Robotics and Automation Letters},\n  year = {2026},\n  eprint = {2609.36482},\n  archivePrefix = {arXiv}\n}',
      'featured': true,
      'media': {
        'type': 'image',
        'src': 'assets/racing.webp',
        'alt': 'Research figure for DQ-MPCC: Dual-Quaternion MPCC for Quadrotor Racing'
      },
      'details': '',
      'status': 'Accepted'
    },
    {
      'id': 'vbtmpc',
      'title': 'VBT-MPC: Vision-Based Tactile MPC for Contour Following',
      'authors': ['Edison Velasco-Sanchez', 'Luis F. Recalde', 'Guanrui Li', 'Pablo Gil'],
      'venue': 'IEEE Robotics and Automation Letters',
      'venueShort': 'IEEE RA-L',
      'year': 2026,
      'topics': ['control', 'perception', 'interaction'],
      'summary':
        'Model predictive control for robotic contour following using vision-based tactile feedback and constraints for contact maintenance and perception.',
      'links': {
        'Paper': 'https://arxiv.org/abs/2605.20392',
        'Code': 'https://github.com/EPVelasco/gs_kinova_devcontainer',
        'Project': 'https://aurova-projects.github.io/VBT-MPC/',
        'Video': 'https://www.youtube.com/watch?v=1qR1vAV7ac8'
      },
      'bibtex':
        '@article{velasco2026vbtmpc,\n  title = {VBT-MPC: Vision-Based Tactile MPC for Contour Following},\n  author = {Velasco-Sanchez, Edison and Recalde, Luis F. and Li, Guanrui and Gil, Pablo},\n  journal = {IEEE Robotics and Automation Letters},\n  year = {2026},\n  volume = {11},\n  number = {7},\n  pages = {8504--8511},\n  eprint = {2605.20392},\n  archivePrefix = {arXiv}\n}',
      'featured': true,
      'media': {
        'type': 'image',
        'src': 'assets/images/tactile-servoing.webp',
        'alt':
          'Robotic arm performing tactile contour following, including a labeled loss-of-contact case',
        'width': 1432,
        'height': 529
      },
      'details': '11(7), 8504–8511'
    },
    {
      'id': 'payload',
      'title':
        'ES-HPC-MPC: Exponentially Stable Hybrid Perception Constrained MPC for Quadrotor with Suspended Payloads',
      'authors': ['Luis F. Recalde', 'Mrunal Sarvaiya', 'Giuseppe Loianno', 'Guanrui Li'],
      'venue': 'IEEE Robotics and Automation Letters',
      'venueShort': 'IEEE RA-L',
      'year': 2026,
      'topics': ['control', 'interaction'],
      'summary':
        'Control Lyapunov and Barrier Functions within MPC for payload tracking and camera visibility, including transitions between slack and taut cable motion.',
      'links': {
        'Paper': 'https://arxiv.org/abs/2504.08841',
        'Project': 'https://lfrecalde1.github.io/es-hpc-mpc.github.io/',
        'Video': 'https://www.youtube.com/watch?v=EfpTqlWYZsI'
      },
      'bibtex':
        '@article{recalde2026eshpcmpc,\n  title = {ES-HPC-MPC: Exponentially Stable Hybrid Perception Constrained MPC for Quadrotor with Suspended Payloads},\n  author = {Recalde, Luis F. and Sarvaiya, Mrunal and Loianno, Giuseppe and Li, Guanrui},\n  journal = {IEEE Robotics and Automation Letters},\n  year = {2026},\n  volume = {11},\n  number = {1},\n  pages = {266--273},\n  eprint = {2504.08841},\n  archivePrefix = {arXiv}\n}',
      'featured': true,
      'media': {
        'type': 'image',
        'src': 'assets/images/payload-sequence.webp',
        'alt': 'Quadrotor and suspended payload motion sequences from ES-HPC-MPC experiments',
        'width': 1600,
        'height': 354
      },
      'details': '11(1), 266–273'
    },
    {
      'id': 'dqnmpc',
      'title': 'DQ-NMPC: Dual-Quaternion NMPC for Quadrotor Flight',
      'authors': ['Luis F. Recalde', 'Dhruv Agrawal', 'Jon Arrizabalaga', 'Guanrui Li'],
      'venue': 'IEEE Robotics and Automation Letters',
      'venueShort': 'IEEE RA-L',
      'year': 2025,
      'topics': ['control'],
      'summary':
        'A nonlinear predictive controller that represents quadrotor motion and pose error on the dual-quaternion manifold, evaluated in simulation and real flight.',
      'links': {
        'Paper': 'https://arxiv.org/abs/2510.11525',
        'Code': 'https://github.com/acp-lab/dq_nmpc',
        'Project': 'https://acp-lab.github.io/dq-nmpc.github.io',
        'Video': 'https://www.youtube.com/watch?v=3XxvbsIoenM'
      },
      'bibtex':
        '@article{recalde2025dqnmpc,\n  title = {DQ-NMPC: Dual-Quaternion NMPC for Quadrotor Flight},\n  author = {Recalde, Luis F. and Agrawal, Dhruv and Arrizabalaga, Jon and Li, Guanrui},\n  journal = {IEEE Robotics and Automation Letters},\n  year = {2025},\n  doi = {10.1109/LRA.2025.3623022}\n}',
      'featured': true,
      'media': {
        'type': 'image',
        'src': 'assets/images/flight-paths.webp',
        'alt': 'Red and blue light trails comparing quadrotor flight trajectories',
        'width': 1587,
        'height': 868
      },
      'details': '',
      'demos': [
        {
          'type': 'image',
          'src': 'assets/images/flight-paths.webp',
          'alt': 'Red and blue light trails comparing quadrotor flight trajectories',
          'width': 1587,
          'height': 868,
          'label': 'Flight experiment',
          'caption': 'Long-exposure trajectories from quadrotor flight experiments.'
        },
        {
          'type': 'video',
          'src': 'assets/videos/dq-nmpc-demo.mp4',
          'poster': 'assets/images/dq-nmpc-demo.webp',
          'loop': true,
          'label': 'Simulation',
          'alt': 'DQ-NMPC quadrotor simulation.',
          'caption': 'DQ-NMPC quadrotor simulation.'
        }
      ]
    },
    {
      'id': 'loam',
      'title': 'DualQuat-LOAM: LiDAR Odometry and Mapping Parametrized on Dual Quaternions',
      'authors': [
        'Edison P. Velasco-Sánchez',
        'Luis F. Recalde',
        'Guanrui Li',
        'Francisco A. Candelas-Herias',
        'Santiago T. Puente-Mendez',
        'Fernando Torres-Medina'
      ],
      'venue': 'Robotics and Autonomous Systems',
      'venueShort': 'RAS',
      'year': 2025,
      'topics': ['perception'],
      'summary':
        'A unified dual-quaternion representation of point-cloud features and pose optimization for LiDAR odometry and mapping.',
      'links': {
        'Paper': 'https://arxiv.org/abs/2410.13541',
        'Code': 'https://github.com/AUROVA-LAB/aurova_odom/tree/main/dualquat_LOAM',
        'Project': 'https://aurova-projects.github.io/dualquat_loam/',
        'Video': 'https://www.youtube.com/watch?v=4RgnAGatIVw'
      },
      'bibtex':
        '@article{velasco2025dualquatloam,\n  title = {DualQuat-LOAM: LiDAR Odometry and Mapping Parametrized on Dual Quaternions},\n  author = {Velasco-Sánchez, Edison P. and Recalde, Luis F. and Li, Guanrui and Candelas-Herias, Francisco A. and Puente-Mendez, Santiago T. and Torres-Medina, Fernando},\n  journal = {Robotics and Autonomous Systems},\n  volume = {191},\n  pages = {105009},\n  year = {2025},\n  doi = {10.1016/j.robot.2025.105009}\n}',
      'featured': true,
      'media': {
        'type': 'image',
        'src': 'assets/images/lidar-odometry.webp',
        'alt': 'LiDAR point-cloud map and pose estimates from dual-quaternion odometry',
        'width': 1032,
        'height': 790
      },
      'details': '191, 105009'
    },
    {
      'id': 'pv',
      'title': 'Visual Servoing NMPC Applied to UAVs for Photovoltaic Array Inspection',
      'authors': [
        'Edison Velasco-Sánchez',
        'Luis F. Recalde',
        'Bryan S. Guevara',
        'José Varela-Aldás',
        'Francisco A. Candelas',
        'Santiago T. Puente',
        'Daniel C. Gandolfo'
      ],
      'venue': 'IEEE Robotics and Automation Letters',
      'venueShort': 'IEEE RA-L',
      'year': 2024,
      'topics': ['control', 'perception'],
      'summary':
        'Visual servoing with NMPC, RGB-D features, and Kalman filtering for low-altitude inspection of photovoltaic arrays.',
      'links': {
        'Paper': 'https://doi.org/10.1109/LRA.2024.3360876',
        'Code': 'https://github.com/EPVelasco/VisualServoing_NMPC',
        'Project': 'https://aurova.ua.es/visual-servo-NMPC_RAL-IROS/'
      },
      'bibtex':
        '@article{velasco2024visual,\n  title = {Visual Servoing NMPC Applied to UAVs for Photovoltaic Array Inspection},\n  author = {Velasco-Sánchez, Edison and Recalde, Luis F. and Guevara, Bryan S. and Varela-Aldás, José and Candelas, Francisco A. and Puente, Santiago T. and Gandolfo, Daniel C.},\n  journal = {IEEE Robotics and Automation Letters},\n  year = {2024},\n  volume = {9},\n  number = {3},\n  pages = {2766--2773},\n  doi = {10.1109/LRA.2024.3360876}\n}',
      'featured': true,
      'media': {
        'type': 'image',
        'src': 'assets/images/solar-inspection.webp',
        'alt': 'UAV inspecting a photovoltaic array with a downward-facing camera',
        'width': 1002,
        'height': 802
      },
      'details': '9(3), 2766–2773'
    },
    {
      'id': 'teaching-nmpc',
      'title': 'Teaching nonlinear model predictive control: a two-tank process case study',
      'authors': ['Jeysson Tapia', 'Luis F. Recalde', 'Oscar Camacho'],
      'venue': 'IET Conference Proceedings',
      'details': '2026(8), 190–195',
      'year': 2026,
      'topics': ['control'],
      'links': {
        'Paper': 'https://doi.org/10.1049/icp.2026.2829'
      },
      'bibtex':
        '@inproceedings{teachingnmpc2026,\n  title = {Teaching nonlinear model predictive control: a two-tank process case study},\n  author = {Tapia, Jeysson and Recalde, Luis F. and Camacho, Oscar},\n  booktitle = {IET Conference Proceedings},\n  year = {2026},\n  volume = {2026},\n  number = {8},\n  pages = {190--195},\n  doi = {10.1049/icp.2026.2829}\n}'
    },
    {
      'id': 'unmodeled-dynamics',
      'title':
        'Estimation of Unmodeled Dynamics: Nonlinear MPC and Adaptive Control Law With Momentum Observer Dynamic',
      'authors': [
        'Bryan S. Guevara',
        'Luis F. Recalde',
        'Viviana Moya',
        'José Varela-Aldás',
        'Daniel C. Gandolfo',
        'Juan M. Toibero'
      ],
      'venue': 'IEEE Access',
      'details': '12, 77121–77132',
      'year': 2024,
      'topics': ['control'],
      'links': {
        'Paper': 'https://doi.org/10.1109/access.2024.3407684'
      },
      'bibtex':
        '@article{unmodeleddynamics2024,\n  title = {Estimation of Unmodeled Dynamics: Nonlinear MPC and Adaptive Control Law With Momentum Observer Dynamic},\n  author = {Guevara, Bryan S. and Recalde, Luis F. and Moya, Viviana and Varela-Aldás, José and Gandolfo, Daniel C. and Toibero, Juan M.},\n  journal = {IEEE Access},\n  year = {2024},\n  volume = {12},\n  pages = {77121--77132},\n  doi = {10.1109/access.2024.3407684}\n}'
    },
    {
      'id': 'barrier-lyapunov-mpcc',
      'title':
        'Model Predictive Contouring Control with Barrier and Lyapunov Functions for Stable Path-Following in UAV systems',
      'authors': [
        'Bryan S. Guevara',
        'Viviana Moya',
        'Luis F. Recalde',
        'David Pozo-Espin',
        'Daniel C. Gandolfo',
        'Juan M. Toibero'
      ],
      'venue': 'arXiv',
      'details': '2411.00668',
      'status': 'Preprint',
      'year': 2024,
      'topics': ['control'],
      'links': {
        'Paper': 'https://arxiv.org/abs/2411.00668'
      },
      'bibtex':
        '@misc{guevara2024barriermpcc,\n  title = {Model Predictive Contouring Control with Barrier and Lyapunov Functions for Stable Path-Following in UAV systems},\n  author = {Guevara, Bryan S. and Moya, Viviana and Recalde, Luis F. and Pozo-Espin, David and Gandolfo, Daniel C. and Toibero, Juan M.},\n  year = {2024},\n  eprint = {2411.00668},\n  archivePrefix = {arXiv},\n  primaryClass = {cs.RO}\n}'
    },
    {
      'id': 'aerial-manipulator-simulator',
      'title': 'Open-Access Platform for the Simulation of Aerial Robotic Manipulators',
      'authors': [
        'José Varela-Aldás',
        'Luis F. Recalde',
        'Bryan S. Guevara',
        'Victor H. Andaluz',
        'Daniel C. Gandolfo'
      ],
      'venue': 'IEEE Access',
      'details': '12, 49735–49751',
      'year': 2024,
      'topics': ['interaction'],
      'links': {
        'Paper': 'https://doi.org/10.1109/access.2024.3384986'
      },
      'bibtex':
        '@article{aerialmanipulatorsimulator2024,\n  title = {Open-Access Platform for the Simulation of Aerial Robotic Manipulators},\n  author = {Varela-Aldás, José and Recalde, Luis F. and Guevara, Bryan S. and Andaluz, Victor H. and Gandolfo, Daniel C.},\n  journal = {IEEE Access},\n  year = {2024},\n  volume = {12},\n  pages = {49735--49751},\n  doi = {10.1109/access.2024.3384986}\n}'
    },
    {
      'id': 'tracking',
      'title':
        'A Comparative Study between NMPC and Baseline Feedback Controllers for UAV Trajectory Tracking',
      'authors': [
        'Bryan S. Guevara',
        'Luis F. Recalde',
        'José Varela-Aldás',
        'Victor H. Andaluz',
        'Daniel C. Gandolfo',
        'Juan M. Toibero'
      ],
      'venue': 'Drones',
      'details': '7(2), 144',
      'year': 2023,
      'topics': ['control'],
      'links': {
        'Paper': 'https://doi.org/10.3390/drones7020144'
      },
      'bibtex':
        '@article{tracking2023,\n  title = {A Comparative Study between NMPC and Baseline Feedback Controllers for UAV Trajectory Tracking},\n  author = {Guevara, Bryan S. and Recalde, Luis F. and Varela-Aldás, José and Andaluz, Victor H. and Gandolfo, Daniel C. and Toibero, Juan M.},\n  journal = {Drones},\n  year = {2023},\n  volume = {7},\n  number = {2},\n  pages = {144},\n  doi = {10.3390/drones7020144}\n}'
    },
    {
      'id': 'adaptive-nmpc',
      'title': 'Adaptive NMPC-RBF with Application to Manipulator Robots',
      'authors': [
        'Luis F. Recalde',
        'José Varela',
        'Bryan S. Guevara',
        'Victor Andaluz',
        'Daniel Gandolfo'
      ],
      'venue':
        '2023 9th International Conference on Control, Decision and Information Technologies (CoDIT)',
      'details': 'pp. 2475–2482',
      'year': 2023,
      'topics': ['control', 'interaction'],
      'links': {
        'Paper': 'https://doi.org/10.1109/codit58514.2023.10284283'
      },
      'bibtex':
        '@inproceedings{adaptivenmpc2023,\n  title = {Adaptive NMPC-RBF with Application to Manipulator Robots},\n  author = {Recalde, Luis F. and Varela, José and Guevara, Bryan S. and Andaluz, Victor and Gandolfo, Daniel},\n  booktitle = {2023 9th International Conference on Control, Decision and Information Technologies (CoDIT)},\n  year = {2023},\n  pages = {2475--2482},\n  doi = {10.1109/codit58514.2023.10284283}\n}'
    },
    {
      'id': 'neural-mobile-control',
      'title':
        'Neural Network-Based Self-tuning Kinematic Control and Dynamic Compensation for Mobile Robots',
      'authors': ['Luis F. Recalde', 'Bryan S. Guevara', 'Danny J. Zea', 'Víctor H. Andaluz'],
      'venue':
        'Proceedings of 10th International Conference on Mechatronics and Control Engineering',
      'details': 'pp. 101–120',
      'year': 2023,
      'topics': ['control'],
      'links': {
        'Paper': 'https://doi.org/10.1007/978-981-19-1540-6_11'
      },
      'bibtex':
        '@inproceedings{neuralmobilecontrol2023,\n  title = {Neural Network-Based Self-tuning Kinematic Control and Dynamic Compensation for Mobile Robots},\n  author = {Recalde, Luis F. and Guevara, Bryan S. and Zea, Danny J. and Andaluz, Víctor H.},\n  booktitle = {Proceedings of 10th International Conference on Mechatronics and Control Engineering},\n  year = {2023},\n  pages = {101--120},\n  doi = {10.1007/978-981-19-1540-6_11}\n}'
    },
    {
      'id': 'aerial-manipulator-nmpc',
      'title':
        'NMPC of Unmanned Aerial Manipulators Considering Obstacle Avoidance and Manipulability',
      'authors': [
        'José Varela-Aldás',
        'Luis F. Recalde',
        'Bryan S. Guevara',
        'Juan M. Toibero',
        'Daniel Gandolfo'
      ],
      'venue': 'IFAC-PapersOnLine',
      'details': '56(3), 487–492',
      'year': 2023,
      'topics': ['control', 'interaction'],
      'links': {
        'Paper': 'https://doi.org/10.1016/j.ifacol.2023.12.071'
      },
      'bibtex':
        '@article{aerialmanipulatornmpc2023,\n  title = {NMPC of Unmanned Aerial Manipulators Considering Obstacle Avoidance and Manipulability},\n  author = {Varela-Aldás, José and Recalde, Luis F. and Guevara, Bryan S. and Toibero, Juan M. and Gandolfo, Daniel},\n  journal = {IFAC-PapersOnLine},\n  year = {2023},\n  volume = {56},\n  number = {3},\n  pages = {487--492},\n  doi = {10.1016/j.ifacol.2023.12.071}\n}'
    },
    {
      'id': 'point-cloud-obstacles',
      'title':
        'Obstacle Detection with Differences of Normals in Unorganized Point Clouds for Mobile Robotics',
      'authors': [
        'Edison Velasco-Sánchez',
        'Alejandro Olivas',
        'Luis F. Recalde',
        'Bryan S. Guevara',
        'Francisco A. Candelas'
      ],
      'venue': '2023 IEEE Seventh Ecuador Technical Chapters Meeting (ECTM)',
      'details': 'pp. 1–5',
      'year': 2023,
      'topics': ['perception'],
      'links': {
        'Paper': 'https://doi.org/10.1109/etcm58927.2023.10309038'
      },
      'bibtex':
        '@inproceedings{pointcloudobstacles2023,\n  title = {Obstacle Detection with Differences of Normals in Unorganized Point Clouds for Mobile Robotics},\n  author = {Velasco-Sánchez, Edison and Olivas, Alejandro and Recalde, Luis F. and Guevara, Bryan S. and Candelas, Francisco A.},\n  booktitle = {2023 IEEE Seventh Ecuador Technical Chapters Meeting (ECTM)},\n  year = {2023},\n  pages = {1--5},\n  doi = {10.1109/etcm58927.2023.10309038}\n}'
    },
    {
      'id': 'dmd',
      'title': 'Quadcopters Control Using Online Dynamic Mode Decomposition',
      'authors': [
        'Bryan S. Guevara',
        'Luis F. Recalde',
        'José Varela-Aldás',
        'Daniel C. Gandolfo',
        'Juan M. Toibero'
      ],
      'venue': 'IFAC-PapersOnLine',
      'details': '56(3), 589–594',
      'year': 2023,
      'topics': ['control'],
      'links': {
        'Paper': 'https://doi.org/10.1016/j.ifacol.2023.12.088'
      },
      'bibtex':
        '@article{dmd2023,\n  title = {Quadcopters Control Using Online Dynamic Mode Decomposition},\n  author = {Guevara, Bryan S. and Recalde, Luis F. and Varela-Aldás, José and Gandolfo, Daniel C. and Toibero, Juan M.},\n  journal = {IFAC-PapersOnLine},\n  year = {2023},\n  volume = {56},\n  number = {3},\n  pages = {589--594},\n  doi = {10.1016/j.ifacol.2023.12.088}\n}'
    },
    {
      'id': 'quadratic-programming',
      'title': 'Quadratic Programming Optimization Applied to Robotics Systems',
      'authors': [
        'Luis F. Recalde',
        'Edison Velasco-Sánchez',
        'Bryan S. Guevara',
        'Daniel Gandolfo',
        'Francisco A. Candelas'
      ],
      'venue': '2023 IEEE Seventh Ecuador Technical Chapters Meeting (ECTM)',
      'details': 'pp. 1–6',
      'year': 2023,
      'topics': ['control'],
      'links': {
        'Paper': 'https://doi.org/10.1109/etcm58927.2023.10309064'
      },
      'bibtex':
        '@inproceedings{quadraticprogramming2023,\n  title = {Quadratic Programming Optimization Applied to Robotics Systems},\n  author = {Recalde, Luis F. and Velasco-Sánchez, Edison and Guevara, Bryan S. and Gandolfo, Daniel and Candelas, Francisco A.},\n  booktitle = {2023 IEEE Seventh Ecuador Technical Chapters Meeting (ECTM)},\n  year = {2023},\n  pages = {1--6},\n  doi = {10.1109/etcm58927.2023.10309064}\n}'
    },
    {
      'id': 'constrained-visual-servoing',
      'title': 'Constrained Visual Servoing of Quadrotors Based on Model Predictive Control',
      'authors': [
        'Luis F. Recalde',
        'Jose Varela',
        'Bryan S. Guevara',
        'Victor Andaluz',
        'Javier Gimenez',
        'Daniel Gandolfo'
      ],
      'venue': 'IFAC-PapersOnLine',
      'details': '55(37), 353–360',
      'year': 2022,
      'topics': ['control', 'perception'],
      'links': {
        'Paper': 'https://doi.org/10.1016/j.ifacol.2022.11.209'
      },
      'bibtex':
        '@article{constrainedvisualservoing2022,\n  title = {Constrained Visual Servoing of Quadrotors Based on Model Predictive Control},\n  author = {Recalde, Luis F. and Varela, Jose and Guevara, Bryan S. and Andaluz, Victor and Gimenez, Javier and Gandolfo, Daniel},\n  journal = {IFAC-PapersOnLine},\n  year = {2022},\n  volume = {55},\n  number = {37},\n  pages = {353--360},\n  doi = {10.1016/j.ifacol.2022.11.209}\n}'
    },
    {
      'id': 'virtual-robotics-lab',
      'title': 'Non Immersive Virtual Laboratory Applied to Robotics Arms',
      'authors': [
        'Daniela A. Bastidas',
        'Luis F. Recalde',
        'Patricia N. Constante',
        'Victor H. Andaluz',
        'Dayana E. Gallegos',
        'José Varela-Aldás'
      ],
      'venue':
        'Advances and Trends in Artificial Intelligence. Theory and Practices in Artificial Intelligence',
      'details': 'pp. 898–906',
      'year': 2022,
      'topics': ['interaction'],
      'links': {
        'Paper': 'https://doi.org/10.1007/978-3-031-08530-7_76'
      },
      'bibtex':
        '@inproceedings{virtualroboticslab2022,\n  title = {Non Immersive Virtual Laboratory Applied to Robotics Arms},\n  author = {Bastidas, Daniela A. and Recalde, Luis F. and Constante, Patricia N. and Andaluz, Victor H. and Gallegos, Dayana E. and Varela-Aldás, José},\n  booktitle = {Advances and Trends in Artificial Intelligence. Theory and Practices in Artificial Intelligence},\n  year = {2022},\n  pages = {898--906},\n  doi = {10.1007/978-3-031-08530-7_76}\n}'
    },
    {
      'id': 'multiple-quadrotor-nmpc',
      'title': 'Nonlinear MPC for Multiple Quadrotors in Dynamic Environments',
      'authors': [
        'Luis F. Recalde',
        'Bryan S. Guevara',
        'Victor Andaluz',
        'Jose Varela',
        'Javier Gimenez',
        'Daniel Gandolfo'
      ],
      'venue': '2022 International Conference on Unmanned Aircraft Systems (ICUAS)',
      'details': 'pp. 1201–1209',
      'year': 2022,
      'topics': ['control'],
      'links': {
        'Paper': 'https://doi.org/10.1109/icuas54217.2022.9836150'
      },
      'bibtex':
        '@inproceedings{multiplequadrotornmpc2022,\n  title = {Nonlinear MPC for Multiple Quadrotors in Dynamic Environments},\n  author = {Recalde, Luis F. and Guevara, Bryan S. and Andaluz, Victor and Varela, Jose and Gimenez, Javier and Gandolfo, Daniel},\n  booktitle = {2022 International Conference on Unmanned Aircraft Systems (ICUAS)},\n  year = {2022},\n  pages = {1201--1209},\n  doi = {10.1109/icuas54217.2022.9836150}\n}'
    },
    {
      'id': 'hexacopters',
      'title':
        'System Identification and Nonlinear Model Predictive Control with Collision Avoidance Applied in Hexacopters UAVs',
      'authors': [
        'Luis F. Recalde',
        'Bryan S. Guevara',
        'Christian P. Carvajal',
        'Victor H. Andaluz',
        'José Varela-Aldás',
        'Daniel C. Gandolfo'
      ],
      'venue': 'Sensors',
      'details': '22(13), 4712',
      'year': 2022,
      'topics': ['control'],
      'links': {
        'Paper': 'https://doi.org/10.3390/s22134712'
      },
      'bibtex':
        '@article{hexacopters2022,\n  title = {System Identification and Nonlinear Model Predictive Control with Collision Avoidance Applied in Hexacopters UAVs},\n  author = {Recalde, Luis F. and Guevara, Bryan S. and Carvajal, Christian P. and Andaluz, Victor H. and Varela-Aldás, José and Gandolfo, Daniel C.},\n  journal = {Sensors},\n  year = {2022},\n  volume = {22},\n  number = {13},\n  pages = {4712},\n  doi = {10.3390/s22134712}\n}'
    },
    {
      'id': 'autonomous-driving',
      'title':
        'Dynamic Simulation and Kinematic Control for Autonomous Driving in Automobile Robots',
      'authors': ['Danny J. Zea', 'Bryan S. Guevara', 'Luis F. Recalde', 'Víctor H. Andaluz'],
      'venue': 'Advances in Emerging Trends and Technologies',
      'details': 'pp. 205–216',
      'year': 2021,
      'topics': ['control'],
      'links': {
        'Paper': 'https://doi.org/10.1007/978-3-030-63665-4_16'
      },
      'bibtex':
        '@inproceedings{autonomousdriving2021,\n  title = {Dynamic Simulation and Kinematic Control for Autonomous Driving in Automobile Robots},\n  author = {Zea, Danny J. and Guevara, Bryan S. and Recalde, Luis F. and Andaluz, Víctor H.},\n  booktitle = {Advances in Emerging Trends and Technologies},\n  year = {2021},\n  pages = {205--216},\n  doi = {10.1007/978-3-030-63665-4_16}\n}'
    },
    {
      'id': 'mobile-manipulator',
      'title': 'Optimal control and dynamic compensation of a mobile manipulator robot',
      'authors': ['Bryan S. Guevara', 'Luis F. Recalde', 'Danny J. Zea', 'V. H. Andaluz'],
      'venue':
        '2nd International Conference on Distributed Sensing and Intelligent Systems (ICDSIS)',
      'year': 2021,
      'topics': ['control', 'interaction'],
      'links': {
        'Paper': 'https://doi.org/10.1049/icp.2021.2664'
      },
      'bibtex':
        '@inproceedings{guevara2021mobile,\n  title = {Optimal control and dynamic compensation of a mobile manipulator robot},\n  author = {Guevara, Bryan S. and Recalde, Luis F. and Zea, Danny J. and Andaluz, V. H.},\n  booktitle = {2nd International Conference on Distributed Sensing and Intelligent Systems (ICDSIS)},\n  year = {2021},\n  doi = {10.1049/icp.2021.2664}\n}'
    },
    {
      'id': 'wheelchair',
      'title':
        'Three-Dimensional Unified Motion Control of a Robotic Standing Wheelchair for Rehabilitation Purposes',
      'authors': [
        'Jessica S. Ortiz',
        'Guillermo Palacios-Navarro',
        'Víctor H. Andaluz',
        'Luis F. Recalde'
      ],
      'venue': 'Sensors',
      'details': '21(9), 3057',
      'year': 2021,
      'topics': ['control'],
      'links': {
        'Paper': 'https://doi.org/10.3390/s21093057'
      },
      'bibtex':
        '@article{wheelchair2021,\n  title = {Three-Dimensional Unified Motion Control of a Robotic Standing Wheelchair for Rehabilitation Purposes},\n  author = {Ortiz, Jessica S. and Palacios-Navarro, Guillermo and Andaluz, Víctor H. and Recalde, Luis F.},\n  journal = {Sensors},\n  year = {2021},\n  volume = {21},\n  number = {9},\n  pages = {3057},\n  doi = {10.3390/s21093057}\n}'
    },
    {
      'id': 'differential-drive',
      'title': 'Optimal Control Problem of a Differential Drive Robot',
      'authors': ['Luis F. Recalde', 'Bryan S. Guevara', 'Giovanny Cuzco', 'Víctor H. Andaluz'],
      'venue':
        'Trends in Artificial Intelligence Theory and Applications. Artificial Intelligence Practices',
      'details': 'pp. 75–82',
      'year': 2020,
      'topics': ['control'],
      'links': {
        'Paper': 'https://doi.org/10.1007/978-3-030-55789-8_7'
      },
      'bibtex':
        '@inproceedings{differentialdrive2020,\n  title = {Optimal Control Problem of a Differential Drive Robot},\n  author = {Recalde, Luis F. and Guevara, Bryan S. and Cuzco, Giovanny and Andaluz, Víctor H.},\n  booktitle = {Trends in Artificial Intelligence Theory and Applications. Artificial Intelligence Practices},\n  year = {2020},\n  pages = {75--82},\n  doi = {10.1007/978-3-030-55789-8_7}\n}'
    }
  ],
  'projects': [
    {
      'id': 'tim-mpc',
      'title': 'TI-MPC for aerial payload transport',
      'category': 'Predictive control of hybrid systems',
      'summary':
        'TI-MPC combines a differentiable discrete-time quadrotor–payload model with closed-form cable impulses and analytical sensitivities to smoothly approximate slack–taut transitions without external mode scheduling. A real-time Box-FDDP solver jointly optimizes quadrotor and payload tracking under actuator constraints. Simulation and hardware experiments compare regulation and trajectory-tracking performance against hybrid control baselines, including agile payload transportation.',
      'note': 'Work in progress',
      'demos': [
        {
          'type': 'video',
          'src': 'assets/videos/tim-mpc-flight.mp4',
          'poster': 'assets/images/tim-mpc-flight.webp',
          'loop': true,
          'label': 'Aggressive flight',
          'alt': 'TI-MPC: aggressive flight with a suspended payload in the lab.',
          'caption': 'TI-MPC: aggressive flight with a suspended payload in the lab.'
        },
        {
          'type': 'video',
          'src': 'assets/videos/tim-mpc-simulation.mp4',
          'poster': 'assets/images/tim-mpc-simulation.webp',
          'loop': true,
          'label': 'Simulation',
          'alt': 'TI-MPC: an aggressive maneuver through gates in simulation.',
          'caption': 'TI-MPC: an aggressive maneuver through gates in simulation.'
        },
        {
          'type': 'video',
          'src': 'assets/videos/tim-mpc-regulation-flight.mp4',
          'poster': 'assets/images/tim-mpc-regulation-flight.webp',
          'loop': true,
          'label': 'Regulation',
          'alt': 'TI-MPC: payload regulation on real hardware.',
          'caption': 'TI-MPC: payload regulation on real hardware.'
        },
        {
          'type': 'video',
          'src': 'assets/videos/tim-mpc-regulation-simulation.mp4',
          'poster': 'assets/images/tim-mpc-regulation-simulation.webp',
          'loop': true,
          'label': 'Simulated regulation',
          'alt': 'TI-MPC: payload regulation in simulation.',
          'caption': 'TI-MPC: payload regulation in simulation.'
        },
        {
          'type': 'video',
          'src': 'assets/videos/tim-mpc-planning.mp4',
          'poster': 'assets/images/tim-mpc-planning.webp',
          'loop': true,
          'label': 'LiDAR planning',
          'alt': 'TI-MPC: LiDAR-based planning with a suspended payload in simulation.',
          'caption': 'TI-MPC: LiDAR-based planning with a suspended payload in simulation.'
        }
      ]
    },
    {
      'id': 'mujoco-simulator',
      'title': 'MuJoCo simulator for aerial transportation',
      'category': 'Simulation · Robotics',
      'summary':
        'A C++ and ROS 2 simulation environment for aerial robots and suspended payloads. I develop the vehicle, motor, and aerodynamic models together with simulated cameras and LiDAR, supporting onboard control, cooperative transport, and learning-based experiments.',
      'note': 'Active development at the ACP Lab',
      'demos': [
        {
          'type': 'video',
          'src': 'assets/videos/mujoco-payload.mp4',
          'poster': 'assets/images/mujoco-payload.webp',
          'loop': true,
          'label': 'Payload transport',
          'alt': 'Onboard payload transportation with simulated LiDAR and a MuJoCo scene.',
          'caption': 'Onboard payload transportation with simulated LiDAR and a MuJoCo scene.'
        },
        {
          'type': 'video',
          'src': 'assets/videos/mujoco-cooperative-lidar.mp4',
          'poster': 'assets/images/mujoco-cooperative-lidar.webp',
          'loop': true,
          'label': 'Multi-robot + LiDAR',
          'alt': 'Multiple quadrotors transporting a payload with simulated LiDAR.',
          'caption': 'Multiple quadrotors transporting a payload with simulated LiDAR.'
        },
        {
          'type': 'video',
          'src': 'assets/videos/mujoco-cooperative.mp4',
          'poster': 'assets/images/mujoco-cooperative.webp',
          'loop': true,
          'label': 'Cooperative transport',
          'alt': 'Cooperative payload transportation with multiple quadrotors in MuJoCo.',
          'caption': 'Cooperative payload transportation with multiple quadrotors in MuJoCo.'
        },
        {
          'type': 'video',
          'src': 'assets/videos/mujoco-quadrotor.mp4',
          'poster': 'assets/images/mujoco-quadrotor.webp',
          'loop': true,
          'label': 'Onboard control',
          'alt': 'Quadrotor control with onboard sensing in the simulator.',
          'caption': 'Quadrotor control with onboard sensing in the simulator.'
        },
        {
          'type': 'video',
          'src': 'assets/videos/mujoco-learning.mp4',
          'poster': 'assets/images/mujoco-learning.webp',
          'loop': true,
          'label': 'Reinforcement learning',
          'alt': 'Parallel simulated environments for learning payload transportation.',
          'caption': 'Parallel simulated environments for learning payload transportation.'
        }
      ]
    },
    {
      'id': 'outdoor-lidar',
      'title': 'Cooperative flight with onboard LiDAR',
      'category': 'Decentralized control & estimation · Ongoing research',
      'summary':
        'I am developing decentralized control and estimation for multi-robot systems, exploring ADMM-based optimization for distributed sensor fusion and coordination. These cooperative flight experiments with onboard LiDAR connect simulation development with testing on physical robots.',
      'note': 'Ongoing work',
      'demos': [
        {
          'type': 'video',
          'src': 'assets/videos/outdoor-flight.mp4',
          'poster': 'assets/images/outdoor-flight.webp',
          'loop': true,
          'label': 'Outdoor flight',
          'alt': 'Outdoor multi-quadrotor flight with onboard LiDAR.',
          'caption': 'Outdoor multi-quadrotor flight with onboard LiDAR.'
        }
      ]
    }
  ],
  'experience': [
    {
      'role': 'Research Assistant',
      'organization': 'Worcester Polytechnic Institute',
      'group': 'Aerial-robot Control and Perception (ACP) Lab',
      'dates': 'Jan 2025 – Present',
      'description':
        'I develop control algorithms and simulation tools for aerial robots, including the ACP Lab’s C++/ROS 2 MuJoCo simulator for aerial vehicles and cable-suspended payloads, with aerodynamic and motor dynamics and simulated cameras and LiDAR. I also implemented incremental nonlinear dynamic inversion (INDI) body-rate control and a communication protocol in Betaflight.',
      'location': 'Worcester, MA'
    },
    {
      'role': 'Visiting Researcher',
      'organization': 'New York University',
      'group': 'Agile Robotics and Perception Lab (ARPL)',
      'dates': 'May – Dec 2024',
      'description':
        'I developed CLF- and CBF-based controllers for quadrotors carrying suspended payloads, with stability and camera field-of-view safety guarantees.',
      'location': 'New York, NY'
    },
    {
      'role': 'Research Engineer',
      'organization': 'Universidad Indoamérica',
      'group': 'SISAU Research Group and CICHE',
      'dates': 'Mar 2022 – Mar 2023',
      'description': 'I applied optimization methods to robotic systems.',
      'location': 'Ecuador'
    },
    {
      'role': 'Research Engineer',
      'organization': 'Escuela Superior Politécnica de Chimborazo',
      'group': '',
      'dates': 'May – Oct 2021',
      'description': 'I worked on optimization methods for networked IoT sensing in road safety.',
      'location': 'Ecuador'
    }
  ],
  'education': [
    {
      'degree': 'PhD in Robotics Engineering',
      'institution': 'Worcester Polytechnic Institute',
      'dates': 'Jan 2025 – Present',
      'note': 'In progress · Advisor: Prof. Guanrui Li',
      'location': 'Worcester, MA'
    },
    {
      'degree': 'MSc in Control Systems Engineering',
      'institution': 'Universidad Nacional de San Juan · INAUT',
      'dates': 'May 2023 – Dec 2024',
      'note': 'DAAD scholarship recipient',
      'location': 'Argentina'
    },
    {
      'degree': 'Bachelor’s degree in Mechatronics Engineering',
      'institution': 'Universidad de las Fuerzas Armadas – ESPE',
      'dates': '2021',
      'note': '',
      'location': 'Ecuador'
    }
  ],
  'expertise': [
    {
      'title': 'Predictive & hybrid optimal control',
      'items': [
        'Nonlinear MPC and model predictive contouring control (MPCC), solved with SQP, SQP-RTI, interior-point methods, DDP, and iLQR.',
        'Complementarity-constrained formulations and relaxation methods for trajectory optimization through hybrid mode transitions.'
      ]
    },
    {
      'title': 'Geometric & safety-critical control',
      'items': [
        'Controller design and stability analysis on Lie groups; manifold optimization for robot pose estimation and control.',
        'Control Lyapunov and control barrier functions (CLFs/CBFs), plus task-priority control through null-space projection and affine-subspace methods.'
      ]
    },
    {
      'title': 'Differentiable & distributed optimization',
      'items': [
        'Implicit KKT differentiation for solution sensitivities, gradient-based MPC tuning, and learning.',
        'ADMM for distributed sensor fusion and multi-robot coordination.'
      ]
    },
    {
      'title': 'Perception, estimation & data-driven models',
      'items': [
        'Visual and tactile servoing for UAV inspection and manipulator contour following.',
        'Dual-quaternion LiDAR odometry and mapping; contracting nonlinear observers for LiDAR–inertial fusion.',
        'Dynamic mode decomposition with control (DMDc) and Koopman approximations for dynamics identification and predictive modeling.'
      ]
    }
  ],
  'service':
    'Peer reviewer for IEEE Robotics and Automation Letters (RA-L), IEEE Control Systems Letters (L-CSS), Robotics and Autonomous Systems, ICRA, and IROS.',
  'tools': [
    {
      'category': 'Programming',
      'items': ['C++', 'Python', 'MATLAB']
    },
    {
      'category': 'Simulation',
      'items': ['MuJoCo (C++ integration and plugins)', 'MJX (JAX backend)', 'Newton', 'Webots']
    },
    {
      'category': 'Optimization',
      'items': ['CasADi', 'acados', 'Crocoddyl', 'IPOPT', 'HPIPM', 'OSQP', 'LCQPow']
    },
    {
      'category': 'Middleware & deployment',
      'items': ['ROS 2', 'Zenoh', 'Linux', 'Git', 'Docker', 'Singularity']
    },
    {
      'category': 'Flight systems',
      'items': ['Betaflight', 'PX4']
    }
  ]
};
