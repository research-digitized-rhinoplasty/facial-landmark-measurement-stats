# 3D Facial Landmark Measurement Statistics

This repository hosts an open-source web tool for exploring descriptive statistics from a three-dimensional facial landmark and measurement dataset.

**Live tool:** https://research-digitized-rhinoplasty.github.io/facial-landmark-measurement-stats/

## Overview

The web application allows users to filter deidentified 3D facial scan data and view descriptive statistics for facial measurements and landmark coordinates. Outputs are displayed as interactive tables and charts.

The tool includes distance, surface-distance, angle, ratio, area, and volume measurements derived from marked three-dimensional facial landmarks.

## Data and measurements

The dataset is based on 3D facial scans collected through the Digitized Rhinoplasty Face Scanner iOS app. The 3D facial scan dataset was presented in Topsakal et al. (2024). Participant information includes available demographic and clinical variables such as age, gender, ethnicity, and facial surgery history.

Facial landmarks were marked using the Face Analyzer tool and reviewed for accuracy by an experienced rhinoplasty surgeon. Measurement definitions are based on prior facial surface anthropometry and rhinoplasty measurement literature, including work on 3D area and volume measurements.

This resource is intended for exploratory facial analysis, education, and research. The statistics should be interpreted as sample-based descriptive reference values rather than definitive population norms or a substitute for clinical judgment.

## Repository contents

- `index.html` – main web interface
- `data.json` – deidentified facial landmark and measurement data used by the interface
- `Data Analysis of 3D Facial Measurements and Landmark Locations copy.html` – additional/legacy analysis page

## How to use

Open the live tool, apply filters as needed, select measurements or landmarks, and review the generated table and chart outputs. No installation is required to use the hosted version.

## Research status

A manuscript describing this software, dataset, and measurement statistics has been submitted to a journal and is currently under review.

## References

- Celikoyar MM, Pérez MF, Akbaş MI, Topsakal O. Facial surface anthropometric features and measurements with an emphasis on rhinoplasty. *Aesthetic Surgery Journal*. 2022;42(2):133-148. https://doi.org/10.1093/asj/sjab190
- Celikoyar MM, Topsakal O, Sawyer P. Three-dimensional (3D) area and volume measurements for rhinoplasty. *Journal of Plastic, Reconstructive & Aesthetic Surgery*. 2023;83:189-197. https://doi.org/10.1016/j.bjps.2023.04.082
- Topsakal O, Sawyer P, Akinci TC, Celikoyar MM. Algorithms to measure area and volume on 3D face models for facial surgeries. *IEEE Access*. 2023;11:39577-39585. https://doi.org/10.1109/ACCESS.2023.3268174
- Topsakal O, Akbas MI, Storts S, Feyzullayave L, Celikoyar M. Textured three-dimensional facial scan data set: amassing a large data set through a mobile iOS application. *Facial Plastic Surgery & Aesthetic Medicine*. 2024;26(6):674-676. https://doi.org/10.1089/fpsam.2023.0232
