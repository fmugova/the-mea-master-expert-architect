<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EduAnalytics Pro - Comprehensive Student Performance Management System</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: #333;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
            color: white;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }

        .personas-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }

        .persona-card {
            background: white;
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border-top: 5px solid;
        }

        .persona-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.25);
        }

        .persona-card.slt {
            border-top-color: #e74c3c;
        }

        .persona-card.subject {
            border-top-color: #3498db;
        }

        .persona-card.teacher {
            border-top-color: #2ecc71;
        }

        .persona-card.pastoral {
            border-top-color: #f39c12;
        }

        .persona-header {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }

        .persona-icon {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            font-size: 24px;
            color: white;
        }

        .slt .persona-icon {
            background: #e74c3c;
        }

        .subject .persona-icon {
            background: #3498db;
        }

        .teacher .persona-icon {
            background: #2ecc71;
        }

        .pastoral .persona-icon {
            background: #f39c12;
        }

        .persona-title {
            font-size: 1.4rem;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .persona-subtitle {
            color: #666;
            font-size: 0.9rem;
        }

        .features-list {
            list-style: none;
        }

        .features-list li {
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            display: flex;
            align-items: center;
        }

        .features-list li:last-child {
            border-bottom: none;
        }

        .feature-icon {
            width: 20px;
            height: 20px;
            margin-right: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
        }

        .dashboard-preview {
            background: white;
            border-radius: 15px;
            padding: 30px;
            margin-top: 40px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .dashboard-header {
            text-align: center;
            margin-bottom: 30px;
        }

        .dashboard-tabs {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
            gap: 10px;
        }

        .tab {
            padding: 12px 24px;
            border: none;
            background: #f8f9fa;
            border-radius: 25px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-weight: 500;
        }

        .tab.active {
            background: #667eea;
            color: white;
        }

        .tab:hover {
            background: #5a6fd8;
            color: white;
        }

        .dashboard-content {
            display: none;
            animation: fadeIn 0.5s ease;
        }

        .dashboard-content.active {
            display: block;
        }

        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }

        .metrics-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }

        .metric-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            border-left: 4px solid;
        }

        .metric-card.critical {
            border-left-color: #e74c3c;
        }

        .metric-card.warning {
            border-left-color: #f39c12;
        }

        .metric-card.good {
            border-left-color: #2ecc71;
        }

        .metric-value {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 5px;
        }

        .metric-label {
            color: #666;
            font-size: 0.9rem;
        }

        .chart-placeholder {
            background: #f8f9fa;
            height: 200px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #666;
            margin: 20px 0;
            border: 2px dashed #ddd;
        }

        .feature-highlight {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 15px;
            margin-top: 40px;
            text-align: center;
        }

        .feature-highlight h3 {
            font-size: 1.8rem;
            margin-bottom: 15px;
        }

        .feature-highlight p {
            font-size: 1.1rem;
            opacity: 0.9;
            line-height: 1.6;
        }

        .alert-badge {
            display: inline-block;
            padding: 4px 8px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: bold;
            margin-left: 10px;
        }

        .alert-critical {
            background: #e74c3c;
            color: white;
        }

        .alert-warning {
            background: #f39c12;
            color: white;
        }

        .alert-info {
            background: #3498db;
            color: white;
        }

        .student-profile {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            margin: 20px 0;
        }

        .student-header {
            display: flex;
            align-items: center;
            margin-bottom: 15px;
        }

        .student-avatar {
            width: 50px;
            height: 50px;
            background: #667eea;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            margin-right: 15px;
        }

        .integration-section {
            margin-top: 40px;
            background: white;
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .integration-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .integration-item {
            text-align: center;
            padding: 20px;
            background: #f8f9fa;
            border-radius: 10px;
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }
            
            .personas-grid {
                grid-template-columns: 1fr;
            }
            
            .dashboard-tabs {
                justify-content: flex-start;
                overflow-x: auto;
            }
            
            .metrics-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📊 EduAnalytics Pro</h1>
            <p>Comprehensive Student Performance Management System</p>
        </div>

        <div class="personas-grid">
            <div class="persona-card slt">
                <div class="persona-header">
                    <div class="persona-icon">👥</div>
                    <div>
                        <div class="persona-title">SLT/Trust Leaders</div>
                        <div class="persona-subtitle">Strategic Overview & Governance</div>
                    </div>
                </div>
                <ul class="features-list">
                    <li>
                        <div class="feature-icon">🚨</div>
                        High-level 'Red Flag' Alert Dashboards
                    </li>
                    <li>
                        <div class="feature-icon">📈</div>
                        Predictive Trend Forecasting Models
                    </li>
                    <li>
                        <div class="feature-icon">🏢</div>
                        Multi-School Trust Performance Comparisons
                    </li>
                    <li>
                        <div class="feature-icon">📊</div>
                        Executive KPI Monitoring & Reporting
                    </li>
                    <li>
                        <div class="feature-icon">⚠️</div>
                        Risk Assessment & Early Warning Systems
                    </li>
                </ul>
            </div>

            <div class="persona-card subject">
                <div class="persona-header">
                    <div class="persona-icon">📚</div>
                    <div>
                        <div class="persona-title">Subject Leaders</div>
                        <div class="persona-subtitle">Departmental Performance Analysis</div>
                    </div>
                </div>
                <ul class="features-list">
                    <li>
                        <div class="feature-icon">📊</div>
                        Department vs. National Average Analysis
                    </li>
                    <li>
                        <div class="feature-icon">🎯</div>
                        Internal Target Tracking & Monitoring
                    </li>
                    <li>
                        <div class="feature-icon">👨‍🏫</div>
                        Teacher Performance Comparison Tools
                    </li>
                    <li>
                        <div class="feature-icon">📋</div>
                        Curriculum Coverage & Assessment Planning
                    </li>
                    <li>
                        <div class="feature-icon">🔍</div>
                        Student Progress Deep-Dive Analytics
                    </li>
                </ul>
            </div>

            <div class="persona-card teacher">
                <div class="persona-header">
                    <div class="persona-icon">👨‍🏫</div>
                    <div>
                        <div class="persona-title">Classroom Teachers</div>
                        <div class="persona-subtitle">Real-Time Teaching Support</div>
                    </div>
                </div>
                <ul class="features-list">
                    <li>
                        <div class="feature-icon">📖</div>
                        Live Digital Markbooks with Auto-Calculations
                    </li>
                    <li>
                        <div class="feature-icon">⚡</div>
                        Instant Intervention Alert System
                    </li>
                    <li>
                        <div class="feature-icon">🎯</div>
                        Individual Student Target Monitoring
                    </li>
                    <li>
                        <div class="feature-icon">📱</div>
                        Mobile-Friendly Assessment Entry
                    </li>
                    <li>
                        <div class="feature-icon">🔔</div>
                        Automated Parent Communication Triggers
                    </li>
                </ul>
            </div>

            <div class="persona-card pastoral">
                <div class="persona-header">
                    <div class="persona-icon">❤️</div>
                    <div>
                        <div class="persona-title">Pastoral Leads</div>
                        <div class="persona-subtitle">Holistic Student Wellbeing</div>
                    </div>
                </div>
                <ul class="features-list">
                    <li>
                        <div class="feature-icon">360</div>
                        360-Degree Student Profile Integration
                    </li>
                    <li>
                        <div class="feature-icon">📉</div>
                        Academic Decline Pattern Recognition
                    </li>
                    <li>
                        <div class="feature-icon">📅</div>
                        Attendance Correlation Analysis
                    </li>
                    <li>
                        <div class="feature-icon">⚖️</div>
                        Behavioral Trigger Point Mapping
                    </li>
                    <li>
                        <div class="feature-icon">🔗</div>
                        Multi-Factor Risk Assessment Dashboard
                    </li>
                </ul>
            </div>
        </div>

        <div class="dashboard-preview">
            <div class="dashboard-header">
                <h2>Interactive Dashboard Preview</h2>
                <p>Experience how each persona interacts with the system</p>
            </div>

            <div class="dashboard-tabs">
                <button class="tab active" data-tab="slt">SLT Dashboard</button>
                <button class="tab" data-tab="subject">Subject Leader</button>
                <button class="tab" data-tab="teacher">Teacher Portal</button>
                <button class="tab" data-tab="pastoral">Pastoral Hub</button>
            </div>

            <div class="dashboard-content active" id="slt">
                <h3>Senior Leadership Dashboard <span class="alert-badge alert-critical">3 Critical</span> <span class="alert-badge alert-warning">7 Warnings</span></h3>
                <div class="metrics-grid">
                    <div class="metric-card critical">
                        <div class="metric-value">23%</div>
                        <div class="metric-label">Students At Risk (↑5%)</div>
                    </div>
                    <div class="metric-card warning">
                        <div class="metric-value">78%</div>
                        <div class="metric-label">On-Track Progress (↓3%)</div>
                    </div>
                    <div class="metric-card good">
                        <div class="metric-value">95%</div>
                        <div class="metric-label">Overall Attendance (↑1%)</div>
                    </div>
                    <div class="metric-card warning">
                        <div class="metric-value">12</div>
                        <div class="metric-label">Intervention Cases</div>
                    </div>
                </div>
                <div class="chart-placeholder">
                    📈 Predictive Trend Analysis: Academic Performance Forecast (Next 6 Months)
                </div>
                <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #ffc107;">
                    <strong>AI Prediction Alert:</strong> Current trajectory suggests 15% increase in underperformance by end of term. Immediate intervention recommended for Year 9 Mathematics cohort.
                </div>
            </div>

            <div class="dashboard-content" id="subject">
                <h3>Mathematics Department Performance Analysis</h3>
                <div class="metrics-grid">
                    <div class="metric-card good">
                        <div class="metric-value">+2.3</div>
                        <div class="metric-label">Above National Average</div>
                    </div>
                    <div class="metric-card critical">
                        <div class="metric-value">-0.8</div>
                        <div class="metric-label">Below Internal Target</div>
                    </div>
                    <div class="metric-card warning">
                        <div class="metric-value">68%</div>
                        <div class="metric-label">Grade 4+ Projection</div>
                    </div>
                </div>
                <div class="chart-placeholder">
                    📊 Department Performance vs National Benchmarks by Year Group
                </div>
                <div class="student-profile">
                    <h4>Focus Classes Requiring Support:</h4>
                    <ul>
                        <li>9M2 - 34% below target (Teacher: Mr. Johnson) <span class="alert-badge alert-critical">Urgent</span></li>
                        <li>8M4 - 18% below target (Teacher: Ms. Davis) <span class="alert-badge alert-warning">Monitor</span></li>
                        <li>10M1 - 12% below target (Teacher: Dr. Wilson) <span class="alert-badge alert-info">Support</span></li>
                    </ul>
                </div>
            </div>

            <div class="dashboard-content" id="teacher">
                <h3>Live Markbook - Class 9M2 <span class="alert-badge alert-critical">4 Alerts</span></h3>
                <div class="student-profile">
                    <div class="student-header">
                        <div class="student-avatar">JS</div>
                        <div>
                            <strong>Jamie Smith</strong> - Current Grade: D (Target: B)
                            <span class="alert-badge alert-critical">Intervention Required</span>
                        </div>
                    </div>
                    <p><strong>Instant Alert:</strong> 3 consecutive assessments below target. Attendance dropped to 78% (last 4 weeks). Recommend immediate parent contact and additional support.</p>
                </div>
                <div class="student-profile">
                    <div class="student-header">
                        <div class="student-avatar">AL</div>
                        <div>
                            <strong>Alex Lee</strong> - Current Grade: C+ (Target: A)
                            <span class="alert-badge alert-warning">Monitor</span>
                        </div>
                    </div>
                    <p><strong>Progress Note:</strong> Improvement trend detected. Recent quiz scores show +15% increase. Continue current differentiation strategy.</p>
                </div>
                <div class="chart-placeholder">
                    📱 Mobile Assessment Entry Portal - Quick Grade Input & Analytics
                </div>
            </div>

            <div class="dashboard-content" id="pastoral">
                <h3>360-Degree Student Wellbeing Dashboard</h3>
                <div class="student-profile">
                    <div class="student-header">
                        <div class="student-avatar" style="background: #e74c3c;">MJ</div>
                        <div>
                            <strong>Marcus Johnson (Year 10)</strong>
                            <span class="alert-badge alert-critical">High Risk</span>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 15px;">
                        <div>
                            <strong>Academic:</strong> Grades dropped 2 levels across 4 subjects in last term
                        </div>
                        <div>
                            <strong>Attendance:</strong> 67% (↓28% this term)
                        </div>
                        <div>
                            <strong>Behaviour:</strong> 6 incidents in 3 weeks (unusual pattern)
                        </div>
                        <div>
                            <strong>Wellbeing:</strong> Self-reported stress levels increasing
                        </div>
                    </div>
                    <div style="background: #f8d7da; padding: 10px; border-radius: 5px; margin-top: 10px; border-left: 4px solid #dc3545;">
                        <strong>AI Risk Assessment:</strong> Multiple declining factors detected. Recommend immediate welfare check and family liaison contact.
                    </div>
                </div>
                <div class="metrics-grid">
                    <div class="metric-card critical">
                        <div class="metric-value">47</div>
                        <div class="metric-label">Students with Multi-Factor Risk</div>
                    </div>
                    <div class="metric-card warning">
                        <div class="metric-value">23</div>
                        <div class="metric-label">Academic-Attendance Correlations</div>
                    </div>
                    <div class="metric-card good">
                        <div class="metric-value">156</div>
                        <div class="metric-label">Successful Interventions This Term</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="integration-section">
            <h2 style="text-align: center; margin-bottom: 10px;">System Integration & Data Sources</h2>
            <p style="text-align: center; color: #666; margin-bottom: 30px;">EduAnalytics Pro seamlessly integrates with your existing school management systems</p>
            
            <div class="integration-grid">
                <div class="integration-item">
                    <div style="font-size: 2rem; margin-bottom: 10px;">📊</div>
                    <h4>SIMS/Arbor MIS</h4>
                    <p style="font-size: 0.9rem; color: #666;">Student data, attendance, assessments</p>
                </div>
                <div class="integration-item">
                    <div style="font-size: 2rem; margin-bottom: 10px;">📚</div>
                    <h4>FFT/4Matrix</h4>
                    <p style="font-size: 0.9rem; color: #666;">Progress tracking, benchmarks</p>
                </div>
                <div class="integration-item">
                    <div style="font-size: 2rem; margin-bottom: 10px;">⚖️</div>
                    <h4>CPOMS/MyConsern</h4>
                    <p style="font-size: 0.9rem; color: #666;">Behavioral & safeguarding data</p>
                </div>
                <div class="integration-item">
                    <div style="font-size: 2rem; margin-bottom: 10px;">💬</div>
                    <h4>Parent Communication</h4>
                    <p style="font-size: 0.9rem; color: #666;">ClassDojo, ParentMail integration</p>
                </div>
            </div>
        </div>

        <div class="feature-highlight">
            <h3>🤖 AI-Powered Predictive Analytics</h3>
            <p>
                Our machine learning algorithms analyze patterns across academic performance, attendance, and behavioral data to predict student outcomes up to 6 months in advance. This enables proactive intervention strategies and prevents students from falling through the cracks.
            </p>
        </div>

        <div class="feature-highlight" style="background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);">
            <h3>🔒 GDPR Compliant & Secure</h3>
            <p>
                Built with privacy by design, featuring end-to-end encryption, role-based access controls, and comprehensive audit trails. Fully compliant with GDPR, DfE data protection guidelines, and Cyber Essentials certified for maximum security.
            </p>
        </div>
    </div>

    <script>
        // Tab switching functionality
        document.querySelectorAll('.tab').forEach(tab => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and content
                document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.dashboard-content').forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab
                tab.classList.add('active');
                
                // Show corresponding content
                const tabId = tab.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Simulate live data updates
        function simulateDataUpdate() {
            const metrics = document.querySelectorAll('.metric-value');
            metrics.forEach(metric => {
                if (Math.random() > 0.7) {
                    metric.style.animation = 'pulse 1s ease';
                    setTimeout(() => {
                        metric.style.animation = '';
                    }, 1000);
                }
            });
        }

        // Add pulse animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);

        // Update data every 10 seconds
        setInterval(simulateDataUpdate, 10000);

        // Add interactive hover effects
        document.querySelectorAll('.student-profile').forEach(profile => {
            profile.addEventListener('mouseenter', () => {
                profile.style.transform = 'translateX(5px)';
                profile.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            });
            
            profile.addEventListener('mouseleave', () => {
                profile.style.transform = 'translateX(0)';
                profile.style.boxShadow = 'none';
            });
        });
    </script>
</body>
</html>