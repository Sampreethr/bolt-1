1:"$Sreact.fragment"
2:I[9576,["38","static/chunks/38-43d35d5aefbc1190.js","327","static/chunks/327-fe027e81c1ba5f90.js","576","static/chunks/576-857baff681aa695c.js","147","static/chunks/147-a7f3a4fa51c5e5b5.js","177","static/chunks/app/layout-9d831c787be0e1ff.js"],"AuthProvider"]
3:I[5462,["38","static/chunks/38-43d35d5aefbc1190.js","327","static/chunks/327-fe027e81c1ba5f90.js","576","static/chunks/576-857baff681aa695c.js","147","static/chunks/147-a7f3a4fa51c5e5b5.js","177","static/chunks/app/layout-9d831c787be0e1ff.js"],"default"]
4:I[7555,[],""]
5:I[1295,[],""]
8:I[5720,["38","static/chunks/38-43d35d5aefbc1190.js","974","static/chunks/app/page-963f9c750101bc9b.js"],"default"]
9:I[76,["38","static/chunks/38-43d35d5aefbc1190.js","974","static/chunks/app/page-963f9c750101bc9b.js"],"default"]
a:I[9665,[],"OutletBoundary"]
d:I[4911,[],"AsyncMetadataOutlet"]
f:I[9665,[],"ViewportBoundary"]
11:I[9665,[],"MetadataBoundary"]
13:I[6614,[],""]
:HL["/_next/static/media/8e9860b6e62d6359-s.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/media/e4af272ccee01ff0-s.p.woff2","font",{"crossOrigin":"","type":"font/woff2"}]
:HL["/_next/static/css/87be8655b0fb2f2c.css","style"]
:HL["/_next/static/css/b5b1bb0b50b6e47b.css","style"]
6:T9d6,
            // Enhanced Font Loading Performance Optimization
            if ('fonts' in document) {
              // Preload critical font weights
              document.fonts.load('400 1rem Inter');
              document.fonts.load('600 1rem Inter');
              document.fonts.load('700 1rem Inter');
              document.fonts.load('800 1rem Inter');
              
              document.fonts.ready.then(() => {
                document.documentElement.classList.add('fonts-loaded');
                // Trigger any layout recalculations after fonts load
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new Event('resize'));
                }
              });
            }
            
            // Enhanced Page Load Optimization
            window.addEventListener('load', () => {
              document.documentElement.classList.add('page-loaded');
            });
            
            // Font loading optimization for better performance
            const fontObserver = new Promise((resolve) => {
              if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(resolve);
              } else {
                setTimeout(resolve, 3000); // Fallback timeout
              }
            });
            
            fontObserver.then(() => {
              document.body.classList.add('fonts-ready');
            });
            
            // Enhanced responsive font loading
            if ('IntersectionObserver' in window) {
              const fontObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('text-visible');
                  }
                });
              });
              
              // Observe all text elements for progressive enhancement
              document.querySelectorAll('h1, h2, h3, p, .text-content').forEach(el => {
                fontObserver.observe(el);
              });
            }
            
            // Authentication Debug (Development Only)
            if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
              console.log('🔐 AuditsPro Authentication System Active');
              console.log('🛡️ Protected Routes: All content requires authentication');
              console.log('🔓 Public Routes: /login, /signup, /forgot-password, /reset-password');
            }
          7:T5d1,{"@context":"https://schema.org","@type":"Organization","name":"AuditsPro Australia","description":"Professional trust account auditing services across Australia with ASIC registered auditors.","url":"https://auditspro.com.au","logo":{"@type":"ImageObject","url":"https://auditspro.com.au/logo.png","width":400,"height":400},"contactPoint":{"@type":"ContactPoint","telephone":"1300283487","contactType":"customer service","availableLanguage":"English","areaServed":"AU"},"sameAs":["https://www.facebook.com/AuditsProAustralia","https://www.linkedin.com/company/auditspro-australia","https://twitter.com/AuditsProAU"],"hasOfferCatalog":{"@type":"OfferCatalog","name":"Trust Account Auditing Services","itemListElement":[{"@type":"Offer","itemOffered":{"@type":"Service","name":"Real Estate Trust Account Audit","description":"Comprehensive trust account audits for real estate agencies across Australia","provider":{"@type":"Organization","name":"AuditsPro Australia"}},"price":"499","priceCurrency":"AUD","availability":"https://schema.org/InStock","validFrom":"2024-01-01","priceValidUntil":"2024-12-31"},{"@type":"Offer","itemOffered":{"@type":"Service","name":"Legal Practice Trust Account Audit","description":"Specialized comprehensive audits for legal practice trust accounts","provider":{"@type":"Organization","name":"AuditsPro Australia"}},"price":"1500","priceCurrency":"AUD","availability":"https://schema.org/InStock","validFrom":"2024-01-01","priceValidUntil":"2024-12-31"}]}}0:{"P":null,"b":"YgRCSmWGT3PtZ8giRzUPg","p":"","c":["",""],"i":false,"f":[[["",{"children":["__PAGE__",{}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/87be8655b0fb2f2c.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/b5b1bb0b50b6e47b.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en-AU","className":"__variable_2b1a69 scroll-smooth","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"dns-prefetch","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"dns-prefetch","href":"https://fonts.gstatic.com"}],["$","meta",null,{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover"}],["$","meta",null,{"name":"theme-color","content":"#3b82f6"}],["$","meta",null,{"name":"msapplication-TileColor","content":"#3b82f6"}],["$","meta",null,{"name":"apple-mobile-web-app-capable","content":"yes"}],["$","meta",null,{"name":"apple-mobile-web-app-status-bar-style","content":"default"}]]}],["$","body",null,{"className":"\n          __className_2b1a69 \n          font-sans antialiased \n          text-gray-900 \n          bg-white \n          selection:bg-primary-500 \n          selection:text-white\n          overflow-x-hidden\n          min-h-screen\n        ","suppressHydrationWarning":true,"children":[["$","a",null,{"href":"#main-content","className":"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-lg z-[9999] font-semibold transition-all duration-200","children":"Skip to main content"}],["$","$L2",null,{"children":["$","$L3",null,{"children":["$","$L4",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$6"}}]]}]]}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[[["$","script",null,{"type":"application/ld+json","dangerouslySetInnerHTML":{"__html":"$7"}}],["$","section",null,{"className":"relative","role":"banner","aria-labelledby":"hero-heading","children":[["$","$L8",null,{}],["$","div",null,{"className":"absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent","aria-hidden":"true"}]]}],["$","section",null,{"className":"relative border-t border-gray-100","role":"main","aria-labelledby":"benefits-heading","children":[["$","$L9",null,{}],["$","div",null,{"className":"absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-primary-200","aria-hidden":"true"}]]}],["$","section",null,{"className":"py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-100","role":"complementary","aria-labelledby":"cta-heading","children":["$","div",null,{"className":"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center","children":[["$","h2",null,{"id":"cta-heading","className":"text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6","children":"Ready to Ensure Your Trust Account Compliance?"}],["$","p",null,{"className":"text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed","children":"Join over 500 satisfied clients who trust AuditsPro Australia for their annual trust account auditing requirements. Professional, reliable, and fully compliant across all Australian states."}],["$","div",null,{"className":"flex flex-col sm:flex-row gap-4 justify-center items-center","children":[["$","a",null,{"href":"/services","className":"bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 inline-flex items-center w-full sm:w-auto justify-center","aria-label":"View our professional auditing services","children":[["$","span",null,{"children":"View Our Services"}],["$","svg",null,{"className":"ml-2 h-5 w-5","fill":"none","stroke":"currentColor","viewBox":"0 0 24 24","aria-hidden":"true","children":["$","path",null,{"strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":2,"d":"M9 5l7 7-7 7"}]}]]}],["$","a",null,{"href":"/contact","className":"border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 inline-flex items-center w-full sm:w-auto justify-center","aria-label":"Get free consultation","children":["$","span",null,{"children":"Get Free Consultation"}]}]]}],["$","div",null,{"className":"mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8","children":[["$","div",null,{"className":"text-center","children":[["$","div",null,{"className":"text-2xl sm:text-3xl font-bold text-primary-600 mb-2","children":"500+"}],["$","div",null,{"className":"text-sm sm:text-base text-gray-600","children":"Satisfied Clients"}]]}],["$","div",null,{"className":"text-center","children":[["$","div",null,{"className":"text-2xl sm:text-3xl font-bold text-primary-600 mb-2","children":"15+"}],["$","div",null,{"className":"text-sm sm:text-base text-gray-600","children":"Years Experience"}]]}],["$","div",null,{"className":"text-center","children":[["$","div",null,{"className":"text-2xl sm:text-3xl font-bold text-primary-600 mb-2","children":"7-14"}],["$","div",null,{"className":"text-sm sm:text-base text-gray-600","children":"Days Turnaround"}]]}]]}]]}]}]],null,["$","$La",null,{"children":["$Lb","$Lc",["$","$Ld",null,{"promise":"$@e"}]]}]]}],{},null,false]},null,false],["$","$1","h",{"children":[null,["$","$1","jdD_aap8fwMqYfiyUEgjDv",{"children":[["$","$Lf",null,{"children":"$L10"}],["$","meta",null,{"name":"next-size-adjust","content":""}]]}],["$","$L11",null,{"children":"$L12"}]]}],false]],"m":"$undefined","G":["$13","$undefined"],"s":false,"S":true}
14:"$Sreact.suspense"
15:I[4911,[],"AsyncMetadata"]
12:["$","div",null,{"hidden":true,"children":["$","$14",null,{"fallback":null,"children":["$","$L15",null,{"promise":"$@16"}]}]}]
c:null
10:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
b:null
e:{"metadata":[["$","title","0",{"children":"Professional Trust Account Auditing Services | AuditsPro Australia"}],["$","meta","1",{"name":"description","content":"Professional trust account auditing services across Australia. ASIC registered auditors, fast 7-14 day turnaround, fixed pricing. Trusted by 500+ businesses for legal and real estate compliance."}],["$","meta","2",{"name":"author","content":"AuditsPro Australia"}],["$","meta","3",{"name":"keywords","content":"trust account audits Australia,ASIC registered auditors,legal trust account auditing,real estate audits,professional auditing services,compliance auditing,trust account compliance,Australian auditing services"}],["$","meta","4",{"name":"creator","content":"AuditsPro Australia"}],["$","meta","5",{"name":"publisher","content":"AuditsPro Australia"}],["$","meta","6",{"name":"robots","content":"index, follow"}],["$","meta","7",{"name":"googlebot","content":"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"}],["$","link","8",{"rel":"canonical","href":"https://auditspro.com.au"}],["$","meta","9",{"name":"google-site-verification","content":"your-google-verification-code"}],["$","meta","10",{"property":"og:title","content":"Professional Trust Account Auditing Services | AuditsPro Australia"}],["$","meta","11",{"property":"og:description","content":"ASIC registered auditors providing professional trust account auditing across Australia. Fast turnaround, fixed pricing, complete compliance."}],["$","meta","12",{"property":"og:url","content":"https://auditspro.com.au"}],["$","meta","13",{"property":"og:image","content":"http://localhost:3000/og-home.jpg"}],["$","meta","14",{"property":"og:image:width","content":"1200"}],["$","meta","15",{"property":"og:image:height","content":"630"}],["$","meta","16",{"property":"og:image:alt","content":"AuditsPro Australia - Professional Trust Account Auditing Services"}],["$","meta","17",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","18",{"name":"twitter:title","content":"Professional Trust Account Auditing Services | AuditsPro Australia"}],["$","meta","19",{"name":"twitter:description","content":"ASIC registered auditors providing professional trust account auditing across Australia. Fast turnaround, fixed pricing, complete compliance."}],["$","meta","20",{"name":"twitter:image","content":"http://localhost:3000/twitter-home.jpg"}]],"error":null,"digest":"$undefined"}
16:{"metadata":"$e:metadata","error":null,"digest":"$undefined"}
