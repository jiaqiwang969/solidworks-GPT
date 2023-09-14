"use strict";(self.webpackChunksolidworks_gpt=self.webpackChunksolidworks_gpt||[]).push([[44481],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,g=m["".concat(p,".").concat(u)]||m[u]||d[u]||l;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},42057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={title:"Angular package.json file overview",caption:"Package File Overview",description:"Overview of a package.json file to manage Angular project",image:"angular-package.png",labels:["angular","package","json","dependencies","devDependencies","scripts"],sidebar_position:0},i=void 0,o={unversionedId:"codestack/angular/getting-started/package/index",id:"codestack/angular/getting-started/package/index",title:"Angular package.json file overview",description:"Overview of a package.json file to manage Angular project",source:"@site/docs/codestack/angular/getting-started/package/index.md",sourceDirName:"codestack/angular/getting-started/package",slug:"/codestack/angular/getting-started/package/",permalink:"/solidworks-GPT/docs/codestack/angular/getting-started/package/",draft:!1,editUrl:"https://github.com/jiaqiwang969/solidworks-GPT/edit/main/website/docs/codestack/angular/getting-started/package/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Angular package.json file overview",caption:"Package File Overview",description:"Overview of a package.json file to manage Angular project",image:"angular-package.png",labels:["angular","package","json","dependencies","devDependencies","scripts"],sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Setup development environment and create first Angular 8 project",permalink:"/solidworks-GPT/docs/codestack/angular/getting-started/create-first-project/"},next:{title:"hosting",permalink:"/solidworks-GPT/docs/category/hosting-1"}},p={},s=[{value:"Project Metadata",id:"project-metadata",level:2},{value:"Scripts",id:"scripts",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Development Dependencies",id:"development-dependencies",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Angular package file",src:a(35555).Z,width:"800",height:"617"}),"{ width=400 }"),(0,r.kt)("p",null,"Once you create new Angular application, you will see package.json file among the newly created files and folders. package.json file locates in project root and contains information about your web application. The main purpose of the file comes from its name ",(0,r.kt)("em",{parentName:"p"},"package"),", so it'll contain the information about npm packages installed for the project."),(0,r.kt)("p",null,"Let's take a look at main sections in package.json file."),(0,r.kt)("h2",{id:"project-metadata"},"Project Metadata"),(0,r.kt)("p",null,"Metadata contains information about your application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  "name": "my-first-angular-app",\n  "version": "0.0.0",\n  "private": true,\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"name"'),(0,r.kt)("td",{parentName:"tr",align:null},'"my-first-angular-app"'),(0,r.kt)("td",{parentName:"tr",align:null},"Your project name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"version"'),(0,r.kt)("td",{parentName:"tr",align:null},'"0.0.1"'),(0,r.kt)("td",{parentName:"tr",align:null},"Your project version")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"private"'),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Project is private and can't be published in npm")))),(0,r.kt)("p",null,"You can add the following fields and values:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"description"'),(0,r.kt)("td",{parentName:"tr",align:null},'"Some project description"'),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"main"'),(0,r.kt)("td",{parentName:"tr",align:null},'"src/main.ts"'),(0,r.kt)("td",{parentName:"tr",align:null},'Entry point in the app. "src/main.ts" is default value for Angular application')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"author"'),(0,r.kt)("td",{parentName:"tr",align:null},'"Name, ',(0,r.kt)("a",{parentName:"td",href:"mailto:name@email.com"},"name@email.com"),", ",(0,r.kt)("a",{parentName:"td",href:"https://name.com%22"},'https://name.com"'),' or "author": {   "name":"Name","email":"',(0,r.kt)("a",{parentName:"td",href:"mailto:name@email.com"},"name@email.com"),'", "url":"',(0,r.kt)("a",{parentName:"td",href:"https://name.com%22%7D"},'https://name.com"}')),(0,r.kt)("td",{parentName:"tr",align:null},"Set all in one plain string   or   using the structure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"contributors"'),(0,r.kt)("td",{parentName:"tr",align:null},'["Contributor, contributor@email.com, https://contributor.com"]',' or "contributors": ','[{ "name": "Contributor", "email": "contributor@email.com", "url": "https://contributor.com" }]'),(0,r.kt)("td",{parentName:"tr",align:null},"You can add contributors information as string array or using the structure array")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"bugs"'),(0,r.kt)("td",{parentName:"tr",align:null},'"',(0,r.kt)("a",{parentName:"td",href:"https://github.com/UserName/my-first-angular-app/issues%22"},'https://github.com/UserName/my-first-angular-app/issues"')),(0,r.kt)("td",{parentName:"tr",align:null},"Link to bug tracking system, if any")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"homepage"'),(0,r.kt)("td",{parentName:"tr",align:null},'"',(0,r.kt)("a",{parentName:"td",href:"https://site-name.com%22"},'https://site-name.com"')),(0,r.kt)("td",{parentName:"tr",align:null},"Link to homepage")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"license"'),(0,r.kt)("td",{parentName:"tr",align:null},'"MIT"'),(0,r.kt)("td",{parentName:"tr",align:null},"License of the application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},'"repository"'),(0,r.kt)("td",{parentName:"tr",align:null},'"{"type": "git",  "url": "',(0,r.kt)("a",{parentName:"td",href:"https://github.com/UserName/my-first-angular-app.git%22%7D%22"},'https://github.com/UserName/my-first-angular-app.git"}"')),(0,r.kt)("td",{parentName:"tr",align:null},"Repository location")))),(0,r.kt)("h2",{id:"scripts"},"Scripts"),(0,r.kt)("p",null,"This section describes Node scripts you can run in your application. As the code sample uses Angular CLI, all scripts are calling it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  "scripts": {\n    "ng": "ng",\n    "start": "ng serve",\n    "build": "ng build",\n    "test": "ng test",\n    "lint": "ng lint",\n    "e2e": "ng e2e"\n  },\n')),(0,r.kt)("p",null,"You can put any cmd command in the script and you will be able to run it with npm. To run the script, just run it in command line from project location:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> npm start\n")),(0,r.kt)("p",null,"This line with run the ",(0,r.kt)("strong",{parentName:"p"},"ng serve")," for you, which means start the application. You can clean existing and add your own new scripts."),(0,r.kt)("h2",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"The list of packages installed as dependencies for this project are required at runtime."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"dependencies": {\n  "@angular/animations": "~8.0.1",\n  "@angular/common": "~8.0.1",\n  "@angular/compiler": "~8.0.1",\n  "@angular/core": "~8.0.1",\n  "@angular/forms": "~8.0.1",\n  "@angular/platform-browser": "~8.0.1",\n  "@angular/platform-browser-dynamic": "~8.0.1",\n  "@angular/router": "~8.0.1",\n  "rxjs": "~6.4.0",\n  "tslib": "^1.9.0",\n  "zone.js": "~0.9.1"\n},\n')),(0,r.kt)("p",null,"Where ",(0,r.kt)("strong",{parentName:"p"},"@angular/animations")," is package name and ",(0,r.kt)("strong",{parentName:"p"},"~8.0.0")," is package version. You may notice that package versions description vary. The symbol in front of version says to npm install which package version to use\n",(0,r.kt)("strong",{parentName:"p"},"1.0.0")," means strictly 1.0.0 version of the package\n",(0,r.kt)("strong",{parentName:"p"},"~8.0.0")," means, 8.0.0 version or it's later patch version (third number may vary): 8.0, 8.0.x\n",(0,r.kt)("strong",{parentName:"p"},"^1.9.0")," means, 1.9.0 version or it's later minor version (second number may vary): 1, 1.x  "),(0,r.kt)("p",null,"Other version control symbols:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Symbol"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"*"),(0,r.kt)("td",{parentName:"tr",align:null},"Latest version of the package may be installed, including major version update (first number may vary)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">"),(0,r.kt)("td",{parentName:"tr",align:null},"Version higher then specified should be installed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},">="),(0,r.kt)("td",{parentName:"tr",align:null},"Same or higher package version should be installed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<"),(0,r.kt)("td",{parentName:"tr",align:null},"Version lower then specified should be installed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"<="),(0,r.kt)("td",{parentName:"tr",align:null},"Same or lower package version should be installed")))),(0,r.kt)("p",null,"To install a new package run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> npm i new-package-name-to-install\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("strong",{parentName:"p"},"i")," is short for install and you will need to replace ",(0,r.kt)("strong",{parentName:"p"},"new-package-name-to-install")," with actual package name and it's version. Check the ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"https://www.npmjs.com/"),' for available packages. The line with package name and it\'s version will be added to "dependencies" list automatically after installation.'),(0,r.kt)("h2",{id:"development-dependencies"},"Development Dependencies"),(0,r.kt)("p",null,"The list of packages that are required only for development. This packages are installed only on developer's machine and will not be run for production build."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"devDependencies": {\n  "@angular-devkit/build-angular": "~0.800.0",\n  "@angular/cli": "~8.0.3",\n  "@angular/compiler-cli": "~8.0.1",\n  "@angular/language-service": "~8.0.1",\n  "@types/node": "~8.9.4",\n  "@types/jasmine": "~3.3.8",\n  "@types/jasminewd2": "~2.0.3",\n  "codelyzer": "^5.0.0",\n  "jasmine-core": "~3.4.0",\n  "jasmine-spec-reporter": "~4.2.1",\n  "karma": "~4.1.0",\n  "karma-chrome-launcher": "~2.2.0",\n  "karma-coverage-istanbul-reporter": "~2.0.1",\n  "karma-jasmine": "~2.0.1",\n  "karma-jasmine-html-reporter": "^1.4.0",\n  "protractor": "~5.4.0",\n  "ts-node": "~7.0.0",\n  "tslint": "~5.15.0",\n  "typescript": "~3.4.3"\n}\n')),(0,r.kt)("p",null,"To install the development dependency add ",(0,r.kt)("strong",{parentName:"p"},"-dev")," flag to installation string:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"> npm i -dev new-package-name-to-install\n")))}d.isMDXComponent=!0},35555:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/angular-package-860b4e8e356eb2d1f0760e86e735748c.png"}}]);