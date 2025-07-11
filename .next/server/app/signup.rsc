1:"$Sreact.fragment"
2:I[9576,["38","static/chunks/38-43d35d5aefbc1190.js","327","static/chunks/327-fe027e81c1ba5f90.js","576","static/chunks/576-857baff681aa695c.js","147","static/chunks/147-a7f3a4fa51c5e5b5.js","177","static/chunks/app/layout-9d831c787be0e1ff.js"],"AuthProvider"]
3:I[5462,["38","static/chunks/38-43d35d5aefbc1190.js","327","static/chunks/327-fe027e81c1ba5f90.js","576","static/chunks/576-857baff681aa695c.js","147","static/chunks/147-a7f3a4fa51c5e5b5.js","177","static/chunks/app/layout-9d831c787be0e1ff.js"],"default"]
4:I[7555,[],""]
5:I[1295,[],""]
7:I[2699,["38","static/chunks/38-43d35d5aefbc1190.js","327","static/chunks/327-fe027e81c1ba5f90.js","0","static/chunks/0-d0c919acf96173c6.js","879","static/chunks/app/signup/page-8c96b6b30c63cd25.js"],"default"]
8:I[9911,["38","static/chunks/38-43d35d5aefbc1190.js","327","static/chunks/327-fe027e81c1ba5f90.js","0","static/chunks/0-d0c919acf96173c6.js","879","static/chunks/app/signup/page-8c96b6b30c63cd25.js"],"default"]
9:I[6874,["38","static/chunks/38-43d35d5aefbc1190.js","327","static/chunks/327-fe027e81c1ba5f90.js","0","static/chunks/0-d0c919acf96173c6.js","879","static/chunks/app/signup/page-8c96b6b30c63cd25.js"],""]
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
          0:{"P":null,"b":"YgRCSmWGT3PtZ8giRzUPg","p":"","c":["","signup"],"i":false,"f":[[["",{"children":["signup",{"children":["__PAGE__",{}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/87be8655b0fb2f2c.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/b5b1bb0b50b6e47b.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en-AU","className":"__variable_2b1a69 scroll-smooth","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"dns-prefetch","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"dns-prefetch","href":"https://fonts.gstatic.com"}],["$","meta",null,{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover"}],["$","meta",null,{"name":"theme-color","content":"#3b82f6"}],["$","meta",null,{"name":"msapplication-TileColor","content":"#3b82f6"}],["$","meta",null,{"name":"apple-mobile-web-app-capable","content":"yes"}],["$","meta",null,{"name":"apple-mobile-web-app-status-bar-style","content":"default"}]]}],["$","body",null,{"className":"\n          __className_2b1a69 \n          font-sans antialiased \n          text-gray-900 \n          bg-white \n          selection:bg-primary-500 \n          selection:text-white\n          overflow-x-hidden\n          min-h-screen\n        ","suppressHydrationWarning":true,"children":[["$","a",null,{"href":"#main-content","className":"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-lg z-[9999] font-semibold transition-all duration-200","children":"Skip to main content"}],["$","$L2",null,{"children":["$","$L3",null,{"children":["$","$L4",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$6"}}]]}]]}]]}],{"children":["signup",["$","$1","c",{"children":[null,["$","$L4",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","$L7",null,{"title":"Create Your Account","subtitle":"Join 500+ Australian businesses using AuditsPro","showBackToHome":true,"children":[["$","$L8",null,{}],["$","div",null,{"className":"mt-6 pt-6 border-t border-gray-200","children":["$","p",null,{"className":"text-center text-sm text-gray-600","children":["Already have an account?"," ",["$","$L9",null,{"href":"/login","className":"font-semibold text-primary-600 hover:text-primary-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1","aria-label":"Sign in to your existing account","children":"Sign In"}]]}]}],["$","div",null,{"className":"mt-6 text-center","children":["$","p",null,{"className":"text-xs text-gray-500 leading-relaxed","children":["By creating an account, you agree to our"," ",["$","$L9",null,{"href":"/terms","className":"text-primary-600 hover:text-primary-500 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded","aria-label":"Read our Terms of Service","children":"Terms of Service"}]," ","and"," ",["$","$L9",null,{"href":"/privacy","className":"text-primary-600 hover:text-primary-500 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded","aria-label":"Read our Privacy Policy","children":"Privacy Policy"}]]}]}],["$","div",null,{"className":"mt-8 pt-6 border-t border-gray-100","children":[["$","p",null,{"className":"text-xs text-gray-600 text-center font-medium mb-4","children":"What you get with AuditsPro Australia:"}],["$","div",null,{"className":"grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-500","children":[["$","div",null,{"className":"flex items-center gap-2","children":[["$","div",null,{"className":"w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"}],["$","span",null,{"children":"7-14 day turnaround"}]]}],["$","div",null,{"className":"flex items-center gap-2","children":[["$","div",null,{"className":"w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"}],["$","span",null,{"children":"Fixed transparent pricing"}]]}],["$","div",null,{"className":"flex items-center gap-2","children":[["$","div",null,{"className":"w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"}],["$","span",null,{"children":"ASIC registered auditors"}]]}],["$","div",null,{"className":"flex items-center gap-2","children":[["$","div",null,{"className":"w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"}],["$","span",null,{"children":"24/7 customer support"}]]}],["$","div",null,{"className":"flex items-center gap-2 sm:col-span-2","children":[["$","div",null,{"className":"w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"}],["$","span",null,{"children":"Government compliant reporting"}]]}]]}]]}],["$","div",null,{"className":"mt-6 text-center","children":["$","p",null,{"className":"text-xs text-gray-400","children":["Need assistance?"," ",["$","a",null,{"href":"tel:1300283487","className":"text-primary-600 hover:text-primary-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1","aria-label":"Call AuditsPro support","children":"Call 1300 AUDITS"}]]}]}]]}],null,["$","$La",null,{"children":["$Lb","$Lc",["$","$Ld",null,{"promise":"$@e"}]]}]]}],{},null,false]},null,false]},null,false],["$","$1","h",{"children":[null,["$","$1","LkIOe4ywHrQt6GL5YvZNsv",{"children":[["$","$Lf",null,{"children":"$L10"}],["$","meta",null,{"name":"next-size-adjust","content":""}]]}],["$","$L11",null,{"children":"$L12"}]]}],false]],"m":"$undefined","G":["$13","$undefined"],"s":false,"S":true}
14:"$Sreact.suspense"
15:I[4911,[],"AsyncMetadata"]
12:["$","div",null,{"hidden":true,"children":["$","$14",null,{"fallback":null,"children":["$","$L15",null,{"promise":"$@16"}]}]}]
c:null
10:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
b:null
e:{"metadata":[["$","title","0",{"children":"Create Account | AuditsPro Australia | AuditsPro Australia"}],["$","meta","1",{"name":"description","content":"Create your AuditsPro Australia account to access professional trust account auditing services across Australia."}],["$","meta","2",{"name":"author","content":"AuditsPro Australia"}],["$","meta","3",{"name":"keywords","content":"trust account audit,ASIC registered auditor,legal auditing services,real estate audit,property management audit,Australia auditing,compliance auditing"}],["$","meta","4",{"name":"creator","content":"AuditsPro Australia"}],["$","meta","5",{"name":"publisher","content":"AuditsPro Australia"}],["$","meta","6",{"name":"robots","content":"noindex, nofollow"}],["$","meta","7",{"name":"google-site-verification","content":"your-google-verification-code"}],["$","meta","8",{"property":"og:title","content":"AuditsPro Australia | Professional Trust Account Auditing Services"}],["$","meta","9",{"property":"og:description","content":"Professional trust account auditing services across Australia. ASIC registered auditors, fixed pricing, fast turnaround."}],["$","meta","10",{"property":"og:url","content":"https://auditspro.com.au"}],["$","meta","11",{"property":"og:site_name","content":"AuditsPro Australia"}],["$","meta","12",{"property":"og:locale","content":"en_AU"}],["$","meta","13",{"property":"og:image","content":"http://localhost:3000/og-default.jpg"}],["$","meta","14",{"property":"og:image:width","content":"1200"}],["$","meta","15",{"property":"og:image:height","content":"630"}],["$","meta","16",{"property":"og:image:alt","content":"AuditsPro Australia - Professional Trust Account Auditing Services"}],["$","meta","17",{"property":"og:type","content":"website"}],["$","meta","18",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","19",{"name":"twitter:creator","content":"@AuditsProAU"}],["$","meta","20",{"name":"twitter:title","content":"AuditsPro Australia | Professional Trust Account Auditing Services"}],["$","meta","21",{"name":"twitter:description","content":"Professional trust account auditing services across Australia. ASIC registered auditors, fixed pricing, fast turnaround."}],["$","meta","22",{"name":"twitter:image","content":"http://localhost:3000/twitter-default.jpg"}]],"error":null,"digest":"$undefined"}
16:{"metadata":"$e:metadata","error":null,"digest":"$undefined"}
