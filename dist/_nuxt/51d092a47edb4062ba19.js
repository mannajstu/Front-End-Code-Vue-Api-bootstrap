(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{205:function(t,e,n){"use strict";n.r(e);n(54);var r,o=n(15),c={components:{},data:function(){return{perPage:8,currentPage:1,countries:[],fields:[{key:"name",sortable:!0},{key:"languages",sortable:!1},{key:"continent",sortable:!0},{key:"code",sortable:!0}]}},methods:{fetchSomething:(r=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$axios.$get("https://countriesnode.herokuapp.com/v1/countries/");case 2:e=t.sent,this.countries=e;case 4:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},mounted:function(){this.fetchSomething()},computed:{rows:function(){return this.countries.length}}},l=n(37),h={components:{Countries:Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("b-table",{attrs:{id:"my-table","per-page":t.perPage,"current-page":t.currentPage,striped:"",hover:"",items:t.countries,fields:t.fields},scopedSlots:t._u([{key:"cell(code)",fn:function(data){return[n("nuxt-link",{attrs:{to:"/country/"+data.value.toUpperCase()}},[n("b-button",{attrs:{variant:"success"}},[t._v(t._s(data.value))])],1)]}}])}),t._v(" "),n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)}),[],!1,null,null,null).exports},data:function(){return{title:"Countries"}},head:function(){return{title:this.title}}},f=Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("nuxt-link",{attrs:{to:"/"}},[e("b-button",{attrs:{variant:"success"}},[this._v("Home")])],1),this._v(" "),e("Countries")],1)}),[],!1,null,null,null);e.default=f.exports}}]);