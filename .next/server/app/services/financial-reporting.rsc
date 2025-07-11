1:"$Sreact.fragment"
2:I[9576,["38","static/chunks/38-43d35d5aefbc1190.js","327","static/chunks/327-fe027e81c1ba5f90.js","576","static/chunks/576-857baff681aa695c.js","147","static/chunks/147-a7f3a4fa51c5e5b5.js","177","static/chunks/app/layout-9d831c787be0e1ff.js"],"AuthProvider"]
3:I[5462,["38","static/chunks/38-43d35d5aefbc1190.js","327","static/chunks/327-fe027e81c1ba5f90.js","576","static/chunks/576-857baff681aa695c.js","147","static/chunks/147-a7f3a4fa51c5e5b5.js","177","static/chunks/app/layout-9d831c787be0e1ff.js"],"default"]
4:I[7555,[],""]
5:I[1295,[],""]
7:I[894,[],"ClientPageRoot"]
8:I[6230,["38","static/chunks/38-43d35d5aefbc1190.js","327","static/chunks/327-fe027e81c1ba5f90.js","576","static/chunks/576-857baff681aa695c.js","147","static/chunks/147-a7f3a4fa51c5e5b5.js","136","static/chunks/app/services/financial-reporting/page-61896f9f4aeb71f6.js"],"default"]
b:I[9665,[],"OutletBoundary"]
e:I[4911,[],"AsyncMetadataOutlet"]
10:I[9665,[],"ViewportBoundary"]
12:I[9665,[],"MetadataBoundary"]
14:I[6614,[],""]
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
          0:{"P":null,"b":"YgRCSmWGT3PtZ8giRzUPg","p":"","c":["","services","financial-reporting"],"i":false,"f":[[["",{"children":["services",{"children":["financial-reporting",{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],["",["$","$1","c",{"children":[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/87be8655b0fb2f2c.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}],["$","link","1",{"rel":"stylesheet","href":"/_next/static/css/b5b1bb0b50b6e47b.css","precedence":"next","crossOrigin":"$undefined","nonce":"$undefined"}]],["$","html",null,{"lang":"en-AU","className":"__variable_2b1a69 scroll-smooth","suppressHydrationWarning":true,"children":[["$","head",null,{"children":[["$","link",null,{"rel":"preconnect","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"preconnect","href":"https://fonts.gstatic.com","crossOrigin":"anonymous"}],["$","link",null,{"rel":"dns-prefetch","href":"https://fonts.googleapis.com"}],["$","link",null,{"rel":"dns-prefetch","href":"https://fonts.gstatic.com"}],["$","meta",null,{"name":"viewport","content":"width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover"}],["$","meta",null,{"name":"theme-color","content":"#3b82f6"}],["$","meta",null,{"name":"msapplication-TileColor","content":"#3b82f6"}],["$","meta",null,{"name":"apple-mobile-web-app-capable","content":"yes"}],["$","meta",null,{"name":"apple-mobile-web-app-status-bar-style","content":"default"}]]}],["$","body",null,{"className":"\n          __className_2b1a69 \n          font-sans antialiased \n          text-gray-900 \n          bg-white \n          selection:bg-primary-500 \n          selection:text-white\n          overflow-x-hidden\n          min-h-screen\n        ","suppressHydrationWarning":true,"children":[["$","a",null,{"href":"#main-content","className":"sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-lg z-[9999] font-semibold transition-all duration-200","children":"Skip to main content"}],["$","$L2",null,{"children":["$","$L3",null,{"children":["$","$L4",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":404}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],[]],"forbidden":"$undefined","unauthorized":"$undefined"}]}]}],["$","script",null,{"dangerouslySetInnerHTML":{"__html":"$6"}}]]}]]}]]}],{"children":["services",["$","$1","c",{"children":[null,["$","$L4",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["financial-reporting",["$","$1","c",{"children":[null,["$","$L4",null,{"parallelRouterKey":"children","error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","forbidden":"$undefined","unauthorized":"$undefined"}]]}],{"children":["__PAGE__",["$","$1","c",{"children":[["$","$L7",null,{"Component":"$8","searchParams":{},"params":{},"promises":["$@9","$@a"]}],null,["$","$Lb",null,{"children":["$Lc","$Ld",["$","$Le",null,{"promise":"$@f"}]]}]]}],{},null,false]},null,false]},null,false]},null,false],["$","$1","h",{"children":[null,["$","$1","w5ZvubgkStsfo-IyhHJzgv",{"children":[["$","$L10",null,{"children":"$L11"}],["$","meta",null,{"name":"next-size-adjust","content":""}]]}],["$","$L12",null,{"children":"$L13"}]]}],false]],"m":"$undefined","G":["$14","$undefined"],"s":false,"S":true}
15:"$Sreact.suspense"
16:I[4911,[],"AsyncMetadata"]
9:{}
a:{}
13:["$","div",null,{"hidden":true,"children":["$","$15",null,{"fallback":null,"children":["$","$L16",null,{"promise":"$@17"}]}]}]
d:null
11:[["$","meta","0",{"charSet":"utf-8"}],["$","meta","1",{"name":"viewport","content":"width=device-width, initial-scale=1"}]]
c:null
f:{"metadata":[["$","title","0",{"children":"AuditsPro Australia | Professional Trust Account Auditing Services"}],["$","meta","1",{"name":"description","content":"Professional trust account auditing services across Australia. ASIC registered auditors, fixed pricing, fast turnaround. Serving law firms, real estate agencies, and property managers."}],["$","meta","2",{"name":"author","content":"AuditsPro Australia"}],["$","meta","3",{"name":"keywords","content":"trust account audit,ASIC registered auditor,legal auditing services,real estate audit,property management audit,Australia auditing,compliance auditing"}],["$","meta","4",{"name":"creator","content":"AuditsPro Australia"}],["$","meta","5",{"name":"publisher","content":"AuditsPro Australia"}],["$","meta","6",{"name":"robots","content":"index, follow"}],["$","meta","7",{"name":"googlebot","content":"index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"}],["$","meta","8",{"name":"google-site-verification","content":"your-google-verification-code"}],["$","meta","9",{"property":"og:title","content":"AuditsPro Australia | Professional Trust Account Auditing Services"}],["$","meta","10",{"property":"og:description","content":"Professional trust account auditing services across Australia. ASIC registered auditors, fixed pricing, fast turnaround."}],["$","meta","11",{"property":"og:url","content":"https://auditspro.com.au"}],["$","meta","12",{"property":"og:site_name","content":"AuditsPro Australia"}],["$","meta","13",{"property":"og:locale","content":"en_AU"}],["$","meta","14",{"property":"og:image","content":"http://localhost:3000/og-default.jpg"}],["$","meta","15",{"property":"og:image:width","content":"1200"}],["$","meta","16",{"property":"og:image:height","content":"630"}],["$","meta","17",{"property":"og:image:alt","content":"AuditsPro Australia - Professional Trust Account Auditing Services"}],["$","meta","18",{"property":"og:type","content":"website"}],["$","meta","19",{"name":"twitter:card","content":"summary_large_image"}],["$","meta","20",{"name":"twitter:creator","content":"@AuditsProAU"}],["$","meta","21",{"name":"twitter:title","content":"AuditsPro Australia | Professional Trust Account Auditing Services"}],["$","meta","22",{"name":"twitter:description","content":"Professional trust account auditing services across Australia. ASIC registered auditors, fixed pricing, fast turnaround."}],["$","meta","23",{"name":"twitter:image","content":"http://localhost:3000/twitter-default.jpg"}]],"error":null,"digest":"$undefined"}
17:{"metadata":"$f:metadata","error":null,"digest":"$undefined"}
