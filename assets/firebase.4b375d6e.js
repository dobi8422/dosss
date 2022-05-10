import{_ as Ia}from"./index.2702bd15.js";import{o as ai,c as hi,e as ci,t as ui,l as Sa}from"./vendor.51adeeb9.js";const Ca=["href"],_a=["src"],ba={key:0},Aa={props:{link:{type:String},figure:{type:String},name:{type:String},outline:{type:String}},setup(e){const t=e;return(n,s)=>(ai(),hi("a",{href:t.link,target:"_blank"},[ci("img",{src:t.figure,alt:""},null,8,_a),ci("h5",null,ui(t.name),1),t.outline?(ai(),hi("p",ba,ui(t.outline),1)):Sa("",!0)],8,Ca))}};var cf=Ia(Aa,[["__scopeId","data-v-742cd1ad"]]);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yr=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let i=e.charCodeAt(s);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&s+1<e.length&&(e.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++s)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Da=function(e){const t=[];let n=0,s=0;for(;n<e.length;){const i=e[n++];if(i<128)t[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=e[n++];t[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=e[n++],o=e[n++],a=e[n++],h=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;t[s++]=String.fromCharCode(55296+(h>>10)),t[s++]=String.fromCharCode(56320+(h&1023))}else{const r=e[n++],o=e[n++];t[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return t.join("")},ka={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<e.length;i+=3){const r=e[i],o=i+1<e.length,a=o?e[i+1]:0,h=i+2<e.length,c=h?e[i+2]:0,u=r>>2,l=(r&3)<<4|a>>4;let p=(a&15)<<2|c>>6,y=c&63;h||(y=64,o||(p=64)),s.push(n[u],n[l],n[p],n[y])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(yr(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Da(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<e.length;){const r=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const c=i<e.length?n[e.charAt(i)]:64;++i;const l=i<e.length?n[e.charAt(i)]:64;if(++i,r==null||a==null||c==null||l==null)throw Error();const p=r<<2|a>>4;if(s.push(p),c!==64){const y=a<<4&240|c>>2;if(s.push(y),l!==64){const T=c<<6&192|l;s.push(T)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Na=function(e){const t=yr(e);return ka.encodeByteArray(t,!0)},vr=function(e){return Na(e).replace(/\./g,"")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function xa(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(un())}function Oa(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function La(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ma(){return un().indexOf("Electron/")>=0}function Pa(){const e=un();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Fa(){return un().indexOf("MSAppHost/")>=0}function Va(){return typeof indexedDB=="object"}function Ba(){return new Promise((e,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;t(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua="FirebaseError";class Ee extends Error{constructor(t,n,s){super(n);this.code=t,this.customData=s,this.name=Ua,Object.setPrototypeOf(this,Ee.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wr.prototype.create)}}class wr{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},i=`${this.service}/${t}`,r=this.errors[t],o=r?$a(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ee(i,a,s)}}function $a(e,t){return e.replace(qa,(n,s)=>{const i=t[s];return i!=null?String(i):`<${s}?>`})}const qa=/\{\$([^}]+)}/g;function Gn(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const i of n){if(!s.includes(i))return!1;const r=e[i],o=t[i];if(li(r)&&li(o)){if(!Gn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function li(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Er(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e,t){return new Promise((n,s)=>{e.onsuccess=i=>{n(i.target.result)},e.onerror=i=>{var r;s(`${t}: ${(r=i.target.error)===null||r===void 0?void 0:r.message}`)}})}class di{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n="readonly"){return new Tr(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new Ir(this._db.createObjectStore(t,n))}close(){this._db.close()}}class Tr{constructor(t){this._transaction=t,this.complete=new Promise((n,s)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{s(this._transaction.error)},this._transaction.onabort=()=>{s(this._transaction.error)}})}objectStore(t){return new Ir(this._transaction.objectStore(t))}}class Ir{constructor(t){this._store=t}index(t){return new fi(this._store.index(t))}createIndex(t,n,s){return new fi(this._store.createIndex(t,n,s))}get(t){const n=this._store.get(t);return ee(n,"Error reading from IndexedDB")}put(t,n){const s=this._store.put(t,n);return ee(s,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return ee(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return ee(t,"Error clearing IndexedDB object store")}}class fi{constructor(t){this._index=t}get(t){const n=this._index.get(t);return ee(n,"Error reading from IndexedDB")}}function ja(e,t,n){return new Promise((s,i)=>{try{const r=indexedDB.open(e,t);r.onsuccess=o=>{s(new di(o.target.result))},r.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},r.onupgradeneeded=o=>{n(new di(r.result),o.oldVersion,o.newVersion,new Tr(r.transaction))}}catch(r){i(`Error opening indexedDB: ${r.message}`)}})}class Ft{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new Ra;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xa(t))try{this.getOrInitializeService({instanceIdentifier:vt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(t=vt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=vt){return this.instances.has(t)}getOptions(t=vt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(t,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(t),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&t(o,i),()=>{r.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(!!s)for(const i of s)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ka(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=vt){return this.component?this.component.multipleInstances?t:vt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ka(e){return e===vt?void 0:e}function Xa(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ha(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(b||(b={}));const za={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},Wa=b.INFO,Ya={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Qa=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),i=Ya[t];if(i)console[i](`[${s}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Sr{constructor(t){this.name=t,this._logLevel=Wa,this._logHandler=Qa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?za[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Za(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Za(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const zn="@firebase/app",gi="0.7.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Es=new Sr("@firebase/app"),th="@firebase/app-compat",eh="@firebase/analytics-compat",nh="@firebase/analytics",sh="@firebase/app-check-compat",ih="@firebase/app-check",rh="@firebase/auth",oh="@firebase/auth-compat",ah="@firebase/database",hh="@firebase/database-compat",ch="@firebase/functions",uh="@firebase/functions-compat",lh="@firebase/installations",dh="@firebase/installations-compat",fh="@firebase/messaging",gh="@firebase/messaging-compat",ph="@firebase/performance",mh="@firebase/performance-compat",yh="@firebase/remote-config",vh="@firebase/remote-config-compat",wh="@firebase/storage",Eh="@firebase/storage-compat",Th="@firebase/firestore",Ih="@firebase/firestore-compat",Sh="firebase",Ch="9.6.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]",_h={[zn]:"fire-core",[th]:"fire-core-compat",[nh]:"fire-analytics",[eh]:"fire-analytics-compat",[ih]:"fire-app-check",[sh]:"fire-app-check-compat",[rh]:"fire-auth",[oh]:"fire-auth-compat",[ah]:"fire-rtdb",[hh]:"fire-rtdb-compat",[ch]:"fire-fn",[uh]:"fire-fn-compat",[lh]:"fire-iid",[dh]:"fire-iid-compat",[fh]:"fire-fcm",[gh]:"fire-fcm-compat",[ph]:"fire-perf",[mh]:"fire-perf-compat",[yh]:"fire-rc",[vh]:"fire-rc-compat",[wh]:"fire-gcs",[Eh]:"fire-gcs-compat",[Th]:"fire-fst",[Ih]:"fire-fst-compat","fire-js":"fire-js",[Sh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Map,Wn=new Map;function bh(e,t){try{e.container.addComponent(t)}catch(n){Es.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ae(e){const t=e.name;if(Wn.has(t))return Es.debug(`There were multiple attempts to register component ${t}.`),!1;Wn.set(t,e);for(const n of Xe.values())bh(n,e);return!0}function _r(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},St=new wr("app","Firebase",Ah);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ft("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw St.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br=Ch;function kh(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Cr,automaticDataCollectionEnabled:!1},t),s=n.name;if(typeof s!="string"||!s)throw St.create("bad-app-name",{appName:String(s)});const i=Xe.get(s);if(i){if(Gn(e,i.options)&&Gn(n,i.config))return i;throw St.create("duplicate-app",{appName:s})}const r=new Ga(s);for(const a of Wn.values())r.addComponent(a);const o=new Dh(e,n,r);return Xe.set(s,o),o}function Ar(e=Cr){const t=Xe.get(e);if(!t)throw St.create("no-app",{appName:e});return t}function dt(e,t,n){var s;let i=(s=_h[e])!==null&&s!==void 0?s:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${t}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Es.warn(a.join(" "));return}ae(new Ft(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nh="firebase-heartbeat-database",Rh=1,he="firebase-heartbeat-store";let xn=null;function Dr(){return xn||(xn=ja(Nh,Rh,(e,t)=>{switch(t){case 0:e.createObjectStore(he)}}).catch(e=>{throw St.create("storage-open",{originalErrorMessage:e.message})})),xn}async function xh(e){try{return(await Dr()).transaction(he).objectStore(he).get(kr(e))}catch(t){throw St.create("storage-get",{originalErrorMessage:t.message})}}async function pi(e,t){try{const s=(await Dr()).transaction(he,"readwrite");return await s.objectStore(he).put(t,kr(e)),s.complete}catch(n){throw St.create("storage-set",{originalErrorMessage:n.message})}}function kr(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oh=1024,Lh=30*24*60*60*1e3;class Mh{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Fh(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mi();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=Lh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mi(),{heartbeatsToSend:n,unsentEntries:s}=Ph(this._heartbeatsCache.heartbeats),i=vr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function mi(){return new Date().toISOString().substring(0,10)}function Ph(e,t=Oh){const n=[];let s=e.slice();for(const i of e){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),yi(n)>t){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),yi(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Fh{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Va()?Ba().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await xh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pi(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function yi(e){return vr(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vh(e){ae(new Ft("platform-logger",t=>new Ja(t),"PRIVATE")),ae(new Ft("heartbeat",t=>new Mh(t),"PRIVATE")),dt(zn,gi,e),dt(zn,gi,"esm2017"),dt("fire-js","")}Vh("");var Bh="firebase",Uh="9.6.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dt(Bh,Uh,"app");var $h=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},g,Ts=Ts||{},E=$h||self;function Ge(){}function Yn(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Te(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function qh(e){return Object.prototype.hasOwnProperty.call(e,On)&&e[On]||(e[On]=++jh)}var On="closure_uid_"+(1e9*Math.random()>>>0),jh=0;function Hh(e,t,n){return e.call.apply(e.bind,arguments)}function Kh(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),e.apply(t,i)}}return function(){return e.apply(t,arguments)}}function $(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$=Hh:$=Kh,$.apply(null,arguments)}function Me(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function X(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(s,o)}}function pt(){this.s=this.s,this.o=this.o}var Xh=0,Gh={};pt.prototype.s=!1;pt.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),Xh!=0)){var e=qh(this);delete Gh[e]}};pt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Nr=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},Rr=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const s=e.length,i=typeof e=="string"?e.split(""):e;for(let r=0;r<s;r++)r in i&&t.call(n,i[r],r,e)};function zh(e){t:{var t=Bc;const n=e.length,s=typeof e=="string"?e.split(""):e;for(let i=0;i<n;i++)if(i in s&&t.call(void 0,s[i],i,e)){t=i;break t}t=-1}return 0>t?null:typeof e=="string"?e.charAt(t):e[t]}function vi(e){return Array.prototype.concat.apply([],arguments)}function Is(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function ze(e){return/^[\s\xa0]*$/.test(e)}var wi=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function W(e,t){return e.indexOf(t)!=-1}function Ln(e,t){return e<t?-1:e>t?1:0}var Y;t:{var Ei=E.navigator;if(Ei){var Ti=Ei.userAgent;if(Ti){Y=Ti;break t}}Y=""}function Ss(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function xr(e){const t={};for(const n in e)t[n]=e[n];return t}var Ii="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Or(e,t){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)e[n]=s[n];for(let r=0;r<Ii.length;r++)n=Ii[r],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Cs(e){return Cs[" "](e),e}Cs[" "]=Ge;function Wh(e){var t=Jh;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}var Yh=W(Y,"Opera"),Vt=W(Y,"Trident")||W(Y,"MSIE"),Lr=W(Y,"Edge"),Qn=Lr||Vt,Mr=W(Y,"Gecko")&&!(W(Y.toLowerCase(),"webkit")&&!W(Y,"Edge"))&&!(W(Y,"Trident")||W(Y,"MSIE"))&&!W(Y,"Edge"),Qh=W(Y.toLowerCase(),"webkit")&&!W(Y,"Edge");function Pr(){var e=E.document;return e?e.documentMode:void 0}var We;t:{var Mn="",Pn=function(){var e=Y;if(Mr)return/rv:([^\);]+)(\)|;)/.exec(e);if(Lr)return/Edge\/([\d\.]+)/.exec(e);if(Vt)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Qh)return/WebKit\/(\S+)/.exec(e);if(Yh)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(Pn&&(Mn=Pn?Pn[1]:""),Vt){var Fn=Pr();if(Fn!=null&&Fn>parseFloat(Mn)){We=String(Fn);break t}}We=Mn}var Jh={};function Zh(){return Wh(function(){let e=0;const t=wi(String(We)).split("."),n=wi("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var i=t[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;e=Ln(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Ln(i[2].length==0,r[2].length==0)||Ln(i[2],r[2]),i=i[3],r=r[3]}while(e==0)}return 0<=e})}var Jn;if(E.document&&Vt){var Si=Pr();Jn=Si||parseInt(We,10)||void 0}else Jn=void 0;var tc=Jn,ec=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{E.addEventListener("test",Ge,t),E.removeEventListener("test",Ge,t)}catch{}return e}();function z(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}z.prototype.h=function(){this.defaultPrevented=!0};function ce(e,t){if(z.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Mr){t:{try{Cs(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:nc[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ce.Z.h.call(this)}}X(ce,z);var nc={2:"touch",3:"pen",4:"mouse"};ce.prototype.h=function(){ce.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Ie="closure_listenable_"+(1e6*Math.random()|0),sc=0;function ic(e,t,n,s,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ia=i,this.key=++sc,this.ca=this.fa=!1}function ln(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function dn(e){this.src=e,this.g={},this.h=0}dn.prototype.add=function(e,t,n,s,i){var r=e.toString();e=this.g[r],e||(e=this.g[r]=[],this.h++);var o=ts(e,t,s,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new ic(t,this.src,r,!!s,i),t.fa=n,e.push(t)),t};function Zn(e,t){var n=t.type;if(n in e.g){var s=e.g[n],i=Nr(s,t),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(ln(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function ts(e,t,n,s){for(var i=0;i<e.length;++i){var r=e[i];if(!r.ca&&r.listener==t&&r.capture==!!n&&r.ia==s)return i}return-1}var _s="closure_lm_"+(1e6*Math.random()|0),Vn={};function Fr(e,t,n,s,i){if(s&&s.once)return Br(e,t,n,s,i);if(Array.isArray(t)){for(var r=0;r<t.length;r++)Fr(e,t[r],n,s,i);return null}return n=Ds(n),e&&e[Ie]?e.N(t,n,Te(s)?!!s.capture:!!s,i):Vr(e,t,n,!1,s,i)}function Vr(e,t,n,s,i,r){if(!t)throw Error("Invalid event type");var o=Te(i)?!!i.capture:!!i,a=As(e);if(a||(e[_s]=a=new dn(e)),n=a.add(t,n,s,o,r),n.proxy)return n;if(s=rc(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)ec||(i=o),i===void 0&&(i=!1),e.addEventListener(t.toString(),s,i);else if(e.attachEvent)e.attachEvent($r(t.toString()),s);else if(e.addListener&&e.removeListener)e.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function rc(){function e(n){return t.call(e.src,e.listener,n)}var t=oc;return e}function Br(e,t,n,s,i){if(Array.isArray(t)){for(var r=0;r<t.length;r++)Br(e,t[r],n,s,i);return null}return n=Ds(n),e&&e[Ie]?e.O(t,n,Te(s)?!!s.capture:!!s,i):Vr(e,t,n,!0,s,i)}function Ur(e,t,n,s,i){if(Array.isArray(t))for(var r=0;r<t.length;r++)Ur(e,t[r],n,s,i);else s=Te(s)?!!s.capture:!!s,n=Ds(n),e&&e[Ie]?(e=e.i,t=String(t).toString(),t in e.g&&(r=e.g[t],n=ts(r,n,s,i),-1<n&&(ln(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete e.g[t],e.h--)))):e&&(e=As(e))&&(t=e.g[t.toString()],e=-1,t&&(e=ts(t,n,s,i)),(n=-1<e?t[e]:null)&&bs(n))}function bs(e){if(typeof e!="number"&&e&&!e.ca){var t=e.src;if(t&&t[Ie])Zn(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent($r(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=As(t))?(Zn(n,e),n.h==0&&(n.src=null,t[_s]=null)):ln(e)}}}function $r(e){return e in Vn?Vn[e]:Vn[e]="on"+e}function oc(e,t){if(e.ca)e=!0;else{t=new ce(t,this);var n=e.listener,s=e.ia||e.src;e.fa&&bs(e),e=n.call(s,t)}return e}function As(e){return e=e[_s],e instanceof dn?e:null}var Bn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ds(e){return typeof e=="function"?e:(e[Bn]||(e[Bn]=function(t){return e.handleEvent(t)}),e[Bn])}function V(){pt.call(this),this.i=new dn(this),this.P=this,this.I=null}X(V,pt);V.prototype[Ie]=!0;V.prototype.removeEventListener=function(e,t,n,s){Ur(this,e,t,n,s)};function q(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new z(t,e);else if(t instanceof z)t.target=t.target||e;else{var i=t;t=new z(s,e),Or(t,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=t.g=n[r];i=Pe(o,s,!0,t)&&i}if(o=t.g=e,i=Pe(o,s,!0,t)&&i,i=Pe(o,s,!1,t)&&i,n)for(r=0;r<n.length;r++)o=t.g=n[r],i=Pe(o,s,!1,t)&&i}V.prototype.M=function(){if(V.Z.M.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],s=0;s<n.length;s++)ln(n[s]);delete e.g[t],e.h--}}this.I=null};V.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)};V.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};function Pe(e,t,n,s){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,r=0;r<t.length;++r){var o=t[r];if(o&&!o.ca&&o.capture==n){var a=o.listener,h=o.ia||o.src;o.fa&&Zn(e.i,o),i=a.call(h,s)!==!1&&i}}return i&&!s.defaultPrevented}var ks=E.JSON.stringify;function ac(){var e=jr;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class hc{constructor(){this.h=this.g=null}add(t,n){const s=qr.get();s.set(t,n),this.h?this.h.next=s:this.g=s,this.h=s}}var qr=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new cc,e=>e.reset());class cc{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function uc(e){E.setTimeout(()=>{throw e},0)}function Ns(e,t){es||lc(),ns||(es(),ns=!0),jr.add(e,t)}var es;function lc(){var e=E.Promise.resolve(void 0);es=function(){e.then(dc)}}var ns=!1,jr=new hc;function dc(){for(var e;e=ac();){try{e.h.call(e.g)}catch(n){uc(n)}var t=qr;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ns=!1}function fn(e,t){V.call(this),this.h=e||1,this.g=t||E,this.j=$(this.kb,this),this.l=Date.now()}X(fn,V);g=fn.prototype;g.da=!1;g.S=null;g.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),q(this,"tick"),this.da&&(Rs(this),this.start()))}};g.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Rs(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}g.M=function(){fn.Z.M.call(this),Rs(this),delete this.g};function xs(e,t,n){if(typeof e=="function")n&&(e=$(e,n));else if(e&&typeof e.handleEvent=="function")e=$(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:E.setTimeout(e,t||0)}function Hr(e){e.g=xs(()=>{e.g=null,e.i&&(e.i=!1,Hr(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class fc extends pt{constructor(t,n){super();this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Hr(this)}M(){super.M(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ue(e){pt.call(this),this.h=e,this.g={}}X(ue,pt);var Ci=[];function Kr(e,t,n,s){Array.isArray(n)||(n&&(Ci[0]=n.toString()),n=Ci);for(var i=0;i<n.length;i++){var r=Fr(t,n[i],s||e.handleEvent,!1,e.h||e);if(!r)break;e.g[r.key]=r}}function Xr(e){Ss(e.g,function(t,n){this.g.hasOwnProperty(n)&&bs(t)},e),e.g={}}ue.prototype.M=function(){ue.Z.M.call(this),Xr(this)};ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gn(){this.g=!0}gn.prototype.Aa=function(){this.g=!1};function gc(e,t,n,s,i,r){e.info(function(){if(e.g)if(r)for(var o="",a=r.split("&"),h=0;h<a.length;h++){var c=a[h].split("=");if(1<c.length){var u=c[0];c=c[1];var l=u.split("_");o=2<=l.length&&l[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+t+`
`+n+`
`+o})}function pc(e,t,n,s,i,r,o){e.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+t+`
`+n+`
`+r+" "+o})}function xt(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+yc(e,n)+(s?" "+s:"")})}function mc(e,t){e.info(function(){return"TIMEOUT: "+t})}gn.prototype.info=function(){};function yc(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var s=n[e];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return ks(n)}catch{return t}}var Nt={},_i=null;function pn(){return _i=_i||new V}Nt.Ma="serverreachability";function Gr(e){z.call(this,Nt.Ma,e)}X(Gr,z);function le(e){const t=pn();q(t,new Gr(t,e))}Nt.STAT_EVENT="statevent";function zr(e,t){z.call(this,Nt.STAT_EVENT,e),this.stat=t}X(zr,z);function Q(e){const t=pn();q(t,new zr(t,e))}Nt.Na="timingevent";function Wr(e,t){z.call(this,Nt.Na,e),this.size=t}X(Wr,z);function Se(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){e()},t)}var mn={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},Yr={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Os(){}Os.prototype.h=null;function bi(e){return e.h||(e.h=e.i())}function Qr(){}var Ce={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Ls(){z.call(this,"d")}X(Ls,z);function Ms(){z.call(this,"c")}X(Ms,z);var ss;function yn(){}X(yn,Os);yn.prototype.g=function(){return new XMLHttpRequest};yn.prototype.i=function(){return{}};ss=new yn;function _e(e,t,n,s){this.l=e,this.j=t,this.m=n,this.X=s||1,this.V=new ue(this),this.P=vc,e=Qn?125:void 0,this.W=new fn(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Jr}function Jr(){this.i=null,this.g="",this.h=!1}var vc=45e3,is={},Ye={};g=_e.prototype;g.setTimeout=function(e){this.P=e};function rs(e,t,n){e.K=1,e.v=wn(lt(t)),e.s=n,e.U=!0,Zr(e,null)}function Zr(e,t){e.F=Date.now(),be(e),e.A=lt(e.v);var n=e.A,s=e.X;Array.isArray(s)||(s=[String(s)]),oo(n.h,"t",s),e.C=0,n=e.l.H,e.h=new Jr,e.g=Ao(e.l,n?t:null,!e.s),0<e.O&&(e.L=new fc($(e.Ia,e,e.g),e.O)),Kr(e.V,e.g,"readystatechange",e.gb),t=e.H?xr(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),le(1),gc(e.j,e.u,e.A,e.m,e.X,e.s)}g.gb=function(e){e=e.target;const t=this.L;t&&ut(e)==3?t.l():this.Ia(e)};g.Ia=function(e){try{if(e==this.g)t:{const u=ut(this.g);var t=this.g.Da();const l=this.g.ba();if(!(3>u)&&(u!=3||Qn||this.g&&(this.h.h||this.g.ga()||Ni(this.g)))){this.I||u!=4||t==7||(t==8||0>=l?le(3):le(2)),vn(this);var n=this.g.ba();this.N=n;e:if(to(this)){var s=Ni(this.g);e="";var i=s.length,r=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){wt(this),se(this);var o="";break e}this.h.i=new E.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:r&&t==i-1});s.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,pc(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,h=this.g;if((a=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ze(a)){var c=a;break e}}c=null}if(n=c)xt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,os(this,n);else{this.i=!1,this.o=3,Q(12),wt(this),se(this);break t}}this.U?(eo(this,u,o),Qn&&this.i&&u==3&&(Kr(this.V,this.W,"tick",this.fb),this.W.start())):(xt(this.j,this.m,o,null),os(this,o)),u==4&&wt(this),this.i&&!this.I&&(u==4?So(this.l,this):(this.i=!1,be(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Q(12)):(this.o=0,Q(13)),wt(this),se(this)}}}catch{}finally{}};function to(e){return e.g?e.u=="GET"&&e.K!=2&&e.l.Ba:!1}function eo(e,t,n){let s=!0,i;for(;!e.I&&e.C<n.length;)if(i=wc(e,n),i==Ye){t==4&&(e.o=4,Q(14),s=!1),xt(e.j,e.m,null,"[Incomplete Response]");break}else if(i==is){e.o=4,Q(15),xt(e.j,e.m,n,"[Invalid Chunk]"),s=!1;break}else xt(e.j,e.m,i,null),os(e,i);to(e)&&i!=Ye&&i!=is&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,Q(16),s=!1),e.i=e.i&&s,s?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hs(t),t.L=!0,Q(11))):(xt(e.j,e.m,n,"[Invalid Chunked Response]"),wt(e),se(e))}g.fb=function(){if(this.g){var e=ut(this.g),t=this.g.ga();this.C<t.length&&(vn(this),eo(this,e,t),this.i&&e!=4&&be(this))}};function wc(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?Ye:(n=Number(t.substring(n,s)),isNaN(n)?is:(s+=1,s+n>t.length?Ye:(t=t.substr(s,n),e.C=s+n,t)))}g.cancel=function(){this.I=!0,wt(this)};function be(e){e.Y=Date.now()+e.P,no(e,e.P)}function no(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=Se($(e.eb,e),t)}function vn(e){e.B&&(E.clearTimeout(e.B),e.B=null)}g.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(mc(this.j,this.A),this.K!=2&&(le(3),Q(17)),wt(this),this.o=2,se(this)):no(this,this.Y-e)};function se(e){e.l.G==0||e.I||So(e.l,e)}function wt(e){vn(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Rs(e.W),Xr(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function os(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||as(n.i,e))){if(n.I=e.N,!e.J&&as(n.i,e)&&n.G==3){try{var s=n.Ca.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0)t:if(!n.u){if(n.g)if(n.g.F+3e3<e.F)tn(n),In(n);else break t;js(n),Q(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=Se($(n.ab,n),6e3));if(1>=co(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Et(n,11)}else if((e.J||n.g==e)&&tn(n),!ze(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.U=c[0],c=c[1],n.G==2)if(c[0]=="c"){n.J=c[1],n.la=c[2];const u=c[3];u!=null&&(n.ma=u,n.h.info("VER="+n.ma));const l=c[4];l!=null&&(n.za=l,n.h.info("SVER="+n.za));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(s=1.5*p,n.K=s,n.h.info("backChannelRequestTimeoutMs_="+s)),s=n;const y=e.g;if(y){const T=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(T){var r=s.i;!r.g&&(W(T,"spdy")||W(T,"quic")||W(T,"h2"))&&(r.j=r.l,r.g=new Set,r.h&&(Vs(r,r.h),r.h=null))}if(s.D){const R=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(s.sa=R,k(s.F,s.D,R))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),s=n;var o=e;if(s.oa=bo(s,s.H?s.la:null,s.W),o.J){uo(s.i,o);var a=o,h=s.K;h&&a.setTimeout(h),a.B&&(vn(a),be(a)),s.g=o}else To(s);0<n.l.length&&Sn(n)}else c[0]!="stop"&&c[0]!="close"||Et(n,7);else n.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Et(n,7):qs(n):c[0]!="noop"&&n.j&&n.j.wa(c),n.A=0)}}le(4)}catch{}}function Ec(e){if(e.R&&typeof e.R=="function")return e.R();if(typeof e=="string")return e.split("");if(Yn(e)){for(var t=[],n=e.length,s=0;s<n;s++)t.push(e[s]);return t}t=[],n=0;for(s in e)t[n++]=e[s];return t}function Ps(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(Yn(e)||typeof e=="string")Rr(e,t,void 0);else{if(e.T&&typeof e.T=="function")var n=e.T();else if(e.R&&typeof e.R=="function")n=void 0;else if(Yn(e)||typeof e=="string"){n=[];for(var s=e.length,i=0;i<s;i++)n.push(i)}else for(i in n=[],s=0,e)n[s++]=i;s=Ec(e),i=s.length;for(var r=0;r<i;r++)t.call(void 0,s[r],n&&n[r],e)}}function Kt(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var s=0;s<n;s+=2)this.set(arguments[s],arguments[s+1])}else if(e)if(e instanceof Kt)for(n=e.T(),s=0;s<n.length;s++)this.set(n[s],e.get(n[s]));else for(s in e)this.set(s,e[s])}g=Kt.prototype;g.R=function(){Fs(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e};g.T=function(){return Fs(this),this.g.concat()};function Fs(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var s=e.g[t];Ct(e.h,s)&&(e.g[n++]=s),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)s=e.g[t],Ct(i,s)||(e.g[n++]=s,i[s]=1),t++;e.g.length=n}}g.get=function(e,t){return Ct(this.h,e)?this.h[e]:t};g.set=function(e,t){Ct(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t};g.forEach=function(e,t){for(var n=this.T(),s=0;s<n.length;s++){var i=n[s],r=this.get(i);e.call(t,r,i,this)}};function Ct(e,t){return Object.prototype.hasOwnProperty.call(e,t)}var so=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Tc(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var s=e[n].indexOf("="),i=null;if(0<=s){var r=e[n].substring(0,s);i=e[n].substring(s+1)}else r=e[n];t(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _t(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof _t){this.g=t!==void 0?t:e.g,Qe(this,e.j),this.s=e.s,Je(this,e.i),Ze(this,e.m),this.l=e.l,t=e.h;var n=new de;n.i=t.i,t.g&&(n.g=new Kt(t.g),n.h=t.h),Ai(this,n),this.o=e.o}else e&&(n=String(e).match(so))?(this.g=!!t,Qe(this,n[1]||"",!0),this.s=ie(n[2]||""),Je(this,n[3]||"",!0),Ze(this,n[4]),this.l=ie(n[5]||"",!0),Ai(this,n[6]||"",!0),this.o=ie(n[7]||"")):(this.g=!!t,this.h=new de(null,this.g))}_t.prototype.toString=function(){var e=[],t=this.j;t&&e.push(ne(t,Di,!0),":");var n=this.i;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(ne(t,Di,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&e.push("/"),e.push(ne(n,n.charAt(0)=="/"?bc:_c,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",ne(n,Dc)),e.join("")};function lt(e){return new _t(e)}function Qe(e,t,n){e.j=n?ie(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Je(e,t,n){e.i=n?ie(t,!0):t}function Ze(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ai(e,t,n){t instanceof de?(e.h=t,kc(e.h,e.g)):(n||(t=ne(t,Ac)),e.h=new de(t,e.g))}function k(e,t,n){e.h.set(t,n)}function wn(e){return k(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Ic(e){return e instanceof _t?lt(e):new _t(e,void 0)}function Sc(e,t,n,s){var i=new _t(null,void 0);return e&&Qe(i,e),t&&Je(i,t),n&&Ze(i,n),s&&(i.l=s),i}function ie(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ne(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,Cc),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Cc(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Di=/[#\/\?@]/g,_c=/[#\?:]/g,bc=/[#\?]/g,Ac=/[#\?@]/g,Dc=/#/g;function de(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function mt(e){e.g||(e.g=new Kt,e.h=0,e.i&&Tc(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}g=de.prototype;g.add=function(e,t){mt(this),this.i=null,e=Xt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function io(e,t){mt(e),t=Xt(e,t),Ct(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ct(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&Fs(e)))}function ro(e,t){return mt(e),t=Xt(e,t),Ct(e.g.h,t)}g.forEach=function(e,t){mt(this),this.g.forEach(function(n,s){Rr(n,function(i){e.call(t,i,s,this)},this)},this)};g.T=function(){mt(this);for(var e=this.g.R(),t=this.g.T(),n=[],s=0;s<t.length;s++)for(var i=e[s],r=0;r<i.length;r++)n.push(t[s]);return n};g.R=function(e){mt(this);var t=[];if(typeof e=="string")ro(this,e)&&(t=vi(t,this.g.get(Xt(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=vi(t,e[n])}return t};g.set=function(e,t){return mt(this),this.i=null,e=Xt(this,e),ro(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};g.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t};function oo(e,t,n){io(e,t),0<n.length&&(e.i=null,e.g.set(Xt(e,t),Is(n)),e.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var s=t[n],i=encodeURIComponent(String(s));s=this.R(s);for(var r=0;r<s.length;r++){var o=i;s[r]!==""&&(o+="="+encodeURIComponent(String(s[r]))),e.push(o)}}return this.i=e.join("&")};function Xt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function kc(e,t){t&&!e.j&&(mt(e),e.i=null,e.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(io(this,s),oo(this,i,n))},e)),e.j=t}var Nc=class{constructor(e,t){this.h=e,this.g=t}};function ao(e){this.l=e||Rc,E.PerformanceNavigationTiming?(e=E.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(E.g&&E.g.Ea&&E.g.Ea()&&E.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Rc=10;function ho(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function co(e){return e.h?1:e.g?e.g.size:0}function as(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Vs(e,t){e.g?e.g.add(t):e.h=t}function uo(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}ao.prototype.cancel=function(){if(this.i=lo(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function lo(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return Is(e.i)}function Bs(){}Bs.prototype.stringify=function(e){return E.JSON.stringify(e,void 0)};Bs.prototype.parse=function(e){return E.JSON.parse(e,void 0)};function xc(){this.g=new Bs}function Oc(e,t,n){const s=n||"";try{Ps(e,function(i,r){let o=i;Te(i)&&(o=ks(i)),t.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw t.push(s+"type="+encodeURIComponent("_badmap")),i}}function Lc(e,t){const n=new gn;if(E.Image){const s=new Image;s.onload=Me(Fe,n,s,"TestLoadImage: loaded",!0,t),s.onerror=Me(Fe,n,s,"TestLoadImage: error",!1,t),s.onabort=Me(Fe,n,s,"TestLoadImage: abort",!1,t),s.ontimeout=Me(Fe,n,s,"TestLoadImage: timeout",!1,t),E.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=e}else t(!1)}function Fe(e,t,n,s,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(s)}catch{}}function Ae(e){this.l=e.$b||null,this.j=e.ib||!1}X(Ae,Os);Ae.prototype.g=function(){return new En(this.l,this.j)};Ae.prototype.i=function(e){return function(){return e}}({});function En(e,t){V.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Us,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}X(En,V);var Us=0;g=En.prototype;g.open=function(e,t){if(this.readyState!=Us)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,fe(this)};g.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||E).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,De(this)),this.readyState=Us};g.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,fe(this)),this.g&&(this.readyState=3,fe(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof E.ReadableStream!="undefined"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;fo(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))};function fo(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}g.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?De(this):fe(this),this.readyState==3&&fo(this)}};g.Ua=function(e){this.g&&(this.response=this.responseText=e,De(this))};g.Ta=function(e){this.g&&(this.response=e,De(this))};g.ha=function(){this.g&&De(this)};function De(e){e.readyState=4,e.l=null,e.j=null,e.A=null,fe(e)}g.setRequestHeader=function(e,t){this.v.append(e,t)};g.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function fe(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(En.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var Mc=E.JSON.parse;function P(e){V.call(this),this.headers=new Kt,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=go,this.K=this.L=!1}X(P,V);var go="",Pc=/^https?$/i,Fc=["POST","PUT"];g=P.prototype;g.ea=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ss.g(),this.C=this.u?bi(this.u):bi(ss),this.g.onreadystatechange=$(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(r){ki(this,r);return}e=n||"";const i=new Kt(this.headers);s&&Ps(s,function(r,o){i.set(o,r)}),s=zh(i.T()),n=E.FormData&&e instanceof E.FormData,!(0<=Nr(Fc,t))||s||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(r,o){this.g.setRequestHeader(o,r)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{yo(this),0<this.B&&((this.K=Vc(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$(this.pa,this)):this.A=xs(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(r){ki(this,r)}};function Vc(e){return Vt&&Zh()&&typeof e.timeout=="number"&&e.ontimeout!==void 0}function Bc(e){return e.toLowerCase()=="content-type"}g.pa=function(){typeof Ts!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,q(this,"timeout"),this.abort(8))};function ki(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,po(e),Tn(e)}function po(e){e.D||(e.D=!0,q(e,"complete"),q(e,"error"))}g.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,q(this,"complete"),q(this,"abort"),Tn(this))};g.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tn(this,!0)),P.Z.M.call(this)};g.Fa=function(){this.s||(this.F||this.v||this.l?mo(this):this.cb())};g.cb=function(){mo(this)};function mo(e){if(e.h&&typeof Ts!="undefined"&&(!e.C[1]||ut(e)!=4||e.ba()!=2)){if(e.v&&ut(e)==4)xs(e.Fa,0,e);else if(q(e,"readystatechange"),ut(e)==4){e.h=!1;try{const a=e.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var i=String(e.H).match(so)[1]||null;if(!i&&E.self&&E.self.location){var r=E.self.location.protocol;i=r.substr(0,r.length-1)}s=!Pc.test(i?i.toLowerCase():"")}n=s}if(n)q(e,"complete"),q(e,"success");else{e.m=6;try{var o=2<ut(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.ba()+"]",po(e)}}finally{Tn(e)}}}}function Tn(e,t){if(e.g){yo(e);const n=e.g,s=e.C[0]?Ge:null;e.g=null,e.C=null,t||q(e,"ready");try{n.onreadystatechange=s}catch{}}}function yo(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(E.clearTimeout(e.A),e.A=null)}function ut(e){return e.g?e.g.readyState:0}g.ba=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}};g.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),Mc(t)}};function Ni(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case go:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}g.Da=function(){return this.m};g.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function Uc(e){let t="";return Ss(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function $s(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=Uc(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):k(e,t,n))}function te(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function vo(e){this.za=0,this.l=[],this.h=new gn,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=te("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=te("baseRetryDelayMs",5e3,e),this.$a=te("retryDelaySeedMs",1e4,e),this.Ya=te("forwardChannelMaxRetries",2,e),this.ra=te("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new ao(e&&e.concurrentRequestLimit),this.Ca=new xc,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||e.Xb!==!1}g=vo.prototype;g.ma=8;g.G=1;function qs(e){if(wo(e),e.G==3){var t=e.V++,n=lt(e.F);k(n,"SID",e.J),k(n,"RID",t),k(n,"TYPE","terminate"),ke(e,n),t=new _e(e,e.h,t,void 0),t.K=2,t.v=wn(lt(n)),n=!1,E.navigator&&E.navigator.sendBeacon&&(n=E.navigator.sendBeacon(t.v.toString(),"")),!n&&E.Image&&(new Image().src=t.v,n=!0),n||(t.g=Ao(t.l,null),t.g.ea(t.v)),t.F=Date.now(),be(t)}_o(e)}g.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch{}};function In(e){e.g&&(Hs(e),e.g.cancel(),e.g=null)}function wo(e){In(e),e.u&&(E.clearTimeout(e.u),e.u=null),tn(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&E.clearTimeout(e.m),e.m=null)}function Un(e,t){e.l.push(new Nc(e.Za++,t)),e.G==3&&Sn(e)}function Sn(e){ho(e.i)||e.m||(e.m=!0,Ns(e.Ha,e),e.C=0)}function $c(e,t){return co(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.l=t.D.concat(e.l),!0):e.G==1||e.G==2||e.C>=(e.Xa?0:e.Ya)?!1:(e.m=Se($(e.Ha,e,t),Co(e,e.C)),e.C++,!0)}g.Ha=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new _e(this,this.h,e,void 0);let r=this.s;if(this.P&&(r?(r=xr(r),Or(r,this.P)):r=this.P),this.o===null&&(i.H=r),this.ja)t:{for(var t=0,n=0;n<this.l.length;n++){e:{var s=this.l[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break e}s=void 0}if(s===void 0)break;if(t+=s,4096<t){t=n;break t}if(t===4096||n===this.l.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=Eo(this,i,t),n=lt(this.F),k(n,"RID",e),k(n,"CVER",22),this.D&&k(n,"X-HTTP-Session-Id",this.D),ke(this,n),this.o&&r&&$s(n,this.o,r),Vs(this.i,i),this.Ra&&k(n,"TYPE","init"),this.ja?(k(n,"$req",t),k(n,"SID","null"),i.$=!0,rs(i,n,null)):rs(i,n,t),this.G=2}}else this.G==3&&(e?Ri(this,e):this.l.length==0||ho(this.i)||Ri(this))};function Ri(e,t){var n;t?n=t.m:n=e.V++;const s=lt(e.F);k(s,"SID",e.J),k(s,"RID",n),k(s,"AID",e.U),ke(e,s),e.o&&e.s&&$s(s,e.o,e.s),n=new _e(e,e.h,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=Eo(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Vs(e.i,n),rs(n,s,t)}function ke(e,t){e.j&&Ps({},function(n,s){k(t,s,n)})}function Eo(e,t,n){n=Math.min(e.l.length,n);var s=e.j?$(e.j.Oa,e.j,e):null;t:{var i=e.l;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let h=0;h<n;h++){let c=i[h].h;const u=i[h].g;if(c-=r,0>c)r=Math.max(0,i[h].h-100),a=!1;else try{Oc(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break t}}}return e=e.l.splice(0,n),t.D=e,s}function To(e){e.g||e.u||(e.Y=1,Ns(e.Ga,e),e.A=0)}function js(e){return e.g||e.u||3<=e.A?!1:(e.Y++,e.u=Se($(e.Ga,e),Co(e,e.A)),e.A++,!0)}g.Ga=function(){if(this.u=null,Io(this),this.$&&!(this.L||this.g==null||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=Se($(this.bb,this),e)}};g.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Q(10),In(this),Io(this))};function Hs(e){e.B!=null&&(E.clearTimeout(e.B),e.B=null)}function Io(e){e.g=new _e(e,e.h,"rpc",e.Y),e.o===null&&(e.g.H=e.s),e.g.O=0;var t=lt(e.oa);k(t,"RID","rpc"),k(t,"SID",e.J),k(t,"CI",e.N?"0":"1"),k(t,"AID",e.U),ke(e,t),k(t,"TYPE","xmlhttp"),e.o&&e.s&&$s(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=wn(lt(t)),n.s=null,n.U=!0,Zr(n,e)}g.ab=function(){this.v!=null&&(this.v=null,In(this),js(this),Q(19))};function tn(e){e.v!=null&&(E.clearTimeout(e.v),e.v=null)}function So(e,t){var n=null;if(e.g==t){tn(e),Hs(e),e.g=null;var s=2}else if(as(e.i,t))n=t.D,uo(e.i,t),s=1;else return;if(e.I=t.N,e.G!=0){if(t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;s=pn(),q(s,new Wr(s,n,t,i)),Sn(e)}else To(e);else if(i=t.o,i==3||i==0&&0<e.I||!(s==1&&$c(e,t)||s==2&&js(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:Et(e,5);break;case 4:Et(e,10);break;case 3:Et(e,6);break;default:Et(e,2)}}}function Co(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function Et(e,t){if(e.h.info("Error code "+t),t==2){var n=null;e.j&&(n=null);var s=$(e.jb,e);n||(n=new _t("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||Qe(n,"https"),wn(n)),Lc(n.toString(),s)}else Q(2);e.G=0,e.j&&e.j.va(t),_o(e),wo(e)}g.jb=function(e){e?(this.h.info("Successfully pinged google.com"),Q(2)):(this.h.info("Failed to ping google.com"),Q(1))};function _o(e){e.G=0,e.I=-1,e.j&&((lo(e.i).length!=0||e.l.length!=0)&&(e.i.i.length=0,Is(e.l),e.l.length=0),e.j.ua())}function bo(e,t,n){let s=Ic(n);if(s.i!="")t&&Je(s,t+"."+s.i),Ze(s,s.m);else{const i=E.location;s=Sc(i.protocol,t?t+"."+i.hostname:i.hostname,+i.port,n)}return e.aa&&Ss(e.aa,function(i,r){k(s,r,i)}),t=e.D,n=e.sa,t&&n&&k(s,t,n),k(s,"VER",e.ma),ke(e,s),s}function Ao(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new P(new Ae({ib:!0})):new P(e.qa),t.L=e.H,t}function Do(){}g=Do.prototype;g.xa=function(){};g.wa=function(){};g.va=function(){};g.ua=function(){};g.Oa=function(){};function en(){if(Vt&&!(10<=Number(tc)))throw Error("Environmental error: no available transport.")}en.prototype.g=function(e,t){return new et(e,t)};function et(e,t){V.call(this),this.g=new vo(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!ze(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ze(t)&&(this.g.D=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Gt(this)}X(et,V);et.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ns($(e.hb,e,t))),Q(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=bo(e,null,e.W),Sn(e)};et.prototype.close=function(){qs(this.g)};et.prototype.u=function(e){if(typeof e=="string"){var t={};t.__data__=e,Un(this.g,t)}else this.v?(t={},t.__data__=ks(e),Un(this.g,t)):Un(this.g,e)};et.prototype.M=function(){this.g.j=null,delete this.j,qs(this.g),delete this.g,et.Z.M.call(this)};function ko(e){Ls.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}X(ko,Ls);function No(){Ms.call(this),this.status=1}X(No,Ms);function Gt(e){this.g=e}X(Gt,Do);Gt.prototype.xa=function(){q(this.g,"a")};Gt.prototype.wa=function(e){q(this.g,new ko(e))};Gt.prototype.va=function(e){q(this.g,new No(e))};Gt.prototype.ua=function(){q(this.g,"b")};en.prototype.createWebChannel=en.prototype.g;et.prototype.send=et.prototype.u;et.prototype.open=et.prototype.m;et.prototype.close=et.prototype.close;mn.NO_ERROR=0;mn.TIMEOUT=8;mn.HTTP_ERROR=6;Yr.COMPLETE="complete";Qr.EventType=Ce;Ce.OPEN="a";Ce.CLOSE="b";Ce.ERROR="c";Ce.MESSAGE="d";V.prototype.listen=V.prototype.N;P.prototype.listenOnce=P.prototype.O;P.prototype.getLastError=P.prototype.La;P.prototype.getLastErrorCode=P.prototype.Da;P.prototype.getStatus=P.prototype.ba;P.prototype.getResponseJson=P.prototype.Qa;P.prototype.getResponseText=P.prototype.ga;P.prototype.send=P.prototype.ea;var qc=function(){return new en},jc=function(){return pn()},$n=mn,Hc=Yr,Kc=Nt,xi={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Xc=Ae,Ve=Qr,Gc=P;const Oi="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Z.UNAUTHENTICATED=new Z(null),Z.GOOGLE_CREDENTIALS=new Z("google-credentials-uid"),Z.FIRST_PARTY=new Z("first-party-uid"),Z.MOCK_USER=new Z("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt="9.6.11";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt=new Sr("@firebase/firestore");function Li(){return bt.logLevel}function m(e,...t){if(bt.logLevel<=b.DEBUG){const n=t.map(Ks);bt.debug(`Firestore (${zt}): ${e}`,...n)}}function ft(e,...t){if(bt.logLevel<=b.ERROR){const n=t.map(Ks);bt.error(`Firestore (${zt}): ${e}`,...n)}}function Mi(e,...t){if(bt.logLevel<=b.WARN){const n=t.map(Ks);bt.warn(`Firestore (${zt}): ${e}`,...n)}}function Ks(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(e="Unexpected state"){const t=`FIRESTORE (${zt}) INTERNAL ASSERTION FAILED: `+e;throw ft(t),new Error(t)}function M(e,t){e||I()}function _(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Ee{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zc{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Wc{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Z.UNAUTHENTICATED))}shutdown(){}}class Yc{constructor(t){this.t=t,this.currentUser=Z.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const i=h=>this.i!==s?(s=this.i,n(h)):Promise.resolve();let r=new Tt;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Tt,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const h=r;t.enqueueRetryable(async()=>{await h.promise,await i(this.currentUser)})},a=h=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(h=>a(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?a(h):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Tt)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(M(typeof s.accessToken=="string"),new zc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return M(t===null||typeof t=="string"),new Z(t)}}class Qc{constructor(t,n,s){this.type="FirstParty",this.user=Z.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=t.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),s&&this.headers.set("X-Goog-Iam-Authorization-Token",s)}}class Jc{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new Qc(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Z.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Zc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tu{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(t,n){const s=r=>{r.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.p;return this.p=r.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{t.enqueueRetryable(()=>s(r))};const i=r=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.g.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.g.getImmediate({optional:!0});r?i(r):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(M(typeof n.token=="string"),this.p=n.token,new Zc(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.I(s),this.T=s=>n.writeSequenceNumber(s))}I(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(e){const t=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xs.A=-1;class nu{static R(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let s="";for(;s.length<20;){const i=eu(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=t.charAt(i[r]%t.length))}return s}}function A(e,t){return e<t?-1:e>t?1:0}function ge(e,t,n){return e.length===t.length&&e.every((s,i)=>n(s,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new ot(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?A(this.nanoseconds,t.nanoseconds):A(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.timestamp=t}static fromTimestamp(t){return new S(t)}static min(){return new S(new ot(0,0))}static max(){return new S(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Cn(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function su(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,n,s){n===void 0?n=0:n>t.length&&I(),s===void 0?s=t.length-n:s>t.length-n&&I(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return pe.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof pe?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let i=0;i<s;i++){const r=t.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class x extends pe{construct(t,n,s){return new x(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new w(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new x(n)}static emptyPath(){return new x([])}}const iu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class it extends pe{construct(t,n,s){return new it(t,n,s)}static isValidIdentifier(t){return iu.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),it.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new it(["__name__"])}static fromServerFormat(t){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new w(f.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[i+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new w(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=h,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new w(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new it(n)}static emptyPath(){return new it([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(t){this.binaryString=t}static fromBase64String(t){const n=atob(t);return new H(n)}static fromUint8Array(t){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(t);return new H(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return A(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}H.EMPTY_BYTE_STRING=new H("");const ru=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gt(e){if(M(!!e),typeof e=="string"){let t=0;const n=ru.exec(e);if(M(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),t=Number(i)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:L(e.seconds),nanos:L(e.nanos)}}function L(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Bt(e){return typeof e=="string"?H.fromBase64String(e):H.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ro(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function xo(e){const t=e.mapValue.fields.__previous_value__;return Ro(t)?xo(t):t}function me(e){const t=gt(e.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(t,n,s,i,r,o,a,h){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=h}}class Ut{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ut("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ut&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){return e==null}function hs(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.path=t}static fromPath(t){return new v(x.fromString(t))}static fromName(t){return new v(x.fromString(t).popFirst(5))}static empty(){return new v(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&x.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return x.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new v(new x(t.slice()))}}function At(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ro(e)?4:au(e)?9:10:I()}function at(e,t){if(e===t)return!0;const n=At(e);if(n!==At(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return me(e).isEqual(me(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=gt(s.timestampValue),o=gt(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Bt(s.bytesValue).isEqual(Bt(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return L(s.geoPointValue.latitude)===L(i.geoPointValue.latitude)&&L(s.geoPointValue.longitude)===L(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return L(s.integerValue)===L(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=L(s.doubleValue),o=L(i.doubleValue);return r===o?hs(r)===hs(o):isNaN(r)&&isNaN(o)}return!1}(e,t);case 9:return ge(e.arrayValue.values||[],t.arrayValue.values||[],at);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(Pi(r)!==Pi(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!at(r[a],o[a])))return!1;return!0}(e,t);default:return I()}}function ye(e,t){return(e.values||[]).find(n=>at(n,t))!==void 0}function $t(e,t){if(e===t)return 0;const n=At(e),s=At(t);if(n!==s)return A(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return A(e.booleanValue,t.booleanValue);case 2:return function(i,r){const o=L(i.integerValue||i.doubleValue),a=L(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return Fi(e.timestampValue,t.timestampValue);case 4:return Fi(me(e),me(t));case 5:return A(e.stringValue,t.stringValue);case 6:return function(i,r){const o=Bt(i),a=Bt(r);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(i,r){const o=i.split("/"),a=r.split("/");for(let h=0;h<o.length&&h<a.length;h++){const c=A(o[h],a[h]);if(c!==0)return c}return A(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,r){const o=A(L(i.latitude),L(r.latitude));return o!==0?o:A(L(i.longitude),L(r.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,r){const o=i.values||[],a=r.values||[];for(let h=0;h<o.length&&h<a.length;++h){const c=$t(o[h],a[h]);if(c)return c}return A(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,r){const o=i.fields||{},a=Object.keys(o),h=r.fields||{},c=Object.keys(h);a.sort(),c.sort();for(let u=0;u<a.length&&u<c.length;++u){const l=A(a[u],c[u]);if(l!==0)return l;const p=$t(o[a[u]],h[c[u]]);if(p!==0)return p}return A(a.length,c.length)}(e.mapValue,t.mapValue);default:throw I()}}function Fi(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return A(e,t);const n=gt(e),s=gt(t),i=A(n.seconds,s.seconds);return i!==0?i:A(n.nanos,s.nanos)}function Lt(e){return cs(e)}function cs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const i=gt(s);return`time(${i.seconds},${i.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Bt(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,v.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=cs(o);return i+"]"}(e.arrayValue):"mapValue"in e?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const a of i)o?o=!1:r+=",",r+=`${a}:${cs(s.fields[a])}`;return r+"}"}(e.mapValue):I();var t,n}function us(e){return!!e&&"integerValue"in e}function Gs(e){return!!e&&"arrayValue"in e}function Vi(e){return!!e&&"nullValue"in e}function Bi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function qn(e){return!!e&&"mapValue"in e}function re(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Cn(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=re(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=re(e.arrayValue.values[n]);return t}return Object.assign({},e)}function au(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.value=t}static empty(){return new ct({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!qn(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=re(n)}setAll(t){let n=it.emptyPath(),s={},i=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const h=this.getFieldsMap(n);this.applyChanges(h,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=re(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(t){const n=this.field(t.popLast());qn(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return at(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let i=n.mapValue.fields[t.get(s)];qn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(t,n,s){Cn(n,(i,r)=>t[i]=r);for(const i of s)delete t[i]}clone(){return new ct(re(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n,s,i,r,o){this.key=t,this.documentType=n,this.version=s,this.readTime=i,this.data=r,this.documentState=o}static newInvalidDocument(t){return new G(t,0,S.min(),S.min(),ct.empty(),0)}static newFoundDocument(t,n,s){return new G(t,1,n,S.min(),s,0)}static newNoDocument(t,n){return new G(t,2,n,S.min(),ct.empty(),0)}static newUnknownDocument(t,n){return new G(t,3,n,S.min(),ct.empty(),2)}convertToFoundDocument(t,n){return this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ct.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ct.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof G&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new G(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}function hu(e,t){const n=e.toTimestamp().seconds,s=e.toTimestamp().nanoseconds+1,i=S.fromTimestamp(s===1e9?new ot(n+1,0):new ot(n,s));return new qt(i,v.empty(),t)}function cu(e){return new qt(e.readTime,e.key,-1)}class qt{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new qt(S.min(),v.empty(),-1)}static max(){return new qt(S.max(),v.empty(),-1)}}function uu(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=v.comparator(e.documentKey,t.documentKey),n!==0?n:A(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(t,n=null,s=[],i=[],r=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.P=null}}function Ui(e,t=null,n=[],s=[],i=null,r=null,o=null){return new lu(e,t,n,s,i,r,o)}function zs(e){const t=_(e);if(t.P===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>{return(i=s).field.canonicalString()+i.op.toString()+Lt(i.value);var i}).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Wt(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Lt(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Lt(s)).join(",")),t.P=n}return t.P}function du(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(n=>{return`${(s=n).field.canonicalString()} ${s.op} ${Lt(s.value)}`;var s}).join(", ")}]`),Wt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(n=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(n)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(n=>Lt(n)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(n=>Lt(n)).join(",")),`Target(${t})`}function Ws(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Eu(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],s=t.filters[i],n.op!==s.op||!n.field.isEqual(s.field)||!at(n.value,s.value))return!1;var n,s;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!qi(e.startAt,t.startAt)&&qi(e.endAt,t.endAt)}function ls(e){return v.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}class tt extends class{}{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.V(t,n,s):new fu(t,n,s):n==="array-contains"?new mu(t,s):n==="in"?new yu(t,s):n==="not-in"?new vu(t,s):n==="array-contains-any"?new wu(t,s):new tt(t,n,s)}static V(t,n,s){return n==="in"?new gu(t,s):new pu(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.v($t(n,this.value)):n!==null&&At(this.value)===At(n)&&this.v($t(n,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return I()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class fu extends tt{constructor(t,n,s){super(t,n,s),this.key=v.fromName(s.referenceValue)}matches(t){const n=v.comparator(t.key,this.key);return this.v(n)}}class gu extends tt{constructor(t,n){super(t,"in",n),this.keys=Oo("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class pu extends tt{constructor(t,n){super(t,"not-in",n),this.keys=Oo("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Oo(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>v.fromName(s.referenceValue))}class mu extends tt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Gs(n)&&ye(n.arrayValue,this.value)}}class yu extends tt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&ye(this.value.arrayValue,n)}}class vu extends tt{constructor(t,n){super(t,"not-in",n)}matches(t){if(ye(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!ye(this.value.arrayValue,n)}}class wu extends tt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Gs(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>ye(this.value.arrayValue,s))}}class nn{constructor(t,n){this.position=t,this.inclusive=n}}class oe{constructor(t,n="asc"){this.field=t,this.dir=n}}function Eu(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function $i(e,t,n){let s=0;for(let i=0;i<e.position.length;i++){const r=t[i],o=e.position[i];if(r.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),n.key):s=$t(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function qi(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!at(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,n=null,s=[],i=[],r=null,o="F",a=null,h=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=h,this.D=null,this.C=null,this.startAt,this.endAt}}function Tu(e,t,n,s,i,r,o,a){return new _n(e,t,n,s,i,r,o,a)}function Lo(e){return new _n(e)}function qe(e){return!Wt(e.limit)&&e.limitType==="F"}function sn(e){return!Wt(e.limit)&&e.limitType==="L"}function Iu(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Su(e){for(const t of e.filters)if(t.S())return t.field;return null}function Cu(e){return e.collectionGroup!==null}function ve(e){const t=_(e);if(t.D===null){t.D=[];const n=Su(t),s=Iu(t);if(n!==null&&s===null)n.isKeyField()||t.D.push(new oe(n)),t.D.push(new oe(it.keyField(),"asc"));else{let i=!1;for(const r of t.explicitOrderBy)t.D.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new oe(it.keyField(),r))}}}return t.D}function Dt(e){const t=_(e);if(!t.C)if(t.limitType==="F")t.C=Ui(t.path,t.collectionGroup,ve(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const r of ve(t)){const o=r.dir==="desc"?"asc":"desc";n.push(new oe(r.field,o))}const s=t.endAt?new nn(t.endAt.position,!t.endAt.inclusive):null,i=t.startAt?new nn(t.startAt.position,!t.startAt.inclusive):null;t.C=Ui(t.path,t.collectionGroup,n,t.filters,t.limit,s,i)}return t.C}function _u(e,t,n){return new _n(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function bn(e,t){return Ws(Dt(e),Dt(t))&&e.limitType===t.limitType}function Mo(e){return`${zs(Dt(e))}|lt:${e.limitType}`}function ds(e){return`Query(target=${du(Dt(e))}; limitType=${e.limitType})`}function Ys(e,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):v.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(e,t)&&function(n,s){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(i,r,o){const a=$i(i,r,o);return i.inclusive?a<=0:a<0}(n.startAt,ve(n),s)||n.endAt&&!function(i,r,o){const a=$i(i,r,o);return i.inclusive?a>=0:a>0}(n.endAt,ve(n),s))}(e,t)}function bu(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Po(e){return(t,n)=>{let s=!1;for(const i of ve(e)){const r=Au(i,t,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Au(e,t,n){const s=e.field.isKeyField()?v.comparator(t.key,n.key):function(i,r,o){const a=r.data.field(i),h=o.data.field(i);return a!==null&&h!==null?$t(a,h):I()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(e,t){if(e.N){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hs(t)?"-0":t}}function ku(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this._=void 0}}function Nu(e,t,n){return e instanceof fs?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,t):e instanceof rn?Fo(e,t):e instanceof on?Vo(e,t):function(s,i){const r=xu(s,i),o=ji(r)+ji(s.k);return us(r)&&us(s.k)?ku(o):Du(s.M,o)}(e,t)}function Ru(e,t,n){return e instanceof rn?Fo(e,t):e instanceof on?Vo(e,t):n}function xu(e,t){return e instanceof gs?us(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class fs extends An{}class rn extends An{constructor(t){super(),this.elements=t}}function Fo(e,t){const n=Bo(t);for(const s of e.elements)n.some(i=>at(i,s))||n.push(s);return{arrayValue:{values:n}}}class on extends An{constructor(t){super(),this.elements=t}}function Vo(e,t){let n=Bo(t);for(const s of e.elements)n=n.filter(i=>!at(i,s));return{arrayValue:{values:n}}}class gs extends An{constructor(t,n){super(),this.M=t,this.k=n}}function ji(e){return L(e.integerValue||e.doubleValue)}function Bo(e){return Gs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function Ou(e,t){return e.field.isEqual(t.field)&&function(n,s){return n instanceof rn&&s instanceof rn||n instanceof on&&s instanceof on?ge(n.elements,s.elements,at):n instanceof gs&&s instanceof gs?at(n.k,s.k):n instanceof fs&&s instanceof fs}(e.transform,t.transform)}function je(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class Uo{}function Lu(e,t,n){e instanceof $o?function(s,i,r){const o=s.value.clone(),a=Xi(s.fieldTransforms,i,r.transformResults);o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(e,t,n):e instanceof qo?function(s,i,r){if(!je(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=Xi(s.fieldTransforms,i,r.transformResults),a=i.data;a.setAll(jo(s)),a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(e,t,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,t,n)}function ps(e,t,n){e instanceof $o?function(s,i,r){if(!je(s.precondition,i))return;const o=s.value.clone(),a=Gi(s.fieldTransforms,r,i);o.setAll(a),i.convertToFoundDocument(Ki(i),o).setHasLocalMutations()}(e,t,n):e instanceof qo?function(s,i,r){if(!je(s.precondition,i))return;const o=Gi(s.fieldTransforms,r,i),a=i.data;a.setAll(jo(s)),a.setAll(o),i.convertToFoundDocument(Ki(i),a).setHasLocalMutations()}(e,t,n):function(s,i){je(s.precondition,i)&&i.convertToNoDocument(S.min())}(e,t)}function Hi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&ge(n,s,(i,r)=>Ou(i,r))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function Ki(e){return e.isFoundDocument()?e.version:S.min()}class $o extends Uo{constructor(t,n,s,i=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}}class qo extends Uo{constructor(t,n,s,i,r=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}}function jo(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Xi(e,t,n){const s=new Map;M(e.length===n.length);for(let i=0;i<n.length;i++){const r=e[i],o=r.transform,a=t.data.field(r.field);s.set(r.field,Ru(o,a,n[i]))}return s}function Gi(e,t,n){const s=new Map;for(const i of e){const r=i.transform,o=n.data.field(i.field);s.set(i.field,Nu(r,o,t))}return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var O,C;function Ho(e){if(e===void 0)return ft("GRPC error has no .code"),f.UNKNOWN;switch(e){case O.OK:return f.OK;case O.CANCELLED:return f.CANCELLED;case O.UNKNOWN:return f.UNKNOWN;case O.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case O.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case O.INTERNAL:return f.INTERNAL;case O.UNAVAILABLE:return f.UNAVAILABLE;case O.UNAUTHENTICATED:return f.UNAUTHENTICATED;case O.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case O.NOT_FOUND:return f.NOT_FOUND;case O.ALREADY_EXISTS:return f.ALREADY_EXISTS;case O.PERMISSION_DENIED:return f.PERMISSION_DENIED;case O.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case O.ABORTED:return f.ABORTED;case O.OUT_OF_RANGE:return f.OUT_OF_RANGE;case O.UNIMPLEMENTED:return f.UNIMPLEMENTED;case O.DATA_LOSS:return f.DATA_LOSS;default:return I()}}(C=O||(O={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,t))return r}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),i=this.inner[s];if(i===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],t))return void(i[r]=[t,n]);i.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(t){Cn(this.inner,(n,s)=>{for(const[i,r]of s)t(i,r)})}isEmpty(){return su(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t,n){this.comparator=t,this.root=n||U.EMPTY}insert(t,n){return new K(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,U.BLACK,null,null))}remove(t){return new K(this.comparator,this.root.remove(t,this.comparator).copy(null,null,U.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(t,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Be(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Be(this.root,t,this.comparator,!1)}getReverseIterator(){return new Be(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Be(this.root,t,this.comparator,!0)}}class Be{constructor(t,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!t.isEmpty();)if(r=n?s(t.key,n):1,n&&i&&(r*=-1),r<0)t=this.isReverse?t.left:t.right;else{if(r===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class U{constructor(t,n,s,i,r){this.key=t,this.value=n,this.color=s!=null?s:U.RED,this.left=i!=null?i:U.EMPTY,this.right=r!=null?r:U.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,i,r){return new U(t!=null?t:this.key,n!=null?n:this.value,s!=null?s:this.color,i!=null?i:this.left,r!=null?r:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let i=this;const r=s(t,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(t,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(t,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return U.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,i=this;if(n(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(t,i.key)===0){if(i.right.isEmpty())return U.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,U.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,U.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw I();const t=this.left.check();if(t!==this.right.check())throw I();return t+(this.isRed()?0:1)}}U.EMPTY=null,U.RED=!0,U.BLACK=!1;U.EMPTY=new class{constructor(){this.size=0}get key(){throw I()}get value(){throw I()}get color(){throw I()}get left(){throw I()}get right(){throw I()}copy(e,t,n,s,i){return this}insert(e,t,n){return new U(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(t){this.comparator=t,this.data=new K(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,t[1])>=0)return;n(i.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new zi(this.data.getIterator())}getIteratorFrom(t){return new zi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof j)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new j(this.comparator);return n.data=t,n}}class zi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=new K(v.comparator);function kt(){return Pu}const Fu=new K(v.comparator);function ms(){return Fu}function jn(){return new Yt(e=>e.toString(),(e,t)=>e.isEqual(t))}new K(v.comparator);const Vu=new j(v.comparator);function N(...e){let t=Vu;for(const n of e)t=t.add(n);return t}const Bu=new j(A);function Ko(){return Bu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn{constructor(t,n,s,i,r){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(t,n){const s=new Map;return s.set(t,Ne.createSynthesizedTargetChangeForCurrentChange(t,n)),new Dn(S.min(),s,Ko(),kt(),N())}}class Ne{constructor(t,n,s,i,r){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(t,n){return new Ne(H.EMPTY_BYTE_STRING,n,N(),N(),N())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t,n,s,i){this.O=t,this.removedTargetIds=n,this.key=s,this.F=i}}class Xo{constructor(t,n){this.targetId=t,this.$=n}}class Go{constructor(t,n,s=H.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=i}}class Wi{constructor(){this.B=0,this.L=Qi(),this.U=H.EMPTY_BYTE_STRING,this.q=!1,this.K=!0}get current(){return this.q}get resumeToken(){return this.U}get G(){return this.B!==0}get j(){return this.K}W(t){t.approximateByteSize()>0&&(this.K=!0,this.U=t)}H(){let t=N(),n=N(),s=N();return this.L.forEach((i,r)=>{switch(r){case 0:t=t.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:I()}}),new Ne(this.U,this.q,t,n,s)}J(){this.K=!1,this.L=Qi()}Y(t,n){this.K=!0,this.L=this.L.insert(t,n)}X(t){this.K=!0,this.L=this.L.remove(t)}Z(){this.B+=1}tt(){this.B-=1}et(){this.K=!0,this.q=!0}}class Uu{constructor(t){this.nt=t,this.st=new Map,this.it=kt(),this.rt=Yi(),this.ot=new j(A)}ut(t){for(const n of t.O)t.F&&t.F.isFoundDocument()?this.at(n,t.F):this.ct(n,t.key,t.F);for(const n of t.removedTargetIds)this.ct(n,t.key,t.F)}ht(t){this.forEachTarget(t,n=>{const s=this.lt(n);switch(t.state){case 0:this.ft(n)&&s.W(t.resumeToken);break;case 1:s.tt(),s.G||s.J(),s.W(t.resumeToken);break;case 2:s.tt(),s.G||this.removeTarget(n);break;case 3:this.ft(n)&&(s.et(),s.W(t.resumeToken));break;case 4:this.ft(n)&&(this.dt(n),s.W(t.resumeToken));break;default:I()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.st.forEach((s,i)=>{this.ft(i)&&n(i)})}_t(t){const n=t.targetId,s=t.$.count,i=this.wt(n);if(i){const r=i.target;if(ls(r))if(s===0){const o=new v(r.path);this.ct(n,o,G.newNoDocument(o,S.min()))}else M(s===1);else this.gt(n)!==s&&(this.dt(n),this.ot=this.ot.add(n))}}yt(t){const n=new Map;this.st.forEach((r,o)=>{const a=this.wt(o);if(a){if(r.current&&ls(a.target)){const h=new v(a.target.path);this.it.get(h)!==null||this.It(o,h)||this.ct(o,h,G.newNoDocument(h,t))}r.j&&(n.set(o,r.H()),r.J())}});let s=N();this.rt.forEach((r,o)=>{let a=!0;o.forEachWhile(h=>{const c=this.wt(h);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(r))}),this.it.forEach((r,o)=>o.setReadTime(t));const i=new Dn(t,n,this.ot,this.it,s);return this.it=kt(),this.rt=Yi(),this.ot=new j(A),i}at(t,n){if(!this.ft(t))return;const s=this.It(t,n.key)?2:0;this.lt(t).Y(n.key,s),this.it=this.it.insert(n.key,n),this.rt=this.rt.insert(n.key,this.Tt(n.key).add(t))}ct(t,n,s){if(!this.ft(t))return;const i=this.lt(t);this.It(t,n)?i.Y(n,1):i.X(n),this.rt=this.rt.insert(n,this.Tt(n).delete(t)),s&&(this.it=this.it.insert(n,s))}removeTarget(t){this.st.delete(t)}gt(t){const n=this.lt(t).H();return this.nt.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Z(t){this.lt(t).Z()}lt(t){let n=this.st.get(t);return n||(n=new Wi,this.st.set(t,n)),n}Tt(t){let n=this.rt.get(t);return n||(n=new j(A),this.rt=this.rt.insert(t,n)),n}ft(t){const n=this.wt(t)!==null;return n||m("WatchChangeAggregator","Detected inactive target",t),n}wt(t){const n=this.st.get(t);return n&&n.G?null:this.nt.Et(t)}dt(t){this.st.set(t,new Wi),this.nt.getRemoteKeysForTarget(t).forEach(n=>{this.ct(t,n,null)})}It(t,n){return this.nt.getRemoteKeysForTarget(t).has(n)}}function Yi(){return new K(v.comparator)}function Qi(){return new K(v.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),qu=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class ju{constructor(t,n){this.databaseId=t,this.N=n}}function Hu(e,t){return e.N?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ku(e,t){return e.N?t.toBase64():t.toUint8Array()}function we(e){return M(!!e),S.fromTimestamp(function(t){const n=gt(t);return new ot(n.seconds,n.nanos)}(e))}function Xu(e,t){return function(n){return new x(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function zo(e){const t=x.fromString(e);return M(Qo(t)),t}function Hn(e,t){const n=zo(t);if(n.get(1)!==e.databaseId.projectId)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new w(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new v(Wo(n))}function ys(e,t){return Xu(e.databaseId,t)}function Gu(e){const t=zo(e);return t.length===4?x.emptyPath():Wo(t)}function Ji(e){return new x(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Wo(e){return M(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function zu(e,t){let n;if("targetChange"in t){t.targetChange;const s=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:I()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],r=function(h,c){return h.N?(M(c===void 0||typeof c=="string"),H.fromBase64String(c||"")):(M(c===void 0||c instanceof Uint8Array),H.fromUint8Array(c||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(h){const c=h.code===void 0?f.UNKNOWN:Ho(h.code);return new w(c,h.message||"")}(o);n=new Go(s,i,r,a||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const i=Hn(e,s.document.name),r=we(s.document.updateTime),o=new ct({mapValue:{fields:s.document.fields}}),a=G.newFoundDocument(i,r,o),h=s.targetIds||[],c=s.removedTargetIds||[];n=new He(h,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const i=Hn(e,s.document),r=s.readTime?we(s.readTime):S.min(),o=G.newNoDocument(i,r),a=s.removedTargetIds||[];n=new He([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const i=Hn(e,s.document),r=s.removedTargetIds||[];n=new He([],r,i,null)}else{if(!("filter"in t))return I();{t.filter;const s=t.filter;s.targetId;const i=s.count||0,r=new Mu(i),o=s.targetId;n=new Xo(o,r)}}return n}function Wu(e,t){return{documents:[ys(e,t.path)]}}function Yu(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=ys(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ys(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(h){if(h.length===0)return;const c=h.map(u=>function(l){if(l.op==="=="){if(Bi(l.value))return{unaryFilter:{field:Rt(l.field),op:"IS_NAN"}};if(Vi(l.value))return{unaryFilter:{field:Rt(l.field),op:"IS_NULL"}}}else if(l.op==="!="){if(Bi(l.value))return{unaryFilter:{field:Rt(l.field),op:"IS_NOT_NAN"}};if(Vi(l.value))return{unaryFilter:{field:Rt(l.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Rt(l.field),op:tl(l.op),value:l.value}}}(u));return c.length===1?c[0]:{compositeFilter:{op:"AND",filters:c}}}(t.filters);i&&(n.structuredQuery.where=i);const r=function(h){if(h.length!==0)return h.map(c=>function(u){return{field:Rt(u.field),direction:Zu(u.dir)}}(c))}(t.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(h,c){return h.N||Wt(c)?c:{value:c}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(t.endAt)),n}function Qu(e){let t=Gu(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){M(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:t=t.child(u.collectionId)}let r=[];n.where&&(r=Yo(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(l){return new oe(Ot(l.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(l.direction))}(u)));let a=null;n.limit&&(a=function(u){let l;return l=typeof u=="object"?u.value:u,Wt(l)?null:l}(n.limit));let h=null;n.startAt&&(h=function(u){const l=!!u.before,p=u.values||[];return new nn(p,l)}(n.startAt));let c=null;return n.endAt&&(c=function(u){const l=!u.before,p=u.values||[];return new nn(p,l)}(n.endAt)),Tu(t,i,o,r,a,"F",h,c)}function Ju(e,t){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return I()}}(0,t.purpose);return n==null?null:{"goog-listen-tags":n}}function Yo(e){return e?e.unaryFilter!==void 0?[nl(e)]:e.fieldFilter!==void 0?[el(e)]:e.compositeFilter!==void 0?e.compositeFilter.filters.map(t=>Yo(t)).reduce((t,n)=>t.concat(n)):I():[]}function Zu(e){return $u[e]}function tl(e){return qu[e]}function Rt(e){return{fieldPath:e.canonicalString()}}function Ot(e){return it.fromServerFormat(e.fieldPath)}function el(e){return tt.create(Ot(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return I()}}(e.fieldFilter.op),e.fieldFilter.value)}function nl(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ot(e.unaryFilter.field);return tt.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ot(e.unaryFilter.field);return tt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ot(e.unaryFilter.field);return tt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ot(e.unaryFilter.field);return tt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return I()}}function Qo(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class il{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&I(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new d((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(t,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof d?n:d.resolve(n)}catch(n){return d.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):d.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):d.reject(n)}static resolve(t){return new d((n,s)=>{n(t)})}static reject(t){return new d((n,s)=>{s(t)})}static waitFor(t){return new d((n,s)=>{let i=0,r=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},h=>s(h))}),o=!0,r===i&&n()})}static or(t){let n=d.resolve(!1);for(const s of t)n=n.next(i=>i?d.resolve(i):s());return n}static forEach(t,n){const s=[];return t.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}}function Re(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(t,n,s,i){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(t.key)&&Lu(r,t,s[i])}}applyToLocalView(t){for(const n of this.baseMutations)n.key.isEqual(t.key)&&ps(n,t,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(t.key)&&ps(n,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(n=>{const s=t.get(n.key),i=s;this.applyToLocalView(i),s.isValidDocument()||i.convertToNoDocument(S.min())})}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),N())}isEqual(t){return this.batchId===t.batchId&&ge(this.mutations,t.mutations,(n,s)=>Hi(n,s))&&ge(this.baseMutations,t.baseMutations,(n,s)=>Hi(n,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t,n,s,i,r=S.min(),o=S.min(),a=H.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new It(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t){this.Jt=t}}function hl(e){const t=Qu({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?_u(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(){this.qe=new ul}addToCollectionParentIndex(t,n){return this.qe.add(n),d.resolve()}getCollectionParents(t,n){return d.resolve(this.qe.getEntries(n))}addFieldIndex(t,n){return d.resolve()}deleteFieldIndex(t,n){return d.resolve()}getDocumentsMatchingTarget(t,n){return d.resolve(null)}getFieldIndex(t,n){return d.resolve(null)}getFieldIndexes(t,n){return d.resolve([])}getNextCollectionGroupToUpdate(t){return d.resolve(null)}updateCollectionGroup(t,n,s){return d.resolve()}updateIndexEntries(t,n){return d.resolve()}}class ul{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n]||new j(x.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(t){const n=t.lastSegment(),s=t.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(t){return(this.index[t]||new j(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(t){this.mn=t}next(){return this.mn+=2,this.mn}static gn(){return new jt(0)}static yn(){return new jt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qs(e){if(e.code!==f.FAILED_PRECONDITION||e.message!==sl)throw e;m("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(){this.changes=new Yt(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,G.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?d.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(t,n,s){this.ds=t,this.Bs=n,this.indexManager=s}Ls(t,n){return this.Bs.getAllMutationBatchesAffectingDocumentKey(t,n).next(s=>this.Us(t,n,s))}Us(t,n,s){return this.ds.getEntry(t,n).next(i=>{for(const r of s)r.applyToLocalView(i);return i})}qs(t,n){t.forEach((s,i)=>{for(const r of n)r.applyToLocalView(i)})}Ks(t,n){return this.ds.getEntries(t,n).next(s=>this.Gs(t,s).next(()=>s))}Gs(t,n){return this.Bs.getAllMutationBatchesAffectingDocumentKeys(t,n).next(s=>this.qs(n,s))}Qs(t,n,s){return function(i){return v.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.js(t,n.path):Cu(n)?this.Ws(t,n,s):this.zs(t,n,s)}js(t,n){return this.Ls(t,new v(n)).next(s=>{let i=ms();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}Ws(t,n,s){const i=n.collectionGroup;let r=ms();return this.indexManager.getCollectionParents(t,i).next(o=>d.forEach(o,a=>{const h=function(c,u){return new _n(u,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.zs(t,h,s).next(c=>{c.forEach((u,l)=>{r=r.insert(u,l)})})}).next(()=>r))}zs(t,n,s){let i;return this.ds.getAllFromCollection(t,n.path,s).next(r=>(i=r,this.Bs.getAllMutationBatchesAffectingQuery(t,n))).next(r=>{for(const o of r)for(const a of o.mutations){const h=a.key;let c=i.get(h);c==null&&(c=G.newInvalidDocument(h),i=i.insert(h,c)),ps(a,c,o.localWriteTime),c.isFoundDocument()||(i=i.remove(h))}}).next(()=>(i.forEach((r,o)=>{Ys(n,o)||(i=i.remove(r))}),i))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,n,s,i){this.targetId=t,this.fromCache=n,this.Hs=s,this.Js=i}static Ys(t,n){let s=N(),i=N();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Js(t,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{Xs(t){this.Zs=t}Qs(t,n,s,i){return function(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}(n)||s.isEqual(S.min())?this.ti(t,n):this.Zs.Ks(t,i).next(r=>{const o=this.ei(n,r);return(qe(n)||sn(n))&&this.ni(n.limitType,o,i,s)?this.ti(t,n):(Li()<=b.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ds(n)),this.Zs.Qs(t,n,hu(s,-1)).next(a=>(o.forEach(h=>{a=a.insert(h.key,h)}),a)))})}ei(t,n){let s=new j(Po(t));return n.forEach((i,r)=>{Ys(t,r)&&(s=s.add(r))}),s}ni(t,n,s,i){if(s.size!==n.size)return!0;const r=t==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}ti(t,n){return Li()<=b.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",ds(n)),this.Zs.Qs(t,n,qt.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t,n,s,i){this.persistence=t,this.si=n,this.M=i,this.ii=new K(A),this.ri=new Yt(r=>zs(r),Ws),this.oi=new Map,this.ui=t.getRemoteDocumentCache(),this.fs=t.getTargetCache(),this._s=t.getBundleCache(),this.ai(s)}ai(t){this.indexManager=this.persistence.getIndexManager(t),this.Bs=this.persistence.getMutationQueue(t,this.indexManager),this.ci=new dl(this.ui,this.Bs,this.indexManager),this.ui.setIndexManager(this.indexManager),this.si.Xs(this.ci)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ii))}}function pl(e,t,n,s){return new gl(e,t,n,s)}async function Jo(e,t){const n=_(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.Bs.getAllMutationBatches(s).next(r=>(i=r,n.ai(t),n.Bs.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let h=N();for(const c of i){o.push(c.batchId);for(const u of c.mutations)h=h.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)h=h.add(u.key)}return n.ci.Ks(s,h).next(c=>({hi:c,removedBatchIds:o,addedBatchIds:a}))})})}function Zo(e){const t=_(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.fs.getLastRemoteSnapshotVersion(n))}function ml(e,t){const n=_(e),s=t.snapshotVersion;let i=n.ii;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ui.newChangeBuffer({trackRemovals:!0});i=n.ii;const a=[];t.targetChanges.forEach((c,u)=>{const l=i.get(u);if(!l)return;a.push(n.fs.removeMatchingKeys(r,c.removedDocuments,u).next(()=>n.fs.addMatchingKeys(r,c.addedDocuments,u)));let p=l.withSequenceNumber(r.currentSequenceNumber);t.targetMismatches.has(u)?p=p.withResumeToken(H.EMPTY_BYTE_STRING,S.min()).withLastLimboFreeSnapshotVersion(S.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,s)),i=i.insert(u,p),function(y,T,R){return y.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(l,p,c)&&a.push(n.fs.updateTargetData(r,p))});let h=kt();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,c))}),a.push(yl(r,o,t.documentUpdates).next(c=>{h=c})),!s.isEqual(S.min())){const c=n.fs.getLastRemoteSnapshotVersion(r).next(u=>n.fs.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(c)}return d.waitFor(a).next(()=>o.apply(r)).next(()=>n.ci.Gs(r,h)).next(()=>h)}).then(r=>(n.ii=i,r))}function yl(e,t,n){let s=N();return n.forEach(i=>s=s.add(i)),t.getEntries(e,s).next(i=>{let r=kt();return n.forEach((o,a)=>{const h=i.get(o);a.isNoDocument()&&a.version.isEqual(S.min())?(t.removeEntry(o,a.readTime),r=r.insert(o,a)):!h.isValidDocument()||a.version.compareTo(h.version)>0||a.version.compareTo(h.version)===0&&h.hasPendingWrites?(t.addEntry(a),r=r.insert(o,a)):m("LocalStore","Ignoring outdated watch update for ",o,". Current version:",h.version," Watch version:",a.version)}),r})}function vl(e,t){const n=_(e);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.fs.getTargetData(s,t).next(r=>r?(i=r,d.resolve(i)):n.fs.allocateTargetId(s).next(o=>(i=new It(t,o,0,s.currentSequenceNumber),n.fs.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ii.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ii=n.ii.insert(s.targetId,s),n.ri.set(t,s.targetId)),s})}async function vs(e,t,n){const s=_(e),i=s.ii.get(t),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Re(o))throw o;m("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.ii=s.ii.remove(t),s.ri.delete(i.target)}function Zi(e,t,n){const s=_(e);let i=S.min(),r=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,h,c){const u=_(a),l=u.ri.get(c);return l!==void 0?d.resolve(u.ii.get(l)):u.fs.getTargetData(h,c)}(s,o,Dt(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.fs.getMatchingKeysForTargetId(o,a.targetId).next(h=>{r=h})}).next(()=>s.si.Qs(o,t,n?i:S.min(),n?r:N())).next(a=>(wl(s,bu(t),a),{documents:a,li:r})))}function wl(e,t,n){let s=S.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),e.oi.set(t,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t){this.M=t,this.wi=new Map,this.mi=new Map}getBundleMetadata(t,n){return d.resolve(this.wi.get(n))}saveBundleMetadata(t,n){var s;return this.wi.set(n.id,{id:(s=n).id,version:s.version,createTime:we(s.createTime)}),d.resolve()}getNamedQuery(t,n){return d.resolve(this.mi.get(n))}saveNamedQuery(t,n){return this.mi.set(n.name,function(s){return{name:s.name,query:hl(s.bundledQuery),readTime:we(s.readTime)}}(n)),d.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.overlays=new K(v.comparator),this.gi=new Map}getOverlay(t,n){return d.resolve(this.overlays.get(n))}saveOverlays(t,n,s){return s.forEach((i,r)=>{this.Xt(t,n,r)}),d.resolve()}removeOverlaysForBatchId(t,n,s){const i=this.gi.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.gi.delete(s)),d.resolve()}getOverlaysForCollection(t,n,s){const i=jn(),r=n.length+1,o=new v(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const h=a.getNext().value,c=h.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&h.largestBatchId>s&&i.set(h.getKey(),h)}return d.resolve(i)}getOverlaysForCollectionGroup(t,n,s,i){let r=new K((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=jn(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=jn(),h=r.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return d.resolve(a)}Xt(t,n,s){if(s===null)return;const i=this.overlays.get(s.key);if(i!==null){const o=this.gi.get(i.largestBatchId).delete(s.key);this.gi.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new ol(n,s));let r=this.gi.get(n);r===void 0&&(r=N(),this.gi.set(n,r)),this.gi.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(){this.yi=new j(F.pi),this.Ii=new j(F.Ti)}isEmpty(){return this.yi.isEmpty()}addReference(t,n){const s=new F(t,n);this.yi=this.yi.add(s),this.Ii=this.Ii.add(s)}Ei(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.Ai(new F(t,n))}Ri(t,n){t.forEach(s=>this.removeReference(s,n))}Pi(t){const n=new v(new x([])),s=new F(n,t),i=new F(n,t+1),r=[];return this.Ii.forEachInRange([s,i],o=>{this.Ai(o),r.push(o.key)}),r}bi(){this.yi.forEach(t=>this.Ai(t))}Ai(t){this.yi=this.yi.delete(t),this.Ii=this.Ii.delete(t)}Vi(t){const n=new v(new x([])),s=new F(n,t),i=new F(n,t+1);let r=N();return this.Ii.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(t){const n=new F(t,0),s=this.yi.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class F{constructor(t,n){this.key=t,this.vi=n}static pi(t,n){return v.comparator(t.key,n.key)||A(t.vi,n.vi)}static Ti(t,n){return A(t.vi,n.vi)||v.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.Bs=[],this.Si=1,this.Di=new j(F.pi)}checkEmpty(t){return d.resolve(this.Bs.length===0)}addMutationBatch(t,n,s,i){const r=this.Si;this.Si++,this.Bs.length>0&&this.Bs[this.Bs.length-1];const o=new rl(r,n,s,i);this.Bs.push(o);for(const a of i)this.Di=this.Di.add(new F(a.key,r)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return d.resolve(o)}lookupMutationBatch(t,n){return d.resolve(this.Ci(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,i=this.xi(s),r=i<0?0:i;return d.resolve(this.Bs.length>r?this.Bs[r]:null)}getHighestUnacknowledgedBatchId(){return d.resolve(this.Bs.length===0?-1:this.Si-1)}getAllMutationBatches(t){return d.resolve(this.Bs.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new F(n,0),i=new F(n,Number.POSITIVE_INFINITY),r=[];return this.Di.forEachInRange([s,i],o=>{const a=this.Ci(o.vi);r.push(a)}),d.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new j(A);return n.forEach(i=>{const r=new F(i,0),o=new F(i,Number.POSITIVE_INFINITY);this.Di.forEachInRange([r,o],a=>{s=s.add(a.vi)})}),d.resolve(this.Ni(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,i=s.length+1;let r=s;v.isDocumentKey(r)||(r=r.child(""));const o=new F(new v(r),0);let a=new j(A);return this.Di.forEachWhile(h=>{const c=h.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(h.vi)),!0)},o),d.resolve(this.Ni(a))}Ni(t){const n=[];return t.forEach(s=>{const i=this.Ci(s);i!==null&&n.push(i)}),n}removeMutationBatch(t,n){M(this.ki(n.batchId,"removed")===0),this.Bs.shift();let s=this.Di;return d.forEach(n.mutations,i=>{const r=new F(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.Di=s})}_n(t){}containsKey(t,n){const s=new F(n,0),i=this.Di.firstAfterOrEqual(s);return d.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(t){return this.Bs.length,d.resolve()}ki(t,n){return this.xi(t)}xi(t){return this.Bs.length===0?0:t-this.Bs[0].batchId}Ci(t){const n=this.xi(t);return n<0||n>=this.Bs.length?null:this.Bs[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(t){this.Mi=t,this.docs=new K(v.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Mi(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return d.resolve(s?s.document.mutableCopy():G.newInvalidDocument(n))}getEntries(t,n){let s=kt();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():G.newInvalidDocument(i))}),d.resolve(s)}getAllFromCollection(t,n,s){let i=kt();const r=new v(n.child("")),o=this.docs.getIteratorFrom(r);for(;o.hasNext();){const{key:a,value:{document:h}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||uu(cu(h),s)<=0||(i=i.insert(h.key,h.mutableCopy()))}return d.resolve(i)}getAllFromCollectionGroup(t,n,s,i){I()}Oi(t,n){return d.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new Cl(this)}getSize(t){return d.resolve(this.size)}}class Cl extends ll{constructor(t){super(),this.Kn=t}applyChanges(t){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Kn.addEntry(t,i)):this.Kn.removeEntry(s)}),d.waitFor(n)}getFromCache(t,n){return this.Kn.getEntry(t,n)}getAllFromCache(t,n){return this.Kn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(t){this.persistence=t,this.Fi=new Yt(n=>zs(n),Ws),this.lastRemoteSnapshotVersion=S.min(),this.highestTargetId=0,this.$i=0,this.Bi=new Zs,this.targetCount=0,this.Li=jt.gn()}forEachTarget(t,n){return this.Fi.forEach((s,i)=>n(i)),d.resolve()}getLastRemoteSnapshotVersion(t){return d.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return d.resolve(this.$i)}allocateTargetId(t){return this.highestTargetId=this.Li.next(),d.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$i&&(this.$i=n),d.resolve()}Tn(t){this.Fi.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Li=new jt(n),this.highestTargetId=n),t.sequenceNumber>this.$i&&(this.$i=t.sequenceNumber)}addTargetData(t,n){return this.Tn(n),this.targetCount+=1,d.resolve()}updateTargetData(t,n){return this.Tn(n),d.resolve()}removeTargetData(t,n){return this.Fi.delete(n.target),this.Bi.Pi(n.targetId),this.targetCount-=1,d.resolve()}removeTargets(t,n,s){let i=0;const r=[];return this.Fi.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fi.delete(o),r.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),d.waitFor(r).next(()=>i)}getTargetCount(t){return d.resolve(this.targetCount)}getTargetData(t,n){const s=this.Fi.get(n)||null;return d.resolve(s)}addMatchingKeys(t,n,s){return this.Bi.Ei(n,s),d.resolve()}removeMatchingKeys(t,n,s){this.Bi.Ri(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(t,o))}),d.waitFor(r)}removeMatchingKeysForTargetId(t,n){return this.Bi.Pi(n),d.resolve()}getMatchingKeysForTargetId(t,n){const s=this.Bi.Vi(n);return d.resolve(s)}containsKey(t,n){return d.resolve(this.Bi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t,n){this.Ui={},this.overlays={},this.es=new Xs(0),this.ns=!1,this.ns=!0,this.referenceDelegate=t(this),this.fs=new _l(this),this.indexManager=new cl,this.ds=function(s){return new Sl(s)}(s=>this.referenceDelegate.qi(s)),this.M=new al(n),this._s=new El(this.M)}start(){return Promise.resolve()}shutdown(){return this.ns=!1,Promise.resolve()}get started(){return this.ns}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new Tl,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ui[t.toKey()];return s||(s=new Il(n,this.referenceDelegate),this.Ui[t.toKey()]=s),s}getTargetCache(){return this.fs}getRemoteDocumentCache(){return this.ds}getBundleCache(){return this._s}runTransaction(t,n,s){m("MemoryPersistence","Starting transaction:",t);const i=new Al(this.es.next());return this.referenceDelegate.Ki(),s(i).next(r=>this.referenceDelegate.Gi(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Qi(t,n){return d.or(Object.values(this.Ui).map(s=>()=>s.containsKey(t,n)))}}class Al extends il{constructor(t){super(),this.currentSequenceNumber=t}}class ti{constructor(t){this.persistence=t,this.ji=new Zs,this.Wi=null}static zi(t){return new ti(t)}get Hi(){if(this.Wi)return this.Wi;throw I()}addReference(t,n,s){return this.ji.addReference(s,n),this.Hi.delete(s.toString()),d.resolve()}removeReference(t,n,s){return this.ji.removeReference(s,n),this.Hi.add(s.toString()),d.resolve()}markPotentiallyOrphaned(t,n){return this.Hi.add(n.toString()),d.resolve()}removeTarget(t,n){this.ji.Pi(n.targetId).forEach(i=>this.Hi.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(i=>{i.forEach(r=>this.Hi.add(r.toString()))}).next(()=>s.removeTargetData(t,n))}Ki(){this.Wi=new Set}Gi(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return d.forEach(this.Hi,s=>{const i=v.fromPath(s);return this.Ji(t,i).next(r=>{r||n.removeEntry(i,S.min())})}).next(()=>(this.Wi=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ji(t,n).next(s=>{s?this.Hi.delete(n.toString()):this.Hi.add(n.toString())})}qi(t){return 0}Ji(t,n){return d.or([()=>d.resolve(this.ji.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Qi(t,n)])}}class tr{constructor(){this.activeTargetIds=Ko()}Zi(t){this.activeTargetIds=this.activeTargetIds.add(t)}tr(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Dl{constructor(){this.$r=new tr,this.Br={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.$r.Zi(t),this.Br[t]||"not-current"}updateQueryState(t,n,s){this.Br[t]=n}removeLocalQueryTarget(t){this.$r.tr(t)}isLocalQueryTarget(t){return this.$r.activeTargetIds.has(t)}clearQueryState(t){delete this.Br[t]}getAllActiveQueryTargets(){return this.$r.activeTargetIds}isActiveQueryTarget(t){return this.$r.activeTargetIds.has(t)}start(){return this.$r=new tr,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{Lr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.Ur=()=>this.qr(),this.Kr=()=>this.Gr(),this.Qr=[],this.jr()}Lr(t){this.Qr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Kr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Kr)}qr(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Qr)t(0)}Gr(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Qr)t(1)}static vt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t){this.Wr=t.Wr,this.zr=t.zr}Hr(t){this.Jr=t}Yr(t){this.Xr=t}onMessage(t){this.Zr=t}close(){this.zr()}send(t){this.Wr(t)}eo(){this.Jr()}no(t){this.Xr(t)}so(t){this.Zr(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.io=n+"://"+t.host,this.ro="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}oo(t,n,s,i,r){const o=this.uo(t,n);m("RestConnection","Sending: ",o,s);const a={};return this.ao(a,i,r),this.co(t,o,a,s).then(h=>(m("RestConnection","Received: ",h),h),h=>{throw Mi("RestConnection",`${t} failed with error: `,h,"url: ",o,"request:",s),h})}ho(t,n,s,i,r){return this.oo(t,n,s,i,r)}ao(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+zt,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>t[r]=i),s&&s.headers.forEach((i,r)=>t[r]=i)}uo(t,n){const s=Nl[t];return`${this.io}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}co(t,n,s,i){return new Promise((r,o)=>{const a=new Gc;a.listenOnce(Hc.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case $n.NO_ERROR:const c=a.getResponseJson();m("Connection","XHR received:",JSON.stringify(c)),r(c);break;case $n.TIMEOUT:m("Connection",'RPC "'+t+'" timed out'),o(new w(f.DEADLINE_EXCEEDED,"Request time out"));break;case $n.HTTP_ERROR:const u=a.getStatus();if(m("Connection",'RPC "'+t+'" failed with status:',u,"response text:",a.getResponseText()),u>0){const l=a.getResponseJson().error;if(l&&l.status&&l.message){const p=function(y){const T=y.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(T)>=0?T:f.UNKNOWN}(l.status);o(new w(p,l.message))}else o(new w(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new w(f.UNAVAILABLE,"Connection failed."));break;default:I()}}finally{m("Connection",'RPC "'+t+'" completed.')}});const h=JSON.stringify(i);a.send(n,"POST",h,s,15)})}lo(t,n,s){const i=[this.io,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=qc(),o=jc(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Xc({})),this.ao(a.initMessageHeaders,n,s),xa()||La()||Ma()||Pa()||Fa()||Oa()||(a.httpHeadersOverwriteParam="$httpHeaders");const h=i.join("");m("Connection","Creating WebChannel: "+h,a);const c=r.createWebChannel(h,a);let u=!1,l=!1;const p=new Rl({Wr:T=>{l?m("Connection","Not sending because WebChannel is closed:",T):(u||(m("Connection","Opening WebChannel transport."),c.open(),u=!0),m("Connection","WebChannel sending:",T),c.send(T))},zr:()=>c.close()}),y=(T,R,D)=>{T.listen(R,J=>{try{D(J)}catch(st){setTimeout(()=>{throw st},0)}})};return y(c,Ve.EventType.OPEN,()=>{l||m("Connection","WebChannel transport opened.")}),y(c,Ve.EventType.CLOSE,()=>{l||(l=!0,m("Connection","WebChannel transport closed"),p.no())}),y(c,Ve.EventType.ERROR,T=>{l||(l=!0,Mi("Connection","WebChannel transport errored:",T),p.no(new w(f.UNAVAILABLE,"The operation could not be completed")))}),y(c,Ve.EventType.MESSAGE,T=>{var R;if(!l){const D=T.data[0];M(!!D);const J=D,st=J.error||((R=J[0])===null||R===void 0?void 0:R.error);if(st){m("Connection","WebChannel received error:",st);const nt=st.status;let B=function(Zt){const Le=O[Zt];if(Le!==void 0)return Ho(Le)}(nt),yt=st.message;B===void 0&&(B=f.INTERNAL,yt="Unknown error status: "+nt+" with message "+st.message),l=!0,p.no(new w(B,yt)),c.close()}else m("Connection","WebChannel received:",D),p.so(D)}}),y(o,Kc.STAT_EVENT,T=>{T.stat===xi.PROXY?m("Connection","Detected buffering proxy"):T.stat===xi.NOPROXY&&m("Connection","Detected no buffering proxy")}),setTimeout(()=>{p.eo()},0),p}}function Kn(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(e){return new ju(e,!0)}class ea{constructor(t,n,s=1e3,i=1.5,r=6e4){this.Yn=t,this.timerId=n,this.fo=s,this._o=i,this.wo=r,this.mo=0,this.yo=null,this.po=Date.now(),this.reset()}reset(){this.mo=0}Io(){this.mo=this.wo}To(t){this.cancel();const n=Math.floor(this.mo+this.Eo()),s=Math.max(0,Date.now()-this.po),i=Math.max(0,n-s);i>0&&m("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.mo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.yo=this.Yn.enqueueAfterDelay(this.timerId,i,()=>(this.po=Date.now(),t())),this.mo*=this._o,this.mo<this.fo&&(this.mo=this.fo),this.mo>this.wo&&(this.mo=this.wo)}Ao(){this.yo!==null&&(this.yo.skipDelay(),this.yo=null)}cancel(){this.yo!==null&&(this.yo.cancel(),this.yo=null)}Eo(){return(Math.random()-.5)*this.mo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,n,s,i,r,o,a,h){this.Yn=t,this.Ro=s,this.Po=i,this.bo=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=h,this.state=0,this.Vo=0,this.vo=null,this.So=null,this.stream=null,this.Do=new ea(t,n)}Co(){return this.state===1||this.state===5||this.xo()}xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.No()}async stop(){this.Co()&&await this.close(0)}ko(){this.state=0,this.Do.reset()}Mo(){this.xo()&&this.vo===null&&(this.vo=this.Yn.enqueueAfterDelay(this.Ro,6e4,()=>this.Oo()))}Fo(t){this.$o(),this.stream.send(t)}async Oo(){if(this.xo())return this.close(0)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}Bo(){this.So&&(this.So.cancel(),this.So=null)}async close(t,n){this.$o(),this.Bo(),this.Do.cancel(),this.Vo++,t!==4?this.Do.reset():n&&n.code===f.RESOURCE_EXHAUSTED?(ft(n.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.Do.Io()):n&&n.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Lo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Yr(n)}Lo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.qo(s,i)},s=>{t(()=>{const i=new w(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Ko(i)})})}qo(t,n){const s=this.Uo(this.Vo);this.stream=this.Go(t,n),this.stream.Hr(()=>{s(()=>(this.state=2,this.So=this.Yn.enqueueAfterDelay(this.Po,1e4,()=>(this.xo()&&(this.state=3),Promise.resolve())),this.listener.Hr()))}),this.stream.Yr(i=>{s(()=>this.Ko(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}No(){this.state=5,this.Do.To(async()=>{this.state=0,this.start()})}Ko(t){return m("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Yn.enqueueAndForget(()=>this.Vo===t?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ll extends Ol{constructor(t,n,s,i,r,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.M=r}Go(t,n){return this.bo.lo("Listen",t,n)}onMessage(t){this.Do.reset();const n=zu(this.M,t),s=function(i){if(!("targetChange"in i))return S.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?S.min():r.readTime?we(r.readTime):S.min()}(t);return this.listener.Qo(n,s)}jo(t){const n={};n.database=Ji(this.M),n.addTarget=function(i,r){let o;const a=r.target;return o=ls(a)?{documents:Wu(i,a)}:{query:Yu(i,a)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=Ku(i,r.resumeToken):r.snapshotVersion.compareTo(S.min())>0&&(o.readTime=Hu(i,r.snapshotVersion.toTimestamp())),o}(this.M,t);const s=Ju(this.M,t);s&&(n.labels=s),this.Fo(n)}Wo(t){const n={};n.database=Ji(this.M),n.removeTarget=t,this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml extends class{}{constructor(t,n,s,i){super(),this.authCredentials=t,this.appCheckCredentials=n,this.bo=s,this.M=i,this.tu=!1}eu(){if(this.tu)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}oo(t,n,s){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.oo(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}ho(t,n,s){return this.eu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.bo.ho(t,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(f.UNKNOWN,i.toString())})}terminate(){this.tu=!0}}class Pl{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.nu=0,this.su=null,this.iu=!0}ru(){this.nu===0&&(this.ou("Unknown"),this.su=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.su=null,this.uu("Backend didn't respond within 10 seconds."),this.ou("Offline"),Promise.resolve())))}au(t){this.state==="Online"?this.ou("Unknown"):(this.nu++,this.nu>=1&&(this.cu(),this.uu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ou("Offline")))}set(t){this.cu(),this.nu=0,t==="Online"&&(this.iu=!1),this.ou(t)}ou(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}uu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.iu?(ft(n),this.iu=!1):m("OnlineStateTracker",n)}cu(){this.su!==null&&(this.su.cancel(),this.su=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,n,s,i,r){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.hu=[],this.lu=new Map,this.fu=new Set,this.du=[],this._u=r,this._u.Lr(o=>{s.enqueueAndForget(async()=>{Oe(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const h=_(a);h.fu.add(4),await xe(h),h.wu.set("Unknown"),h.fu.delete(4),await kn(h)}(this))})}),this.wu=new Pl(s,i)}}async function kn(e){if(Oe(e))for(const t of e.du)await t(!0)}async function xe(e){for(const t of e.du)await t(!1)}function na(e,t){const n=_(e);n.lu.has(t.targetId)||(n.lu.set(t.targetId,t),si(n)?ni(n):Qt(n).xo()&&ei(n,t))}function sa(e,t){const n=_(e),s=Qt(n);n.lu.delete(t),s.xo()&&ia(n,t),n.lu.size===0&&(s.xo()?s.Mo():Oe(n)&&n.wu.set("Unknown"))}function ei(e,t){e.mu.Z(t.targetId),Qt(e).jo(t)}function ia(e,t){e.mu.Z(t),Qt(e).Wo(t)}function ni(e){e.mu=new Uu({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.lu.get(t)||null}),Qt(e).start(),e.wu.ru()}function si(e){return Oe(e)&&!Qt(e).Co()&&e.lu.size>0}function Oe(e){return _(e).fu.size===0}function ra(e){e.mu=void 0}async function Vl(e){e.lu.forEach((t,n)=>{ei(e,t)})}async function Bl(e,t){ra(e),si(e)?(e.wu.au(t),ni(e)):e.wu.set("Unknown")}async function Ul(e,t,n){if(e.wu.set("Online"),t instanceof Go&&t.state===2&&t.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.lu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.lu.delete(o),s.mu.removeTarget(o))}(e,t)}catch(s){m("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await nr(e,s)}else if(t instanceof He?e.mu.ut(t):t instanceof Xo?e.mu._t(t):e.mu.ht(t),!n.isEqual(S.min()))try{const s=await Zo(e.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.mu.yt(r);return o.targetChanges.forEach((a,h)=>{if(a.resumeToken.approximateByteSize()>0){const c=i.lu.get(h);c&&i.lu.set(h,c.withResumeToken(a.resumeToken,r))}}),o.targetMismatches.forEach(a=>{const h=i.lu.get(a);if(!h)return;i.lu.set(a,h.withResumeToken(H.EMPTY_BYTE_STRING,h.snapshotVersion)),ia(i,a);const c=new It(h.target,a,1,h.sequenceNumber);ei(i,c)}),i.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){m("RemoteStore","Failed to raise snapshot:",s),await nr(e,s)}}async function nr(e,t,n){if(!Re(t))throw t;e.fu.add(1),await xe(e),e.wu.set("Offline"),n||(n=()=>Zo(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),e.fu.delete(1),await kn(e)})}async function sr(e,t){const n=_(e);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const s=Oe(n);n.fu.add(3),await xe(n),s&&n.wu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.fu.delete(3),await kn(n)}async function $l(e,t){const n=_(e);t?(n.fu.delete(2),await kn(n)):t||(n.fu.add(2),await xe(n),n.wu.set("Unknown"))}function Qt(e){return e.gu||(e.gu=function(t,n,s){const i=_(t);return i.eu(),new Ll(n,i.bo,i.authCredentials,i.appCheckCredentials,i.M,s)}(e.datastore,e.asyncQueue,{Hr:Vl.bind(null,e),Yr:Bl.bind(null,e),Qo:Ul.bind(null,e)}),e.du.push(async t=>{t?(e.gu.ko(),si(e)?ni(e):e.wu.set("Unknown")):(await e.gu.stop(),ra(e))})),e.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(t,n,s,i,r){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,i,r){const o=Date.now()+s,a=new ii(t,n,o,i,r);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function oa(e,t){if(ft("AsyncQueue",`${t}: ${e}`),Re(e))return new w(f.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t){this.comparator=t?(n,s)=>t(n,s)||v.comparator(n.key,s.key):(n,s)=>v.comparator(n.key,s.key),this.keyedMap=ms(),this.sortedSet=new K(this.comparator)}static emptySet(t){return new Mt(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Mt)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Mt;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(){this.pu=new K(v.comparator)}track(t){const n=t.doc.key,s=this.pu.get(n);s?t.type!==0&&s.type===3?this.pu=this.pu.insert(n,t):t.type===3&&s.type!==1?this.pu=this.pu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.pu=this.pu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.pu=this.pu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.pu=this.pu.remove(n):t.type===1&&s.type===2?this.pu=this.pu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.pu=this.pu.insert(n,{type:2,doc:t.doc}):I():this.pu=this.pu.insert(n,t)}Iu(){const t=[];return this.pu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Ht{constructor(t,n,s,i,r,o,a,h){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=h}static fromInitialDocuments(t,n,s,i){const r=[];return n.forEach(o=>{r.push({type:0,doc:o})}),new Ht(t,n,Mt.emptySet(n),r,s,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&bn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.Tu=void 0,this.listeners=[]}}class jl{constructor(){this.queries=new Yt(t=>Mo(t),bn),this.onlineState="Unknown",this.Eu=new Set}}async function Hl(e,t){const n=_(e),s=t.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new ql),i)try{r.Tu=await n.onListen(s)}catch(o){const a=oa(o,`Initialization of query '${ds(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,r),r.listeners.push(t),t.Au(n.onlineState),r.Tu&&t.Ru(r.Tu)&&ri(n)}async function Kl(e,t){const n=_(e),s=t.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(t);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function Xl(e,t){const n=_(e);let s=!1;for(const i of t){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.Ru(i)&&(s=!0);o.Tu=i}}s&&ri(n)}function Gl(e,t,n){const s=_(e),i=s.queries.get(t);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(t)}function ri(e){e.Eu.forEach(t=>{t.next()})}class zl{constructor(t,n,s){this.query=t,this.Pu=n,this.bu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}Ru(t){if(!this.options.includeMetadataChanges){const s=[];for(const i of t.docChanges)i.type!==3&&s.push(i);t=new Ht(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let n=!1;return this.bu?this.vu(t)&&(this.Pu.next(t),n=!0):this.Su(t,this.onlineState)&&(this.Du(t),n=!0),this.Vu=t,n}onError(t){this.Pu.error(t)}Au(t){this.onlineState=t;let n=!1;return this.Vu&&!this.bu&&this.Su(this.Vu,t)&&(this.Du(this.Vu),n=!0),n}Su(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.Cu||!s)&&(!t.docs.isEmpty()||n==="Offline")}vu(t){if(t.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Du(t){t=Ht.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Pu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(t){this.key=t}}class ha{constructor(t){this.key=t}}class Wl{constructor(t,n){this.query=t,this.$u=n,this.Bu=null,this.current=!1,this.Lu=N(),this.mutatedKeys=N(),this.Uu=Po(t),this.qu=new Mt(this.Uu)}get Ku(){return this.$u}Gu(t,n){const s=n?n.Qu:new ir,i=n?n.qu:this.qu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const h=qe(this.query)&&i.size===this.query.limit?i.last():null,c=sn(this.query)&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((u,l)=>{const p=i.get(u),y=Ys(this.query,l)?l:null,T=!!p&&this.mutatedKeys.has(p.key),R=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;p&&y?p.data.isEqual(y.data)?T!==R&&(s.track({type:3,doc:y}),D=!0):this.ju(p,y)||(s.track({type:2,doc:y}),D=!0,(h&&this.Uu(y,h)>0||c&&this.Uu(y,c)<0)&&(a=!0)):!p&&y?(s.track({type:0,doc:y}),D=!0):p&&!y&&(s.track({type:1,doc:p}),D=!0,(h||c)&&(a=!0)),D&&(y?(o=o.add(y),r=R?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),qe(this.query)||sn(this.query))for(;o.size>this.query.limit;){const u=qe(this.query)?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{qu:o,Qu:s,ni:a,mutatedKeys:r}}ju(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const i=this.qu;this.qu=t.qu,this.mutatedKeys=t.mutatedKeys;const r=t.Qu.Iu();r.sort((c,u)=>function(l,p){const y=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return I()}};return y(l)-y(p)}(c.type,u.type)||this.Uu(c.doc,u.doc)),this.Wu(s);const o=n?this.zu():[],a=this.Lu.size===0&&this.current?1:0,h=a!==this.Bu;return this.Bu=a,r.length!==0||h?{snapshot:new Ht(this.query,t.qu,i,r,t.mutatedKeys,a===0,h,!1),Hu:o}:{Hu:o}}Au(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({qu:this.qu,Qu:new ir,mutatedKeys:this.mutatedKeys,ni:!1},!1)):{Hu:[]}}Ju(t){return!this.$u.has(t)&&!!this.qu.has(t)&&!this.qu.get(t).hasLocalMutations}Wu(t){t&&(t.addedDocuments.forEach(n=>this.$u=this.$u.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.$u=this.$u.delete(n)),this.current=t.current)}zu(){if(!this.current)return[];const t=this.Lu;this.Lu=N(),this.qu.forEach(s=>{this.Ju(s.key)&&(this.Lu=this.Lu.add(s.key))});const n=[];return t.forEach(s=>{this.Lu.has(s)||n.push(new ha(s))}),this.Lu.forEach(s=>{t.has(s)||n.push(new aa(s))}),n}Yu(t){this.$u=t.li,this.Lu=N();const n=this.Gu(t.documents);return this.applyChanges(n,!0)}Xu(){return Ht.fromInitialDocuments(this.query,this.qu,this.mutatedKeys,this.Bu===0)}}class Yl{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class Ql{constructor(t){this.key=t,this.Zu=!1}}class Jl{constructor(t,n,s,i,r,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.ta={},this.ea=new Yt(a=>Mo(a),bn),this.na=new Map,this.sa=new Set,this.ia=new K(v.comparator),this.ra=new Map,this.oa=new Zs,this.ua={},this.aa=new Map,this.ca=jt.yn(),this.onlineState="Unknown",this.ha=void 0}get isPrimaryClient(){return this.ha===!0}}async function Zl(e,t){const n=od(e);let s,i;const r=n.ea.get(t);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Xu();else{const o=await vl(n.localStore,Dt(t));n.isPrimaryClient&&na(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await td(n,t,s,a==="current")}return i}async function td(e,t,n,s){e.la=(u,l,p)=>async function(y,T,R,D){let J=T.view.Gu(R);J.ni&&(J=await Zi(y.localStore,T.query,!1).then(({documents:B})=>T.view.Gu(B,J)));const st=D&&D.targetChanges.get(T.targetId),nt=T.view.applyChanges(J,y.isPrimaryClient,st);return or(y,T.targetId,nt.Hu),nt.snapshot}(e,u,l,p);const i=await Zi(e.localStore,t,!0),r=new Wl(t,i.li),o=r.Gu(i.documents),a=Ne.createSynthesizedTargetChangeForCurrentChange(n,s&&e.onlineState!=="Offline"),h=r.applyChanges(o,e.isPrimaryClient,a);or(e,n,h.Hu);const c=new Yl(t,n,r);return e.ea.set(t,c),e.na.has(n)?e.na.get(n).push(t):e.na.set(n,[t]),h.snapshot}async function ed(e,t){const n=_(e),s=n.ea.get(t),i=n.na.get(s.targetId);if(i.length>1)return n.na.set(s.targetId,i.filter(r=>!bn(r,t))),void n.ea.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await vs(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),sa(n.remoteStore,s.targetId),ws(n,s.targetId)}).catch(Qs)):(ws(n,s.targetId),await vs(n.localStore,s.targetId,!0))}async function ca(e,t){const n=_(e);try{const s=await ml(n.localStore,t);t.targetChanges.forEach((i,r)=>{const o=n.ra.get(r);o&&(M(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Zu=!0:i.modifiedDocuments.size>0?M(o.Zu):i.removedDocuments.size>0&&(M(o.Zu),o.Zu=!1))}),await la(n,s,t)}catch(s){await Qs(s)}}function rr(e,t,n){const s=_(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ea.forEach((r,o)=>{const a=o.view.Au(t);a.snapshot&&i.push(a.snapshot)}),function(r,o){const a=_(r);a.onlineState=o;let h=!1;a.queries.forEach((c,u)=>{for(const l of u.listeners)l.Au(o)&&(h=!0)}),h&&ri(a)}(s.eventManager,t),i.length&&s.ta.Qo(i),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function nd(e,t,n){const s=_(e);s.sharedClientState.updateQueryState(t,"rejected",n);const i=s.ra.get(t),r=i&&i.key;if(r){let o=new K(v.comparator);o=o.insert(r,G.newNoDocument(r,S.min()));const a=N().add(r),h=new Dn(S.min(),new Map,new j(A),o,a);await ca(s,h),s.ia=s.ia.remove(r),s.ra.delete(t),oi(s)}else await vs(s.localStore,t,!1).then(()=>ws(s,t,n)).catch(Qs)}function ws(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.na.get(t))e.ea.delete(s),n&&e.ta.fa(s,n);e.na.delete(t),e.isPrimaryClient&&e.oa.Pi(t).forEach(s=>{e.oa.containsKey(s)||ua(e,s)})}function ua(e,t){e.sa.delete(t.path.canonicalString());const n=e.ia.get(t);n!==null&&(sa(e.remoteStore,n),e.ia=e.ia.remove(t),e.ra.delete(n),oi(e))}function or(e,t,n){for(const s of n)s instanceof aa?(e.oa.addReference(s.key,t),sd(e,s)):s instanceof ha?(m("SyncEngine","Document no longer in limbo: "+s.key),e.oa.removeReference(s.key,t),e.oa.containsKey(s.key)||ua(e,s.key)):I()}function sd(e,t){const n=t.key,s=n.path.canonicalString();e.ia.get(n)||e.sa.has(s)||(m("SyncEngine","New document in limbo: "+n),e.sa.add(s),oi(e))}function oi(e){for(;e.sa.size>0&&e.ia.size<e.maxConcurrentLimboResolutions;){const t=e.sa.values().next().value;e.sa.delete(t);const n=new v(x.fromString(t)),s=e.ca.next();e.ra.set(s,new Ql(n)),e.ia=e.ia.insert(n,s),na(e.remoteStore,new It(Dt(Lo(n.path)),s,2,Xs.A))}}async function la(e,t,n){const s=_(e),i=[],r=[],o=[];s.ea.isEmpty()||(s.ea.forEach((a,h)=>{o.push(s.la(h,t,n).then(c=>{if(c){s.isPrimaryClient&&s.sharedClientState.updateQueryState(h.targetId,c.fromCache?"not-current":"current"),i.push(c);const u=Js.Ys(h.targetId,c);r.push(u)}}))}),await Promise.all(o),s.ta.Qo(i),await async function(a,h){const c=_(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>d.forEach(h,l=>d.forEach(l.Hs,p=>c.persistence.referenceDelegate.addReference(u,l.targetId,p)).next(()=>d.forEach(l.Js,p=>c.persistence.referenceDelegate.removeReference(u,l.targetId,p)))))}catch(u){if(!Re(u))throw u;m("LocalStore","Failed to update sequence numbers: "+u)}for(const u of h){const l=u.targetId;if(!u.fromCache){const p=c.ii.get(l),y=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(y);c.ii=c.ii.insert(l,T)}}}(s.localStore,r))}async function id(e,t){const n=_(e);if(!n.currentUser.isEqual(t)){m("SyncEngine","User change. New user:",t.toKey());const s=await Jo(n.localStore,t);n.currentUser=t,function(i,r){i.aa.forEach(o=>{o.forEach(a=>{a.reject(new w(f.CANCELLED,r))})}),i.aa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await la(n,s.hi)}}function rd(e,t){const n=_(e),s=n.ra.get(t);if(s&&s.Zu)return N().add(s.key);{let i=N();const r=n.na.get(t);if(!r)return i;for(const o of r){const a=n.ea.get(o);i=i.unionWith(a.view.Ku)}return i}}function od(e){const t=_(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=ca.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=rd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=nd.bind(null,t),t.ta.Qo=Xl.bind(null,t.eventManager),t.ta.fa=Gl.bind(null,t.eventManager),t}class ad{constructor(){this.synchronizeTabs=!1}async initialize(t){this.M=ta(t.databaseInfo.databaseId),this.sharedClientState=this._a(t),this.persistence=this.wa(t),await this.persistence.start(),this.gcScheduler=this.ma(t),this.localStore=this.ga(t)}ma(t){return null}ga(t){return pl(this.persistence,new fl,t.initialUser,this.M)}wa(t){return new bl(ti.zi,this.M)}_a(t){return new Dl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class hd{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>rr(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=id.bind(null,this.syncEngine),await $l(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new jl}createDatastore(t){const n=ta(t.databaseInfo.databaseId),s=(i=t.databaseInfo,new xl(i));var i;return function(r,o,a,h){return new Ml(r,o,a,h)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,i=t.asyncQueue,r=a=>rr(this.syncEngine,a,0),o=er.vt()?new er:new kl,new Fl(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(t,n){return function(s,i,r,o,a,h,c){const u=new Jl(s,i,r,o,a,h);return c&&(u.ha=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=_(t);m("RemoteStore","RemoteStore shutting down."),n.fu.add(5),await xe(n),n._u.shutdown(),n.wu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.pa(this.observer.next,t)}error(t){this.observer.error?this.pa(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Ia(){this.muted=!0}pa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(t,n,s,i){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=Z.UNAUTHENTICATED,this.clientId=nu.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{m("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(m("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=oa(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function ld(e,t){e.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async i=>{s.isEqual(i)||(await Jo(t.localStore,i),s=i)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e.offlineComponents=t}async function dd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await fd(e);m("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(i=>sr(t.remoteStore,i)),e.setAppCheckTokenChangeListener((i,r)=>sr(t.remoteStore,r)),e.onlineComponents=t}async function fd(e){return e.offlineComponents||(m("FirestoreClient","Using default OfflineComponentProvider"),await ld(e,new ad)),e.offlineComponents}async function gd(e){return e.onlineComponents||(m("FirestoreClient","Using default OnlineComponentProvider"),await dd(e,new hd)),e.onlineComponents}async function pd(e){const t=await gd(e),n=t.eventManager;return n.onListen=Zl.bind(null,t.syncEngine),n.onUnlisten=ed.bind(null,t.syncEngine),n}function md(e,t,n={}){const s=new Tt;return e.asyncQueue.enqueueAndForget(async()=>function(i,r,o,a,h){const c=new cd({next:l=>{r.enqueueAndForget(()=>Kl(i,u)),l.fromCache&&a.source==="server"?h.reject(new w(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(l)},error:l=>h.reject(l)}),u=new zl(o,c,{includeMetadataChanges:!0,Cu:!0});return Hl(i,u)}(await pd(e),e.asyncQueue,t,n,s)),s.promise}const ar=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(e,t,n){if(!n)throw new w(f.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function vd(e,t,n,s){if(t===!0&&s===!0)throw new w(f.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function hr(e){if(v.isDocumentKey(e))throw new w(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function wd(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":I()}function cr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new w(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wd(e);throw new w(f.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new w(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,vd("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t,n,s){this._authCredentials=n,this._appCheckCredentials=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ur({}),this._settingsFrozen=!1,t instanceof Ut?this._databaseId=t:(this._app=t,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new w(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ut(i.options.projectId)}(t))}get app(){if(!this._app)throw new w(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ur(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Wc;switch(n.type){case"gapi":const s=n.client;return M(!(typeof s!="object"||s===null||!s.auth||!s.auth.getAuthHeaderValueForFirstParty)),new Jc(s,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new w(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=ar.get(t);n&&(m("ComponentProvider","Removing Datastore"),ar.delete(t),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Jt(this.firestore,t,this._key)}}class Nn{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Nn(this.firestore,t,this._query)}}class Pt extends Nn{constructor(t,n,s){super(t,n,Lo(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Jt(this.firestore,null,new v(t))}withConverter(t){return new Pt(this.firestore,t,this._path)}}function uf(e,t,...n){if(e=Er(e),yd("collection","path",t),e instanceof da){const s=x.fromString(t,...n);return hr(s),new Pt(e,null,s)}{if(!(e instanceof Jt||e instanceof Pt))throw new w(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(x.fromString(t,...n));return hr(s),new Pt(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(){this.ka=Promise.resolve(),this.Ma=[],this.Oa=!1,this.Fa=[],this.$a=null,this.Ba=!1,this.La=!1,this.Ua=[],this.Do=new ea(this,"async_queue_retry"),this.qa=()=>{const n=Kn();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Do.Ao()};const t=Kn();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qa)}get isShuttingDown(){return this.Oa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ka(),this.Ga(t)}enterRestrictedMode(t){if(!this.Oa){this.Oa=!0,this.La=t||!1;const n=Kn();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qa)}}enqueue(t){if(this.Ka(),this.Oa)return new Promise(()=>{});const n=new Tt;return this.Ga(()=>this.Oa&&this.La?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ma.push(t),this.Qa()))}async Qa(){if(this.Ma.length!==0){try{await this.Ma[0](),this.Ma.shift(),this.Do.reset()}catch(t){if(!Re(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.Ma.length>0&&this.Do.To(()=>this.Qa())}}Ga(t){const n=this.ka.then(()=>(this.Ba=!0,t().catch(s=>{this.$a=s,this.Ba=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw ft("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Ba=!1,s))));return this.ka=n,n}enqueueAfterDelay(t,n,s){this.Ka(),this.Ua.indexOf(t)>-1&&(n=0);const i=ii.createAndSchedule(this,t,n,s,r=>this.ja(r));return this.Fa.push(i),i}Ka(){this.$a&&I()}verifyOperationInProgress(){}async Wa(){let t;do t=this.ka,await t;while(t!==this.ka)}za(t){for(const n of this.Fa)if(n.timerId===t)return!0;return!1}Ha(t){return this.Wa().then(()=>{this.Fa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Fa)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Wa()})}Ja(t){this.Ua.push(t)}ja(t){const n=this.Fa.indexOf(t);this.Fa.splice(n,1)}}class fa extends da{constructor(t,n,s){super(t,n,s),this.type="firestore",this._queue=new Ed,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||ga(this),this._firestoreClient.terminate()}}function Td(e=Ar()){return _r(e,"firestore").getImmediate()}function Id(e){return e._firestoreClient||ga(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function ga(e){var t;const n=e._freezeSettings(),s=function(i,r,o,a){return new ou(i,r,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ud(e._authCredentials,e._appCheckCredentials,e._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new w(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new it(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(t){this._byteString=t}static fromBase64String(t){try{return new an(H.fromBase64String(t))}catch(n){throw new w(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new an(H.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new w(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new w(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return A(this._lat,t._lat)||A(this._long,t._long)}}const Cd=new RegExp("[~\\*/\\[\\]]");function _d(e,t,n){if(t.search(Cd)>=0)throw lr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new pa(...t.split("."))._internalPath}catch{throw lr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function lr(e,t,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let h="";return(r||o)&&(h+=" (found",r&&(h+=` in field ${s}`),o&&(h+=` in document ${i}`),h+=")"),new w(f.INVALID_ARGUMENT,a+e+h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(t,n,s,i,r){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Jt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new bd(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ya("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class bd extends ma{data(){return super.data()}}function ya(e,t){return typeof t=="string"?_d(e,t):t instanceof pa?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ad extends ma{constructor(t,n,s,i,r,o){super(t,n,s,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=r}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ke(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(ya("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Ke extends Ad{data(t={}){return super.data(t)}}class Dd{constructor(t,n,s,i){this._firestore=t,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ue(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Ke(this._firestore,this._userDataWriter,s.key,s,new Ue(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new w(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>({type:"added",doc:new Ke(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ue(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter),oldIndex:-1,newIndex:r++}))}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ke(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Ue(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,c=-1;return o.type!==0&&(h=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),c=r.indexOf(o.doc.key)),{type:kd(o.type),doc:a,oldIndex:h,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function kd(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return I()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(e){if(sn(e)&&e.explicitOrderBy.length===0)throw new w(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{convertValue(t,n="none"){switch(At(t)){case 0:return null;case 1:return t.booleanValue;case 2:return L(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Bt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw I()}}convertObject(t,n){const s={};return Cn(t.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(t){return new Sd(L(t.latitude),L(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=xo(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(me(t));default:return null}}convertTimestamp(t){const n=gt(t);return new ot(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=x.fromString(t);M(Qo(s));const i=new Ut(s.get(1),s.get(3)),r=new v(s.popFirst(5));return i.isEqual(n)||ft(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}class xd extends Rd{constructor(t){super(),this.firestore=t}convertBytes(t){return new an(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Jt(this.firestore,null,n)}}function lf(e){e=cr(e,Nn);const t=cr(e.firestore,fa),n=Id(t),s=new xd(t);return Nd(e._query),md(n,e._query).then(i=>new Dd(t,s,e,i))}(function(e,t=!0){(function(n){zt=n})(br),ae(new Ft("firestore",(n,{options:s})=>{const i=n.getProvider("app").getImmediate(),r=new fa(i,new Yc(n.getProvider("auth-internal")),new tu(n.getProvider("app-check-internal")));return s=Object.assign({useFetchStreams:t},s),r._setSettings(s),r},"PUBLIC")),dt(Oi,"3.4.8",e),dt(Oi,"3.4.8","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="firebasestorage.googleapis.com",Od="storageBucket",Ld=2*60*1e3,Md=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht extends Ee{constructor(t,n){super(Xn(t),`Firebase Storage: ${n} (${Xn(t)})`);this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ht.prototype)}_codeEquals(t){return Xn(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Xn(e){return"storage/"+e}function Pd(){const e="An unknown error occurred, please check the error payload for server response.";return new ht("unknown",e)}function Fd(){return new ht("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function Vd(){return new ht("canceled","User canceled the upload/download.")}function Bd(e){return new ht("invalid-url","Invalid URL '"+e+"'.")}function Ud(e){return new ht("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function dr(e){return new ht("invalid-argument",e)}function wa(){return new ht("app-deleted","The Firebase app was deleted.")}function $d(e){return new ht("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let s;try{s=rt.makeFromUrl(t,n)}catch{return new rt(t,"")}if(s.path==="")return s;throw Ud(t)}static makeFromUrl(t,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),h={bucket:1,path:3};function c(B){B.path_=decodeURIComponent(B.path)}const u="v[A-Za-z0-9_]+",l=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",y=new RegExp(`^https?://${l}/${u}/b/${i}/o${p}`,"i"),T={bucket:1,path:3},R=n===va?"(?:storage.googleapis.com|storage.cloud.google.com)":n,D="([^?#]*)",J=new RegExp(`^https?://${R}/${i}/${D}`,"i"),nt=[{regex:a,indices:h,postModify:r},{regex:y,indices:T,postModify:c},{regex:J,indices:{bucket:1,path:2},postModify:c}];for(let B=0;B<nt.length;B++){const yt=nt[B],Zt=yt.regex.exec(t);if(Zt){const Le=Zt[yt.indices.bucket];let Rn=Zt[yt.indices.path];Rn||(Rn=""),s=new rt(Le,Rn),yt.postModify(s);break}}if(s==null)throw Bd(t);return s}}class qd{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(e,t,n){let s=1,i=null,r=null,o=!1,a=0;function h(){return a===2}let c=!1;function u(...D){c||(c=!0,t.apply(null,D))}function l(D){i=setTimeout(()=>{i=null,e(y,h())},D)}function p(){r&&clearTimeout(r)}function y(D,...J){if(c){p();return}if(D){p(),u.call(null,D,...J);return}if(h()||o){p(),u.call(null,D,...J);return}s<64&&(s*=2);let nt;a===1?(a=2,nt=0):nt=(s+Math.random())*1e3,l(nt)}let T=!1;function R(D){T||(T=!0,p(),!c&&(i!==null?(D||(a=2),clearTimeout(i),l(0)):D||(a=1)))}return l(0),r=setTimeout(()=>{o=!0,R(!0)},n),R}function Hd(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(e){return e!==void 0}function fr(e,t,n,s){if(s<t)throw dr(`Invalid value for '${e}'. Expected ${t} or greater.`);if(s>n)throw dr(`Invalid value for '${e}'. Expected ${n} or less.`)}function Xd(e){const t=encodeURIComponent;let n="?";for(const s in e)if(e.hasOwnProperty(s)){const i=t(s)+"="+t(e[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var hn;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(hn||(hn={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(t,n,s,i,r,o,a,h,c,u,l){this.url_=t,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=h,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const t=(s,i)=>{if(i){s(!1,new $e(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const h=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===hn.NO_ERROR,h=r.getStatus();if(!a||this.isRetryStatusCode_(h)){const u=r.getErrorCode()===hn.ABORT;s(!1,new $e(!1,null,u));return}const c=this.successCodes_.indexOf(h)!==-1;s(!0,new $e(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const h=this.callback_(a,a.getResponse());Kd(h)?r(h):r()}catch(h){o(h)}else if(a!==null){const h=Pd();h.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,h)):o(h)}else if(i.canceled){const h=this.appDelete_?wa():Vd();o(h)}else{const h=Fd();o(h)}};this.canceled_?n(!1,new $e(!1,null,!0)):this.backoffId_=jd(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Hd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=this.additionalRetryCodes_.indexOf(t)!==-1;return n||i||r}}class $e{constructor(t,n,s){this.wasSuccessCode=t,this.connection=n,this.canceled=!!s}}function zd(e,t){t!==null&&t.length>0&&(e.Authorization="Firebase "+t)}function Wd(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(t!=null?t:"AppManager")}function Yd(e,t){t&&(e["X-Firebase-GMPID"]=t)}function Qd(e,t){t!==null&&(e["X-Firebase-AppCheck"]=t)}function Jd(e,t,n,s,i,r){const o=Xd(e.urlParams),a=e.url+o,h=Object.assign({},e.headers);return Yd(h,t),zd(h,n),Wd(h,r),Qd(h,s),new Gd(a,e.method,h,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zd(e){if(e.length===0)return null;const t=e.lastIndexOf("/");return t===-1?"":e.slice(0,t)}function tf(e){const t=e.lastIndexOf("/",e.length-2);return t===-1?e:e.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t,n){this._service=t,n instanceof rt?this._location=n:this._location=rt.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new cn(t,n)}get root(){const t=new rt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return tf(this._location.path)}get storage(){return this._service}get parent(){const t=Zd(this._location.path);if(t===null)return null;const n=new rt(this._location.bucket,t);return new cn(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw $d(t)}}function gr(e,t){const n=t==null?void 0:t[Od];return n==null?null:rt.makeFromBucketSpec(n,e)}class ef{constructor(t,n,s,i,r){this.app=t,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=va,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Ld,this._maxUploadRetryTime=Md,this._requests=new Set,i!=null?this._bucket=rt.makeFromBucketSpec(i,this._host):this._bucket=gr(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=rt.makeFromBucketSpec(this._url,t):this._bucket=gr(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){fr("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){fr("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new cn(this,t)}_makeRequest(t,n,s,i){if(this._deleted)return new qd(wa());{const r=Jd(t,this._appId,s,i,n,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(t,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,s,i).getPromise()}}const pr="@firebase/storage",mr="0.9.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea="storage";function nf(e=Ar(),t){return e=Er(e),_r(e,Ea).getImmediate({identifier:t})}function sf(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new ef(n,s,i,t,br)}function rf(){ae(new Ft(Ea,sf,"PUBLIC").setMultipleInstances(!0)),dt(pr,mr,""),dt(pr,mr,"esm2017")}rf();const of={apiKey:"XXXXXXXXXXXXXXX",authDomain:"XXXXXXXXXXXXXXX",projectId:"XXXXXXXXXXXXXXX",storageBucket:"XXXXXXXXXXXXXXX",messagingSenderId:"XXXXXXXXXXXXXXX",appId:"XXXXXXXXXXXXXXX"},Ta=kh(of),df=Td(Ta);nf(Ta);export{cf as P,df as d,uf as p,lf as r};
