export default function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FitZen Studio - Yoga, CrossFit & Meditation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
        }
        
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            text-align: center;
            padding: 4rem 1rem;
        }
        
        header h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-weight: bold;
        }
        
        header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        
        nav {
            background: rgba(0,0,0,0.8);
            padding: 1rem;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 2rem;
            font-weight: bold;
            transition: color 0.3s;
        }
        
        nav a:hover {
            color: #667eea;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        .classes {
            padding: 4rem 0;
            background: #f8f9fa;
        }
        
        .classes h2 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: #333;
        }
        
        .class-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }
        
        .class-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
            text-align: center;
            transition: transform 0.3s;
        }
        
        .class-card:hover {
            transform: translateY(-5px);
        }
        
        .class-card h3 {
            color: #667eea;
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }
        
        .class-card p {
            color: #666;
            margin-bottom: 1.5rem;
        }
        
        .class-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        
        .about {
            padding: 4rem 0;
            text-align: center;
        }
        
        .about h2 {
            font-size: 2.5rem;
            margin-bottom: 2rem;
            color: #333;
        }
        
        .about p {
            font-size: 1.1rem;
            max-width: 800px;
            margin: 0 auto;
            color: #666;
        }
        
        .cta {
            background: #667eea;
            color: white;
            padding: 4rem 0;
            text-align: center;
        }
        
        .cta h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
        
        .cta p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .btn {
            display: inline-block;
            background: white;
            color: #667eea;
            padding: 1rem 2rem;
            text-decoration: none;
            border-radius: 50px;
            font-weight: bold;
            font-size: 1.1rem;
            transition: all 0.3s;
        }
        
        .btn:hover {
            background: #f8f9fa;
            transform: translateY(-2px);
        }
        
        footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 2rem 0;
        }
        
        .contact-info {
            margin-bottom: 1rem;
        }
        
        .contact-info p {
            margin: 0.5rem 0;
        }
        
        @media (max-width: 768px) {
            header h1 {
                font-size: 2rem;
            }
            
            nav a {
                display: block;
                margin: 0.5rem 0;
            }
            
            .class-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <h1>FitZen Studio</h1>
        <p>Mind, Body, Spirit - All in One Place</p>
    </header>
    
    <nav>
        <a href="#classes">Classes</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
    </nav>
    
    <section id="classes" class="classes">
        <div class="container">
            <h2>Our Classes</h2>
            <div class="class-grid">
                <div class="class-card">
                    <div class="class-icon">🧘‍♀️</div>
                    <h3>Yoga</h3>
                    <p>Find your inner peace with our expert-led yoga sessions. From beginner-friendly Hatha to challenging Vinyasa flows.</p>
                    <strong>Daily at 7am, 12pm, 6pm</strong>
                </div>
                
                <div class="class-card">
                    <div class="class-icon">💪</div>
                    <h3>CrossFit</h3>
                    <p>High-intensity functional fitness that will transform your strength, endurance, and overall conditioning.</p>
                    <strong>Mon/Wed/Fri at 6am, 7pm<br>Tue/Thu at 6:30am, 7:30pm</strong>
                </div>
                
                <div class="class-card">
                    <div class="class-icon">🧘‍♂️</div>
                    <h3>Meditation</h3>
                    <p>Dedicated meditation sessions to reduce stress, improve focus, and cultivate mindfulness in your daily life.</p>
                    <strong>Daily at 8am, 5:30pm<br>Sunday Special: 10am</strong>
                </div>
            </div>
        </div>
    </section>
    
    <section id="about" class="about">
        <div class="container">
            <h2>About FitZen Studio</h2>
            <p>We believe fitness is more than just physical strength. Our unique approach combines the intensity of CrossFit, the mindfulness of yoga, and the peace of meditation to create a holistic wellness experience. Whether you're looking to build strength, find flexibility, or achieve mental clarity, our expert instructors will guide you on your journey to total wellness.</p>
        </div>
    </section>
    
    <section class="cta">
        <div class="container">
            <h2>Ready to Transform?</h2>
            <p>Join our community and discover the perfect balance of strength, flexibility, and mindfulness.</p>
            <a href="#contact" class="btn">Start Your Journey</a>
        </div>
    </section>
    
    <footer id="contact">
        <div class="container">
            <div class="contact-info">
                <p><strong>📍 123 Wellness Street, Zen City, ZC 12345</strong></p>
                <p><strong>📞 (555) 123-4567</strong></p>
                <p><strong>✉️ info@fitzenstudio.com</strong></p>
            </div>
            <p>&copy; 2024 FitZen Studio. All rights reserved.</p>
        </div>
    </footer>
</body>
</html>` }} />
  );
}