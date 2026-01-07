import React, { useState } from 'react';
import './App.css';
import { TrendingUp, Shield, Zap, Database, Smartphone, Lock, Activity, ChevronDown, ChevronRight, X, Landmark, Bitcoin, Trophy, BarChart3, Film, Microscope, Users, CheckCircle, Globe, LineChart, Wallet, HeadphonesIcon, ArrowRight, Star } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showMarketDetail, setShowMarketDetail] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showStrategyInfo, setShowStrategyInfo] = useState(null);
  const [showFeatureDetail, setShowFeatureDetail] = useState(null);

  const trendingMarkets = [
    {
      category: 'POLITICS',
      title: '2024 Presidential Election',
      volume: '$45.2M',
      yes: 58,
      no: 42,
      change: '+12%'
    },
    {
      category: 'CRYPTO',
      title: 'Bitcoin to $100K by EOY',
      volume: '$28.8M',
      yes: 52,
      no: 48,
      change: '+8%'
    },
    {
      category: 'FINANCE',
      title: 'Fed Rate Cut in March',
      volume: '$18.4M',
      yes: 71,
      no: 29,
      change: '+4%'
    },
    {
      category: 'SPORTS',
      title: 'Lakers Win NBA Championship',
      volume: '$12.1M',
      yes: 34,
      no: 66,
      change: '-3%'
    },
    {
      category: 'CRYPTO',
      title: 'Ethereum ETF Approval 2025',
      volume: '$22.3M',
      yes: 67,
      no: 33,
      change: '+15%'
    },
    {
      category: 'POLITICS',
      title: 'Supreme Court Ruling',
      volume: '$16.7M',
      yes: 45,
      no: 55,
      change: '+2%'
    },
    {
      category: 'FINANCE',
      title: 'Tech Stock Rally Continues',
      volume: '$25.9M',
      yes: 62,
      no: 38,
      change: '+9%'
    },
    {
      category: 'SCIENCE',
      title: 'AI Breakthrough by EOY',
      volume: '$14.2M',
      yes: 73,
      no: 27,
      change: '+11%'
    },
    {
      category: 'ENTERTAINMENT',
      title: 'Oscar Best Picture Winner',
      volume: '$8.5M',
      yes: 41,
      no: 59,
      change: '+6%'
    }
  ];

  const features = [
    {
      icon: <Zap className="feature-icon" />,
      label: 'INSTANT',
      title: 'Instant Settlement',
      description: 'Get paid immediately when markets resolve. Automatic payouts to your wallet the moment outcomes are confirmed.'
    },
    {
      icon: <Activity className="feature-icon" />,
      label: 'LIQUIDITY',
      title: 'Deep Liquidity',
      description: 'Trade with minimal slippage on our order book system. Market makers provide consistent liquidity across all major events.'
    },
    {
      icon: <Database className="feature-icon" />,
      label: 'DATA',
      title: 'Real-Time Analytics',
      description: 'Advanced charting, historical data, and probability tracking. Make informed decisions with comprehensive market intelligence.'
    },
    {
      icon: <Shield className="feature-icon" />,
      label: 'SECURE',
      title: 'CFTC Regulated',
      description: 'Fully compliant with US regulations. Your funds held in segregated accounts with bank-grade security protocols.'
    }
  ];

  const categories = [
    { name: 'Politics', icon: <Landmark className="w-8 h-8" />, markets: 234 },
    { name: 'Crypto', icon: <Bitcoin className="w-8 h-8" />, markets: 189 },
    { name: 'Sports', icon: <Trophy className="w-8 h-8" />, markets: 156 },
    { name: 'Finance', icon: <BarChart3 className="w-8 h-8" />, markets: 142 },
    { name: 'Entertainment', icon: <Film className="w-8 h-8" />, markets: 98 },
    { name: 'Science', icon: <Microscope className="w-8 h-8" />, markets: 67 }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Create Your Account',
      description: 'Sign up in seconds with your email or connect your crypto wallet. We support Phantom, MetaMask, WalletConnect, and 20+ other popular wallets.',
      icon: <Users className="w-8 h-8" />
    },
    {
      step: '02',
      title: 'Fund Your Account',
      description: 'Deposit USDC or USD via bank transfer, debit card, or direct wallet transfer. All deposits are instant with no fees.',
      icon: <Wallet className="w-8 h-8" />
    },
    {
      step: '03',
      title: 'Browse & Analyze',
      description: 'Explore thousands of markets across politics, crypto, sports, and more. Use our advanced analytics tools to make informed decisions.',
      icon: <LineChart className="w-8 h-8" />
    },
    {
      step: '04',
      title: 'Place Your Trades',
      description: 'Buy YES or NO shares on event outcomes. Each share pays $1.00 if you\'re correct. Trade anytime before the market resolves.',
      icon: <Activity className="w-8 h-8" />
    }
  ];

  const tradingStrategies = [
    {
      title: 'Buy and Hold',
      description: 'Purchase shares early at favorable odds and hold until market resolution. Best for high-conviction predictions with clear outcomes.',
      icon: <Lock className="w-6 h-6" />,
      difficulty: 'Beginner',
      timeframe: 'Days to Months'
    },
    {
      title: 'Market Making',
      description: 'Provide liquidity by placing both YES and NO orders. Earn the spread while helping improve market efficiency.',
      icon: <Activity className="w-6 h-6" />,
      difficulty: 'Advanced',
      timeframe: 'Real-time'
    },
    {
      title: 'Arbitrage Trading',
      description: 'Identify price discrepancies across related markets. Execute simultaneous trades to lock in risk-free profits.',
      icon: <TrendingUp className="w-6 h-6" />,
      difficulty: 'Expert',
      timeframe: 'Minutes to Hours'
    },
    {
      title: 'News Trading',
      description: 'React quickly to breaking news and events. Take positions before the broader market adjusts to new information.',
      icon: <Globe className="w-6 h-6" />,
      difficulty: 'Intermediate',
      timeframe: 'Minutes to Days'
    }
  ];

  const advancedFeatures = [
    {
      title: 'API Access',
      description: 'Build custom trading bots and algorithms with our REST and WebSocket APIs. Real-time market data and order execution.',
      icon: <Database className="w-8 h-8" />
    },
    {
      title: 'Advanced Charts',
      description: 'Professional-grade charting tools with technical indicators, historical data, and probability tracking across all timeframes.',
      icon: <LineChart className="w-8 h-8" />
    },
    {
      title: 'Portfolio Analytics',
      description: 'Track your performance with detailed analytics, profit/loss statements, and risk metrics. Export data for tax reporting.',
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
      title: 'Mobile Trading',
      description: 'Full-featured iOS and Android apps. Trade on the go with push notifications for market movements and resolutions.',
      icon: <Smartphone className="w-8 h-8" />
    }
  ];

  const securityFeatures = [
    {
      title: 'CFTC Regulated',
      description: 'Fully licensed as a Designated Contract Market (DCM) by the Commodity Futures Trading Commission.',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'Segregated Funds',
      description: 'Your funds are held in segregated accounts at top-tier banks, separate from company operational funds.',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: 'Bank-Grade Security',
      description: 'SOC 2 Type II certified with 256-bit encryption, multi-factor authentication, and regular security audits.',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: '24/7 Support',
      description: 'Expert customer support team available around the clock via live chat, email, and phone.',
      icon: <HeadphonesIcon className="w-6 h-6" />
    }
  ];

  const stats = [
    { label: 'Total Volume', value: '$2.3B+' },
    { label: 'Active Traders', value: '150K+' },
    { label: 'Markets Created', value: '12K+' },
    { label: 'Avg Resolution Time', value: '< 2hrs' }
  ];

  const faqs = [
    {
      question: 'What is Poly Directive?',
      answer: 'Poly Directive is a regulated prediction market platform where you can trade on the outcomes of real-world events. We offer markets on politics, sports, crypto, finance, and more.'
    },
    {
      question: 'How does trading work?',
      answer: 'Trading on Poly Directive is simple: buy YES or NO shares on event outcomes. If you\'re correct when the market resolves, each share pays $1. You can buy low and sell high before resolution to lock in profits.'
    },
    {
      question: 'Is Poly Directive legal in the US?',
      answer: 'Yes! Poly Directive is fully regulated by the CFTC as a Designated Contract Market (DCM). We operate in compliance with all US regulations and maintain segregated customer funds.'
    },
    {
      question: 'What wallets are supported?',
      answer: 'We support Phantom, MetaMask, WalletConnect, and over 20 other popular wallets. You can also sign up with just an email address and we\'ll create a custodial wallet for you.'
    },
    {
      question: 'How do I withdraw my funds?',
      answer: 'Withdrawals are instant and automatic to your connected wallet. There are no withdrawal fees, and you can move your funds anytime. USDC withdrawals typically settle within seconds.'
    },
    {
      question: 'What are the fees?',
      answer: 'Trading fees are just 2% on profits. There are no deposit fees, no withdrawal fees, and no monthly subscription costs. You only pay when you win.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Professional Trader',
      company: 'Hedge Fund Manager',
      image: 'SC',
      rating: 5,
      text: 'Poly Directive has the best liquidity and fastest execution I have seen in any prediction market platform. Made over $50K in my first 6 months trading political events. The regulatory compliance gives me confidence to trade with significant capital.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Crypto Analyst',
      company: 'Blockchain Research Firm',
      image: 'MR',
      rating: 5,
      text: 'The real-time data and analytics tools are incredible. I use the API to run my automated trading strategies with great success. The WebSocket feeds are reliable and the order execution is lightning fast. Highly recommended for algorithmic traders.'
    },
    {
      name: 'Emily Thompson',
      role: 'Sports Enthusiast',
      company: 'Sports Analytics',
      image: 'ET',
      rating: 5,
      text: 'Finally, a platform that combines my love for sports with smart trading. The mobile app makes it easy to trade anywhere, and the push notifications keep me updated on market movements. Customer support is exceptional and always helpful.'
    },
    {
      name: 'David Park',
      role: 'Finance Professional',
      company: 'Investment Bank',
      image: 'DP',
      rating: 5,
      text: 'As someone who works in finance, I appreciate the regulatory compliance and bank-grade security. The segregated accounts and CFTC oversight give me peace of mind. This is a legitimate, well-run platform with institutional-quality infrastructure.'
    },
    {
      name: 'Jennifer Martinez',
      role: 'Data Scientist',
      company: 'Tech Company',
      image: 'JM',
      rating: 5,
      text: 'The historical data access and charting tools are phenomenal for backtesting strategies. I have been able to develop profitable trading algorithms using their comprehensive API. The platform is built by people who understand traders\' needs.'
    },
    {
      name: 'Robert Kim',
      role: 'Political Consultant',
      company: 'Campaign Strategy',
      image: 'RK',
      rating: 5,
      text: 'As a political consultant, I find the election markets incredibly accurate and informative. The wisdom of crowds here often predicts outcomes better than traditional polls. It is also a great way to hedge against campaign uncertainties.'
    }
  ];

  const handleMarketClick = (market) => {
    setSelectedMarket(market);
    setShowMarketDetail(true);
  };

  const scrollToMarkets = () => {
    document.getElementById('markets-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName.toLowerCase());
    scrollToSection('markets-section');
  };

  const filteredMarkets = selectedCategory === 'all' 
    ? trendingMarkets 
    : trendingMarkets.filter(m => m.category.toLowerCase() === selectedCategory.toUpperCase() || selectedCategory === 'all');

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            <img src="/logo.png" alt="Poly Directive" className="logo-image" />
            <span className="logo-text">Poly Directive</span>
          </div>
          <div className="nav-links">
            <a href="#markets" onClick={(e) => { e.preventDefault(); scrollToSection('markets-section'); }}>Markets</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features-section'); }}>Features</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('security-section'); }}>About</a>
            <button className="btn-secondary" onClick={() => setShowSignIn(true)}>Sign In</button>
            <button className="btn-primary" onClick={() => setShowSignUp(true)}>Get Started</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-left">
              <span className="hero-label">REGULATED PREDICTION MARKETS</span>
              <h1 className="hero-title">
                Trade on What<br />You Know Best
              </h1>
              <p className="hero-subtitle">
                Join 150,000+ traders on the world's largest regulated prediction market platform.
                Trade politics, crypto, sports, finance, and more.
              </p>
              <div className="hero-buttons">
                <button className="btn-primary btn-large" onClick={() => setShowSignUp(true)}>
                  Start Trading Free
                </button>
                <button className="btn-secondary btn-large" onClick={scrollToMarkets}>
                  View Markets
                </button>
              </div>
              <div className="hero-stats">
                {stats.map((stat, idx) => (
                  <div key={idx} className="stat">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-right">
              <div className="featured-market-card">
                <div className="featured-market-header">
                  <span className="featured-category-badge">Politics</span>
                  <span className="featured-volume">$45.2M</span>
                </div>
                <h3 className="featured-market-title">2024 Presidential Election</h3>
                
                <div className="featured-odds-section">
                  <div className="featured-odd-row">
                    <span className="featured-odd-label">YES</span>
                    <span className="featured-odd-value yes-value">58¢</span>
                  </div>
                  <div className="featured-progress-bar">
                    <div className="featured-progress-fill yes-progress" style={{width: '58%'}}></div>
                  </div>
                </div>

                <div className="featured-odds-section">
                  <div className="featured-odd-row">
                    <span className="featured-odd-label">NO</span>
                    <span className="featured-odd-value no-value">42¢</span>
                  </div>
                  <div className="featured-progress-bar">
                    <div className="featured-progress-fill no-progress" style={{width: '42%'}}></div>
                  </div>
                </div>

                <div className="featured-actions">
                  <button className="featured-action-btn" onClick={() => handleMarketClick(trendingMarkets[0])}>
                    Trade Now
                  </button>
                  <button className="featured-action-btn secondary" onClick={() => handleMarketClick(trendingMarkets[0])}>
                    View Details
                  </button>
                  <button className="featured-action-btn secondary" onClick={() => {
                    if (navigator.share) {
                      navigator.share({
                        title: '2024 Presidential Election - Poly Directive',
                        text: 'Check out this prediction market on Poly Directive!',
                        url: window.location.href
                      });
                    } else {
                      navigator.clipboard.writeText(window.location.href);
                      alert('Link copied to clipboard!');
                    }
                  }}>
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Markets */}
      <section className="section markets-section" id="markets-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">TRENDING NOW</span>
              <h2 className="section-title">Hot Markets</h2>
            </div>
            <TrendingUp className="section-icon" />
          </div>
          
          {/* Category Filter */}
          <div className="category-filter">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Markets
            </button>
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`filter-btn ${selectedCategory === cat.name.toLowerCase() ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.name.toLowerCase())}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="markets-grid">
            {filteredMarkets.map((market, idx) => (
              <div key={idx} className="market-card" onClick={() => handleMarketClick(market)}>
                <div className="market-header">
                  <span className="market-category">{market.category}</span>
                  <span className={`market-change ${market.change.startsWith('+') ? 'positive' : 'negative'}`}>
                    {market.change}
                  </span>
                </div>
                <h3 className="market-title">{market.title}</h3>
                <div className="market-volume">Volume: {market.volume}</div>
                <div className="market-odds">
                  <div className="odd yes">
                    <div className="odd-label">YES</div>
                    <div className="odd-value">{market.yes}¢</div>
                  </div>
                  <div className="odd no">
                    <div className="odd-label">NO</div>
                    <div className="odd-value">{market.no}¢</div>
                  </div>
                </div>
                <button className="btn-trade">Trade Now</button>
              </div>
            ))}
          </div>
          
          {filteredMarkets.length === 0 && (
            <div className="no-markets">
              <p>No markets found in this category. Check back soon for new markets!</p>
            </div>
          )}
        </div>
      </section>

      {/* Categories */}
      <section className="section categories-section">
        <div className="container">
          <h2 className="section-title">Explore Categories</h2>
          <div className="categories-grid">
            {categories.map((cat, idx) => (
              <div key={idx} className="category-card">
                <div className="category-icon">{cat.icon}</div>
                <h3 className="category-name">{cat.name}</h3>
                <p className="category-markets">{cat.markets} active markets</p>
                <button className="btn-secondary" onClick={() => handleCategoryClick(cat.name)}>Browse</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">GET STARTED</span>
              <h2 className="section-title">How It Works</h2>
              <p className="section-description">
                Start trading in four simple steps. Join thousands of traders profiting from their predictions.
              </p>
            </div>
          </div>
          <div className="steps-grid">
            {howItWorks.map((step, idx) => (
              <div key={idx} className="step-card">
                <div className="step-number">{step.step}</div>
                <div className="step-icon-wrapper">
                  {step.icon}
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Strategies */}
      <section className="section strategies-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">TRADING METHODS</span>
              <h2 className="section-title">Proven Trading Strategies</h2>
              <p className="section-description">
                Learn from successful traders. Choose a strategy that matches your style and risk tolerance.
              </p>
            </div>
          </div>
          <div className="strategies-grid">
            {tradingStrategies.map((strategy, idx) => (
              <div key={idx} className="strategy-card">
                <div className="strategy-header">
                  <div className="strategy-icon">{strategy.icon}</div>
                  <div className="strategy-badges">
                    <span className="strategy-badge difficulty">{strategy.difficulty}</span>
                    <span className="strategy-badge timeframe">{strategy.timeframe}</span>
                  </div>
                </div>
                <h3 className="strategy-title">{strategy.title}</h3>
                <p className="strategy-description">{strategy.description}</p>
                <button className="btn-secondary" onClick={() => setShowStrategyInfo(strategy)}>Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section features-section" id="features">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">WHY CHOOSE US</span>
              <h2 className="section-title">Built for Traders</h2>
            </div>
          </div>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <div className="feature-icon-wrapper">
                  {feature.icon}
                  <span className="feature-label">{feature.label}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="section advanced-features-section">
        <div className="container">
          <div className="section-header">
            <div>
              <span className="section-label">PROFESSIONAL TOOLS</span>
              <h2 className="section-title">Advanced Features for Serious Traders</h2>
              <p className="section-description">
                Access institutional-grade tools and technology. Everything you need to maximize your edge.
              </p>
            </div>
          </div>
          <div className="advanced-grid">
            {advancedFeatures.map((feature, idx) => (
              <div key={idx} className="advanced-card">
                <div className="advanced-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="advanced-title">{feature.title}</h3>
                <p className="advanced-description">{feature.description}</p>
                <button className="btn-link" onClick={() => setShowFeatureDetail(feature)}>
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="section security-section">
        <div className="container">
          <div className="section-header centered">
            <div>
              <span className="section-label">TRUSTED & SECURE</span>
              <h2 className="section-title">Bank-Grade Security & Compliance</h2>
              <p className="section-description">
                Your safety is our priority. We maintain the highest standards of security and regulatory compliance.
              </p>
            </div>
          </div>
          <div className="security-grid">
            {securityFeatures.map((feature, idx) => (
              <div key={idx} className="security-card">
                <div className="security-icon-wrapper">
                  {feature.icon}
                </div>
                <h3 className="security-title">{feature.title}</h3>
                <p className="security-description">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="compliance-badges">
            <div className="badge-item">
              <Shield className="w-12 h-12" />
              <div className="badge-text">
                <div className="badge-title">CFTC Regulated</div>
                <div className="badge-subtitle">DCM License</div>
              </div>
            </div>
            <div className="badge-item">
              <Lock className="w-12 h-12" />
              <div className="badge-text">
                <div className="badge-title">SOC 2 Type II</div>
                <div className="badge-subtitle">Certified</div>
              </div>
            </div>
            <div className="badge-item">
              <CheckCircle className="w-12 h-12" />
              <div className="badge-text">
                <div className="badge-title">Insured Deposits</div>
                <div className="badge-subtitle">Up to $250K</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="section-header centered">
            <div>
              <span className="section-label">SUCCESS STORIES</span>
              <h2 className="section-title">What Traders Say</h2>
              <p className="section-description">
                Join thousands of satisfied traders who have found success on Poly Directive.
              </p>
            </div>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-rating">
                  {Array(testimonial.rating).fill(null).map((_, i) => (
                    <Star key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.image}</div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                    <div className="author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  {faq.question}
                  {openFaq === idx ? <ChevronDown /> : <ChevronRight />}
                </button>
                {openFaq === idx && (
                  <div className="faq-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Start Trading?</h2>
            <p className="cta-subtitle">
              Join 150,000+ traders and start profiting from your predictions today.
              Sign up in seconds with your wallet or email.
            </p>
            <button className="btn-primary btn-large" onClick={() => setShowSignUp(true)}>
              Create Free Account
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo-container">
                <img src="/logo.png" alt="Poly Directive" className="footer-logo-image" />
                <h3 className="footer-logo">Poly Directive</h3>
              </div>
              <p className="footer-description">
                The world's largest regulated prediction market platform.
                Trade on what you know best.
              </p>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Platform</h4>
              <a href="#markets">Markets</a>
              <a href="#features">Features</a>
              <a href="#api">API</a>
              <a href="#mobile">Mobile App</a>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Company</h4>
              <a href="#about">About</a>
              <a href="#careers">Careers</a>
              <a href="#blog">Blog</a>
              <a href="#press">Press</a>
            </div>
            <div className="footer-section">
              <h4 className="footer-title">Legal</h4>
              <a href="#terms">Terms</a>
              <a href="#privacy">Privacy</a>
              <a href="#compliance">Compliance</a>
              <a href="#support">Support</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Poly Directive. CFTC Regulated. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="modal-overlay" onClick={() => setShowSignIn(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowSignIn(false)}>
              <X />
            </button>
            <h2 className="modal-title">Sign In to Poly Directive</h2>
            <div className="wallet-options">
              <button className="wallet-btn">
                <Wallet className="wallet-icon-svg" />
                <span>Phantom</span>
              </button>
              <button className="wallet-btn">
                <Wallet className="wallet-icon-svg" />
                <span>MetaMask</span>
              </button>
              <button className="wallet-btn">
                <Wallet className="wallet-icon-svg" />
                <span>WalletConnect</span>
              </button>
            </div>
            <div className="divider">
              <span>or</span>
            </div>
            <form className="auth-form">
              <input type="email" placeholder="Email address" className="form-input" />
              <input type="password" placeholder="Password" className="form-input" />
              <button type="submit" className="btn-primary btn-full">Sign In</button>
            </form>
            <p className="modal-footer">
              Don't have an account?{' '}
              <button className="link-btn" onClick={() => { setShowSignIn(false); setShowSignUp(true); }}>
                Sign Up
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="modal-overlay" onClick={() => setShowSignUp(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowSignUp(false)}>
              <X />
            </button>
            <h2 className="modal-title">Join Poly Directive</h2>
            <div className="wallet-options">
              <button className="wallet-btn">
                <Wallet className="wallet-icon-svg" />
                <span>Phantom</span>
              </button>
              <button className="wallet-btn">
                <Wallet className="wallet-icon-svg" />
                <span>MetaMask</span>
              </button>
              <button className="wallet-btn">
                <Wallet className="wallet-icon-svg" />
                <span>WalletConnect</span>
              </button>
            </div>
            <div className="divider">
              <span>or</span>
            </div>
            <form className="auth-form">
              <input type="email" placeholder="Email address" className="form-input" />
              <input type="password" placeholder="Create password" className="form-input" />
              <input type="password" placeholder="Confirm password" className="form-input" />
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>I agree to the Terms of Service and Privacy Policy</span>
              </label>
              <button type="submit" className="btn-primary btn-full">Create Account</button>
            </form>
            <p className="modal-footer">
              Already have an account?{' '}
              <button className="link-btn" onClick={() => { setShowSignUp(false); setShowSignIn(true); }}>
                Sign In
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Market Detail Modal */}
      {showMarketDetail && selectedMarket && (
        <div className="modal-overlay" onClick={() => setShowMarketDetail(false)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowMarketDetail(false)}>
              <X />
            </button>
            <div className="market-detail">
              <span className="market-category">{selectedMarket.category}</span>
              <h2 className="market-detail-title">{selectedMarket.title}</h2>
              <div className="market-detail-volume">Total Volume: {selectedMarket.volume}</div>
              
              <div className="market-detail-odds">
                <div className="detail-odd yes-large">
                  <div className="detail-odd-label">YES</div>
                  <div className="detail-odd-value">{selectedMarket.yes}¢</div>
                  <div className="detail-odd-change">{selectedMarket.yes}% chance</div>
                </div>
                <div className="detail-odd no-large">
                  <div className="detail-odd-label">NO</div>
                  <div className="detail-odd-value">{selectedMarket.no}¢</div>
                  <div className="detail-odd-change">{selectedMarket.no}% chance</div>
                </div>
              </div>

              <div className="trading-form">
                <div className="trade-tabs">
                  <button className="trade-tab active">Buy</button>
                  <button className="trade-tab">Sell</button>
                </div>
                <div className="trade-inputs">
                  <div className="input-group">
                    <label>Amount (USDC)</label>
                    <input type="number" placeholder="0.00" className="form-input" />
                  </div>
                  <div className="input-group">
                    <label>Shares</label>
                    <input type="number" placeholder="0" className="form-input" />
                  </div>
                </div>
                <div className="trade-summary">
                  <div className="summary-row">
                    <span>Avg Price</span>
                    <span>{selectedMarket.yes}¢</span>
                  </div>
                  <div className="summary-row">
                    <span>Est. Fees (2%)</span>
                    <span>$0.00</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total</span>
                    <span>$0.00</span>
                  </div>
                </div>
                <button className="btn-primary btn-full" onClick={() => setShowSignIn(true)}>
                  Sign In to Trade
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Strategy Info Modal */}
      {showStrategyInfo && (
        <div className="modal-overlay" onClick={() => setShowStrategyInfo(null)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowStrategyInfo(null)}>
              <X />
            </button>
            <div className="info-modal-content">
              <div className="info-header">
                <div className="info-icon">{showStrategyInfo.icon}</div>
                <div>
                  <h2 className="info-title">{showStrategyInfo.title}</h2>
                  <div className="info-badges">
                    <span className="info-badge">{showStrategyInfo.difficulty}</span>
                    <span className="info-badge">{showStrategyInfo.timeframe}</span>
                  </div>
                </div>
              </div>
              
              <div className="info-section">
                <h3 className="info-section-title">Overview</h3>
                <p className="info-text">{showStrategyInfo.description}</p>
              </div>

              <div className="info-section">
                <h3 className="info-section-title">How It Works</h3>
                <p className="info-text">
                  {showStrategyInfo.title === 'Buy and Hold' && 
                    'This strategy involves purchasing YES or NO shares when you have strong conviction about an outcome, then holding those shares until the market resolves. It works best for events with clear, predictable outcomes where you have an information edge. Monitor your position but avoid the temptation to trade frequently based on short-term price movements.'}
                  {showStrategyInfo.title === 'Market Making' && 
                    'Market makers place limit orders on both sides of the order book, capturing the bid-ask spread. You profit from the spread while providing liquidity to other traders. This requires significant capital, quick reaction times, and sophisticated risk management. Best suited for experienced traders with algorithmic trading capabilities.'}
                  {showStrategyInfo.title === 'Arbitrage Trading' && 
                    'Identify price discrepancies between related markets or between our platform and other prediction markets. Execute simultaneous trades to lock in risk-free profits. Requires fast execution, low latency connections, and the ability to quickly identify arbitrage opportunities before they disappear.'}
                  {showStrategyInfo.title === 'News Trading' && 
                    'React quickly to breaking news and events that impact market probabilities. Successful news traders have fast access to information sources, understand how different types of news affect markets, and can execute trades before prices fully adjust. Combine fundamental analysis with technical signals for best results.'}
                </p>
              </div>

              <div className="info-section">
                <h3 className="info-section-title">Risk Management</h3>
                <p className="info-text">
                  Always use position sizing appropriate for your account. Never risk more than 2-5% of your capital on a single trade. Set stop-losses and profit targets before entering positions. Diversify across multiple markets and categories to reduce correlation risk.
                </p>
              </div>

              <div className="info-section">
                <h3 className="info-section-title">Getting Started</h3>
                <p className="info-text">
                  Start with small positions to test your strategy. Track all your trades and analyze performance. Join our trader community to learn from experienced users. Consider paper trading first to validate your approach before committing real capital.
                </p>
              </div>

              <div className="info-actions">
                <button className="btn-primary" onClick={() => { setShowStrategyInfo(null); setShowSignUp(true); }}>
                  Create Account to Start
                </button>
                <button className="btn-secondary" onClick={() => setShowStrategyInfo(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Feature Detail Modal */}
      {showFeatureDetail && (
        <div className="modal-overlay" onClick={() => setShowFeatureDetail(null)}>
          <div className="modal modal-large" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowFeatureDetail(null)}>
              <X />
            </button>
            <div className="info-modal-content">
              <div className="info-header">
                <div className="info-icon">{showFeatureDetail.icon}</div>
                <h2 className="info-title">{showFeatureDetail.title}</h2>
              </div>
              
              <div className="info-section">
                <h3 className="info-section-title">Overview</h3>
                <p className="info-text">{showFeatureDetail.description}</p>
              </div>

              <div className="info-section">
                <h3 className="info-section-title">Key Features</h3>
                <ul className="info-list">
                  {showFeatureDetail.title === 'API Access' && (
                    <>
                      <li>REST API with comprehensive market data endpoints</li>
                      <li>WebSocket feeds for real-time price updates</li>
                      <li>Authenticated endpoints for order management</li>
                      <li>Rate limits: 1000 requests/minute for authenticated users</li>
                      <li>Complete API documentation with code examples</li>
                      <li>Python, JavaScript, and Go client libraries</li>
                    </>
                  )}
                  {showFeatureDetail.title === 'Advanced Charts' && (
                    <>
                      <li>TradingView-powered charting engine</li>
                      <li>50+ technical indicators (RSI, MACD, Bollinger Bands, etc.)</li>
                      <li>Drawing tools for trend lines and patterns</li>
                      <li>Multiple timeframes from 1-minute to 1-month</li>
                      <li>Historical data back to market creation</li>
                      <li>Save and share chart layouts</li>
                    </>
                  )}
                  {showFeatureDetail.title === 'Portfolio Analytics' && (
                    <>
                      <li>Real-time P&L tracking across all positions</li>
                      <li>Win rate and ROI calculations</li>
                      <li>Category and strategy performance breakdown</li>
                      <li>Risk metrics including VAR and maximum drawdown</li>
                      <li>Tax reporting with CSV/PDF exports</li>
                      <li>Historical performance charts and trends</li>
                    </>
                  )}
                  {showFeatureDetail.title === 'Mobile Trading' && (
                    <>
                      <li>Full-featured iOS and Android apps</li>
                      <li>Biometric authentication (Face ID, Touch ID)</li>
                      <li>Push notifications for market movements</li>
                      <li>Quick trade execution with one-tap orders</li>
                      <li>Mobile-optimized charts and analytics</li>
                      <li>Offline mode for viewing positions</li>
                    </>
                  )}
                </ul>
              </div>

              <div className="info-section">
                <h3 className="info-section-title">Getting Started</h3>
                <p className="info-text">
                  {showFeatureDetail.title === 'API Access' && 
                    'Create an account and generate your API key from the Settings page. Review our API documentation at docs.polyregulation.com for complete endpoint reference and authentication details.'}
                  {showFeatureDetail.title === 'Advanced Charts' && 
                    'Available to all registered users. Access charts by clicking on any market. Customize your layout and indicators from the chart settings menu. Premium features require a Pro account.'}
                  {showFeatureDetail.title === 'Portfolio Analytics' && 
                    'View your portfolio analytics from the Account Dashboard. All features are free for users with 10+ trades. Historical data is available for all closed positions.'}
                  {showFeatureDetail.title === 'Mobile Trading' && 
                    'Download the Poly Directive app from the App Store or Google Play. Log in with your existing account credentials or create a new account directly in the app.'}
                </p>
              </div>

              <div className="info-actions">
                <button className="btn-primary" onClick={() => { setShowFeatureDetail(null); setShowSignUp(true); }}>
                  Get Started
                </button>
                <button className="btn-secondary" onClick={() => setShowFeatureDetail(null)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;