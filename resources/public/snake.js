;(function(){
var f;
function m(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var aa = "closure_uid_" + (1E9 * Math.random() >>> 0), ba = 0;
function ca(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function da(a, b) {
  null != a && this.append.apply(this, arguments);
}
da.prototype.va = "";
da.prototype.append = function(a, b, c) {
  this.va += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.va += arguments[d];
    }
  }
  return this;
};
da.prototype.toString = function() {
  return this.va;
};
var ea, fa = null;
function ha() {
  return new ia(null, 5, [ja, !0, ka, !0, la, !1, ma, !1, na, null], null);
}
function p(a) {
  return null != a && !1 !== a;
}
function oa(a) {
  return p(a) ? !1 : !0;
}
function r(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : s ? !1 : null;
}
function pa(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = pa(b), c = p(p(c) ? c.kb : c) ? c.jb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function qa(a) {
  var b = a.jb;
  return p(b) ? b : "" + v(a);
}
function w(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var ra = {}, ta = {};
function x(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = x[m(null == a ? null : a)];
  if (!b && (b = x._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function ua(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = ua[m(null == a ? null : a)];
  if (!b && (b = ua._, !b)) {
    throw u("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var va = {};
function wa(a, b) {
  if (a ? a.B : a) {
    return a.B(a, b);
  }
  var c;
  c = wa[m(null == a ? null : a)];
  if (!c && (c = wa._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var xa = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.W : a) {
      return a.W(a, b, c);
    }
    var h;
    h = z[m(null == a ? null : a)];
    if (!h && (h = z._, !h)) {
      throw u("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.N : a) {
      return a.N(a, b);
    }
    var c;
    c = z[m(null == a ? null : a)];
    if (!c && (c = z._, !c)) {
      throw u("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), ya = {};
function A(a) {
  if (a ? a.L : a) {
    return a.L(a);
  }
  var b;
  b = A[m(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function B(a) {
  if (a ? a.T : a) {
    return a.T(a);
  }
  var b;
  b = B[m(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var za = {}, Aa = {}, C = function() {
  function a(a, b, c) {
    if (a ? a.D : a) {
      return a.D(a, b, c);
    }
    var h;
    h = C[m(null == a ? null : a)];
    if (!h && (h = C._, !h)) {
      throw u("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.C : a) {
      return a.C(a, b);
    }
    var c;
    c = C[m(null == a ? null : a)];
    if (!c && (c = C._, !c)) {
      throw u("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Ba(a, b) {
  if (a ? a.Ha : a) {
    return a.Ha(a, b);
  }
  var c;
  c = Ba[m(null == a ? null : a)];
  if (!c && (c = Ba._, !c)) {
    throw u("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Ca(a, b, c) {
  if (a ? a.wa : a) {
    return a.wa(a, b, c);
  }
  var d;
  d = Ca[m(null == a ? null : a)];
  if (!d && (d = Ca._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Da = {};
function Ea(a, b) {
  if (a ? a.Ya : a) {
    return a.Ya(a, b);
  }
  var c;
  c = Ea[m(null == a ? null : a)];
  if (!c && (c = Ea._, !c)) {
    throw u("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Fa = {};
function Ga(a) {
  if (a ? a.Za : a) {
    return a.Za();
  }
  var b;
  b = Ga[m(null == a ? null : a)];
  if (!b && (b = Ga._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ha(a) {
  if (a ? a.cb : a) {
    return a.cb();
  }
  var b;
  b = Ha[m(null == a ? null : a)];
  if (!b && (b = Ha._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ia = {};
function Ka(a, b) {
  if (a ? a.fb : a) {
    return a.fb(0, b);
  }
  var c;
  c = Ka[m(null == a ? null : a)];
  if (!c && (c = Ka._, !c)) {
    throw u("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
var La = {};
function Ma(a, b, c) {
  if (a ? a.$a : a) {
    return a.$a(a, b, c);
  }
  var d;
  d = Ma[m(null == a ? null : a)];
  if (!d && (d = Ma._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Na(a) {
  if (a ? a.ob : a) {
    return a.state;
  }
  var b;
  b = Na[m(null == a ? null : a)];
  if (!b && (b = Na._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Oa = {};
function Pa(a) {
  if (a ? a.F : a) {
    return a.F(a);
  }
  var b;
  b = Pa[m(null == a ? null : a)];
  if (!b && (b = Pa._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Qa = {};
function Ra(a, b) {
  if (a ? a.H : a) {
    return a.H(a, b);
  }
  var c;
  c = Ra[m(null == a ? null : a)];
  if (!c && (c = Ra._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Sa = {}, Ta = function() {
  function a(a, b, c) {
    if (a ? a.P : a) {
      return a.P(a, b, c);
    }
    var h;
    h = Ta[m(null == a ? null : a)];
    if (!h && (h = Ta._, !h)) {
      throw u("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.O : a) {
      return a.O(a, b);
    }
    var c;
    c = Ta[m(null == a ? null : a)];
    if (!c && (c = Ta._, !c)) {
      throw u("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Ua(a, b) {
  if (a ? a.t : a) {
    return a.t(a, b);
  }
  var c;
  c = Ua[m(null == a ? null : a)];
  if (!c && (c = Ua._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Va(a) {
  if (a ? a.v : a) {
    return a.v(a);
  }
  var b;
  b = Va[m(null == a ? null : a)];
  if (!b && (b = Va._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Wa = {};
function Xa(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = Xa[m(null == a ? null : a)];
  if (!b && (b = Xa._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var Ya = {};
function D(a, b) {
  if (a ? a.ib : a) {
    return a.ib(0, b);
  }
  var c;
  c = D[m(null == a ? null : a)];
  if (!c && (c = D._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Za = {};
function $a(a, b, c) {
  if (a ? a.u : a) {
    return a.u(a, b, c);
  }
  var d;
  d = $a[m(null == a ? null : a)];
  if (!d && (d = $a._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function ab(a, b, c) {
  if (a ? a.hb : a) {
    return a.hb(0, b, c);
  }
  var d;
  d = ab[m(null == a ? null : a)];
  if (!d && (d = ab._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function bb(a) {
  if (a ? a.xa : a) {
    return a.xa(a);
  }
  var b;
  b = bb[m(null == a ? null : a)];
  if (!b && (b = bb._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function cb(a, b) {
  if (a ? a.oa : a) {
    return a.oa(a, b);
  }
  var c;
  c = cb[m(null == a ? null : a)];
  if (!c && (c = cb._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function db(a) {
  if (a ? a.pa : a) {
    return a.pa(a);
  }
  var b;
  b = db[m(null == a ? null : a)];
  if (!b && (b = db._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function eb(a, b, c) {
  if (a ? a.za : a) {
    return a.za(a, b, c);
  }
  var d;
  d = eb[m(null == a ? null : a)];
  if (!d && (d = eb._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function fb(a, b, c) {
  if (a ? a.gb : a) {
    return a.gb(0, b, c);
  }
  var d;
  d = fb[m(null == a ? null : a)];
  if (!d && (d = fb._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function gb(a) {
  if (a ? a.ab : a) {
    return a.ab();
  }
  var b;
  b = gb[m(null == a ? null : a)];
  if (!b && (b = gb._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function hb(a) {
  if (a ? a.Ja : a) {
    return a.Ja(a);
  }
  var b;
  b = hb[m(null == a ? null : a)];
  if (!b && (b = hb._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function ib(a) {
  if (a ? a.Ka : a) {
    return a.Ka(a);
  }
  var b;
  b = ib[m(null == a ? null : a)];
  if (!b && (b = ib._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function jb(a) {
  if (a ? a.Ia : a) {
    return a.Ia(a);
  }
  var b;
  b = jb[m(null == a ? null : a)];
  if (!b && (b = jb._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function kb(a) {
  this.Bb = a;
  this.n = 0;
  this.h = 1073741824;
}
kb.prototype.ib = function(a, b) {
  return this.Bb.append(b);
};
function E(a) {
  var b = new da;
  a.u(null, new kb(b), ha());
  return "" + v(b);
}
function lb(a, b) {
  if (p(mb.a ? mb.a(a, b) : mb.call(null, a, b))) {
    return 0;
  }
  var c = oa(a.R);
  if (p(c ? b.R : c)) {
    return-1;
  }
  if (p(a.R)) {
    if (oa(b.R)) {
      return 1;
    }
    c = nb.a ? nb.a(a.R, b.R) : nb.call(null, a.R, b.R);
    return 0 === c ? nb.a ? nb.a(a.name, b.name) : nb.call(null, a.name, b.name) : c;
  }
  return ob ? nb.a ? nb.a(a.name, b.name) : nb.call(null, a.name, b.name) : null;
}
function pb(a, b, c, d, e) {
  this.R = a;
  this.name = b;
  this.ma = c;
  this.na = d;
  this.Y = e;
  this.h = 2154168321;
  this.n = 4096;
}
f = pb.prototype;
f.u = function(a, b) {
  return D(b, this.ma);
};
f.v = function() {
  var a = this.na;
  return null != a ? a : this.na = a = qb.a ? qb.a(F.b ? F.b(this.R) : F.call(null, this.R), F.b ? F.b(this.name) : F.call(null, this.name)) : qb.call(null, F.b ? F.b(this.R) : F.call(null, this.R), F.b ? F.b(this.name) : F.call(null, this.name));
};
f.H = function(a, b) {
  return new pb(this.R, this.name, this.ma, this.na, b);
};
f.F = function() {
  return this.Y;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return C.c(c, this, null);
      case 3:
        return C.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.b = function(a) {
  return C.c(a, this, null);
};
f.a = function(a, b) {
  return C.c(a, this, b);
};
f.t = function(a, b) {
  return b instanceof pb ? this.ma === b.ma : !1;
};
f.toString = function() {
  return this.ma;
};
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 8388608 || a.Jb)) {
    return a.G(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new rb(a, 0);
  }
  if (r(Wa, a)) {
    return Xa(a);
  }
  if (s) {
    throw Error([v(a), v("is not ISeqable")].join(""));
  }
  return null;
}
function I(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.h & 64 || a.ya)) {
    return a.L(null);
  }
  a = G(a);
  return null == a ? null : A(a);
}
function J(a) {
  return null != a ? a && (a.h & 64 || a.ya) ? a.T(null) : (a = G(a)) ? B(a) : L : L;
}
function N(a) {
  return null == a ? null : a && (a.h & 128 || a.eb) ? a.S(null) : G(J(a));
}
var mb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Ua(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (N(e)) {
            a = d, d = I(e), e = N(e);
          } else {
            return b.a(d, I(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.j = 2;
    a.g = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 2;
  b.g = c.g;
  b.b = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
ta["null"] = !0;
x["null"] = function() {
  return 0;
};
Date.prototype.t = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Ua.number = function(a, b) {
  return a === b;
};
Oa["function"] = !0;
Pa["function"] = function() {
  return null;
};
ra["function"] = !0;
Va._ = function(a) {
  return a[aa] || (a[aa] = ++ba);
};
var sb = function() {
  function a(a, b, c, d) {
    for (var l = x(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, z.a(a, d)) : b.call(null, c, z.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = x(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, z.a(a, l)) : b.call(null, c, z.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = x(a);
    if (0 === c) {
      return b.p ? b.p() : b.call(null);
    }
    for (var d = z.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, z.a(a, l)) : b.call(null, d, z.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.m = a;
  return d;
}(), tb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.p ? b.p() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.m = a;
  return d;
}();
function ub(a) {
  return a ? a.h & 2 || a.nb ? !0 : a.h ? !1 : r(ta, a) : r(ta, a);
}
function vb(a) {
  return a ? a.h & 16 || a.bb ? !0 : a.h ? !1 : r(xa, a) : r(xa, a);
}
function rb(a, b) {
  this.d = a;
  this.l = b;
  this.h = 166199550;
  this.n = 8192;
}
f = rb.prototype;
f.v = function() {
  return wb.b ? wb.b(this) : wb.call(null, this);
};
f.S = function() {
  return this.l + 1 < this.d.length ? new rb(this.d, this.l + 1) : null;
};
f.B = function(a, b) {
  return P.a ? P.a(b, this) : P.call(null, b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return tb.m(this.d, b, this.d[this.l], this.l + 1);
};
f.P = function(a, b, c) {
  return tb.m(this.d, b, c, this.l);
};
f.G = function() {
  return this;
};
f.I = function() {
  return this.d.length - this.l;
};
f.L = function() {
  return this.d[this.l];
};
f.T = function() {
  return this.l + 1 < this.d.length ? new rb(this.d, this.l + 1) : L;
};
f.t = function(a, b) {
  return Q.a ? Q.a(this, b) : Q.call(null, this, b);
};
f.N = function(a, b) {
  var c = b + this.l;
  return c < this.d.length ? this.d[c] : null;
};
f.W = function(a, b, c) {
  a = b + this.l;
  return a < this.d.length ? this.d[a] : c;
};
f.J = function() {
  return L;
};
var xb = function() {
  function a(a, b) {
    return b < a.length ? new rb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), O = function() {
  function a(a, b) {
    return xb.a(a, b);
  }
  function b(a) {
    return xb.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function yb(a) {
  for (;;) {
    var b = N(a);
    if (null != b) {
      a = b;
    } else {
      return I(a);
    }
  }
}
Ua._ = function(a, b) {
  return a === b;
};
var zb = function() {
  function a(a, b) {
    return null != a ? wa(a, b) : wa(L, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (p(e)) {
          a = b.a(a, d), d = I(e), e = N(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.j = 2;
    a.g = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 2;
  b.g = c.g;
  b.a = a;
  b.e = c.e;
  return b;
}();
function R(a) {
  if (null != a) {
    if (a && (a.h & 2 || a.nb)) {
      a = a.I(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (r(ta, a)) {
            a = x(a);
          } else {
            if (s) {
              a: {
                a = G(a);
                for (var b = 0;;) {
                  if (ub(a)) {
                    a = b + x(a);
                    break a;
                  }
                  a = N(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var Ab = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return G(a) ? I(a) : c;
      }
      if (vb(a)) {
        return z.c(a, b, c);
      }
      if (G(a)) {
        a = N(a), b -= 1;
      } else {
        return s ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (G(a)) {
          return I(a);
        }
        throw Error("Index out of bounds");
      }
      if (vb(a)) {
        return z.a(a, b);
      }
      if (G(a)) {
        var c = N(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (s) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Bb = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.h & 16 || a.bb)) {
        return a.W(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (r(xa, a)) {
        return z.a(a, b);
      }
      if (s) {
        if (a ? a.h & 64 || a.ya || (a.h ? 0 : r(ya, a)) : r(ya, a)) {
          return Ab.c(a, b, c);
        }
        throw Error([v("nth not supported on this type "), v(qa(pa(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.h & 16 || a.bb)) {
      return a.N(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (r(xa, a)) {
      return z.a(a, b);
    }
    if (s) {
      if (a ? a.h & 64 || a.ya || (a.h ? 0 : r(ya, a)) : r(ya, a)) {
        return Ab.a(a, b);
      }
      throw Error([v("nth not supported on this type "), v(qa(pa(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Cb = function() {
  function a(a, b, c) {
    return null != a ? a && (a.h & 256 || a.pb) ? a.D(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : r(Aa, a) ? C.c(a, b, c) : s ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.h & 256 || a.pb) ? a.C(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : r(Aa, a) ? C.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Eb = function() {
  function a(a, b, c) {
    return null != a ? Ca(a, b, c) : Db.a ? Db.a([b], [c]) : Db.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = O(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), p(l)) {
          d = I(l), e = I(N(l)), l = N(N(l));
        } else {
          return a;
        }
      }
    }
    a.j = 3;
    a.g = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var l = I(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.e(b, e, g, O(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 3;
  b.g = c.g;
  b.c = a;
  b.e = c.e;
  return b;
}();
function Fb(a) {
  var b = "function" == m(a);
  return b ? b : a ? p(p(null) ? null : a.mb) ? !0 : a.Ob ? !1 : r(ra, a) : r(ra, a);
}
var Hb = function Gb(b, c) {
  return Fb(b) && !(b ? b.h & 262144 || b.Nb || (b.h ? 0 : r(Qa, b)) : r(Qa, b)) ? Gb(function() {
    "undefined" === typeof ea && (ea = function(b, c, g, h) {
      this.i = b;
      this.Da = c;
      this.Db = g;
      this.Ab = h;
      this.n = 0;
      this.h = 393217;
    }, ea.kb = !0, ea.jb = "cljs.core/t5051", ea.zb = function(b) {
      return D(b, "cljs.core/t5051");
    }, ea.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return S.a ? S.a(b.Da, d) : S.call(null, b.Da, d);
      }
      b.j = 1;
      b.g = function(b) {
        var d = I(b);
        b = J(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), ea.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(w(c)));
    }, ea.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = O(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return S.a ? S.a(self__.Da, b) : S.call(null, self__.Da, b);
      }
      b.j = 0;
      b.g = function(b) {
        b = G(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), ea.prototype.mb = !0, ea.prototype.F = function() {
      return this.Ab;
    }, ea.prototype.H = function(b, c) {
      return new ea(this.i, this.Da, this.Db, c);
    });
    return new ea(c, b, Gb, null);
  }(), c) : null == b ? null : Ra(b, c);
};
function Ib(a) {
  var b = null != a;
  return(b ? a ? a.h & 131072 || a.rb || (a.h ? 0 : r(Oa, a)) : r(Oa, a) : b) ? Pa(a) : null;
}
var Jb = function() {
  function a(a, b) {
    return null == a ? null : Ka(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (p(e)) {
          d = I(e), e = N(e);
        } else {
          return a;
        }
      }
    }
    a.j = 2;
    a.g = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = J(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 2;
  b.g = c.g;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}(), Kb = {}, Lb = 0;
function F(a) {
  if (a && (a.h & 4194304 || a.Hb)) {
    a = a.v(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < Lb && (Kb = {}, Lb = 0);
            var b = Kb[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              Kb[a] = b;
              Lb += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : s ? Va(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Mb(a) {
  return a ? a.h & 16384 || a.Mb ? !0 : a.h ? !1 : r(La, a) : r(La, a);
}
function Nb(a) {
  return a ? a.n & 512 || a.Eb ? !0 : !1 : !1;
}
function Ob(a) {
  var b = [];
  ca(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function Qb(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Rb = {};
function Sb(a) {
  return null == a ? !1 : a ? a.h & 64 || a.ya ? !0 : a.h ? !1 : r(ya, a) : r(ya, a);
}
function Tb(a) {
  return p(a) ? !0 : !1;
}
function nb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (pa(a) === pa(b)) {
    return a && (a.n & 2048 || a.Ea) ? a.Fa(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (s) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Ub = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = nb(Bb.a(a, h), Bb.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var g = R(a), h = R(b);
    return g < h ? -1 : g > h ? 1 : s ? c.m(a, b, g, 0) : null;
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.m = a;
  return c;
}(), T = function() {
  function a(a, b, c) {
    for (c = G(c);;) {
      if (c) {
        b = a.a ? a.a(b, I(c)) : a.call(null, b, I(c)), c = N(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = G(b);
    return c ? Vb.c ? Vb.c(a, I(c), N(c)) : Vb.call(null, a, I(c), N(c)) : a.p ? a.p() : a.call(null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Vb = function() {
  function a(a, b, c) {
    return c && (c.h & 524288 || c.tb) ? c.P(null, a, b) : c instanceof Array ? tb.c(c, a, b) : "string" === typeof c ? tb.c(c, a, b) : r(Sa, c) ? Ta.c(c, a, b) : s ? T.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.h & 524288 || b.tb) ? b.O(null, a) : b instanceof Array ? tb.a(b, a) : "string" === typeof b ? tb.a(b, a) : r(Sa, b) ? Ta.a(b, a) : s ? T.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Wb = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Vb.c(a, b + c, d);
    }
    b.j = 2;
    b.g = function(a) {
      var b = I(a);
      a = N(a);
      var c = I(a);
      a = J(a);
      return d(b, c, a);
    };
    b.e = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.e(a, d, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.j = 2;
  a.g = b.g;
  a.p = function() {
    return 0;
  };
  a.b = function(a) {
    return a;
  };
  a.a = function(a, b) {
    return a + b;
  };
  a.e = b.e;
  return a;
}(), Xb = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Vb.c(a, b * c, d);
    }
    b.j = 2;
    b.g = function(a) {
      var b = I(a);
      a = N(a);
      var c = I(a);
      a = J(a);
      return d(b, c, a);
    };
    b.e = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 1;
      case 1:
        return a;
      case 2:
        return a * d;
      default:
        return b.e(a, d, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.j = 2;
  a.g = b.g;
  a.p = function() {
    return 1;
  };
  a.b = function(a) {
    return a;
  };
  a.a = function(a, b) {
    return a * b;
  };
  a.e = b.e;
  return a;
}();
function Yb(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
var Zb = function() {
  function a(a) {
    return a * c.p();
  }
  function b() {
    return Math.random.p ? Math.random.p() : Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.b = a;
  return c;
}();
function $b(a) {
  return Yb(Zb.b(a));
}
function ac(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
var v = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new da(b.b(a)), l = d;;) {
        if (p(l)) {
          e = e.append(b.b(I(l))), l = N(l);
        } else {
          return e.toString();
        }
      }
    }
    a.j = 1;
    a.g = function(a) {
      var b = I(a);
      a = J(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, O(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 1;
  b.g = c.g;
  b.p = function() {
    return "";
  };
  b.b = a;
  b.e = c.e;
  return b;
}();
function Q(a, b) {
  return Tb((b ? b.h & 16777216 || b.Kb || (b.h ? 0 : r(Ya, b)) : r(Ya, b)) ? function() {
    for (var c = G(a), d = G(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (mb.a(I(c), I(d))) {
        c = N(c), d = N(d);
      } else {
        return s ? !1 : null;
      }
    }
  }() : null);
}
function qb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function wb(a) {
  if (G(a)) {
    var b = F(I(a));
    for (a = N(a);;) {
      if (null == a) {
        return b;
      }
      b = qb(b, F(I(a)));
      a = N(a);
    }
  } else {
    return 0;
  }
}
function bc(a) {
  var b = 0;
  for (a = G(a);;) {
    if (a) {
      var c = I(a), b = (b + (F(cc.b ? cc.b(c) : cc.call(null, c)) ^ F(dc.b ? dc.b(c) : dc.call(null, c)))) % 4503599627370496;
      a = N(a);
    } else {
      return b;
    }
  }
}
function ec(a, b, c, d, e) {
  this.i = a;
  this.Aa = b;
  this.ha = c;
  this.count = d;
  this.k = e;
  this.h = 65937646;
  this.n = 8192;
}
f = ec.prototype;
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = wb(this);
};
f.S = function() {
  return 1 === this.count ? null : this.ha;
};
f.B = function(a, b) {
  return new ec(this.i, b, this, this.count + 1, null);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return T.a(b, this);
};
f.P = function(a, b, c) {
  return T.c(b, c, this);
};
f.G = function() {
  return this;
};
f.I = function() {
  return this.count;
};
f.L = function() {
  return this.Aa;
};
f.T = function() {
  return 1 === this.count ? L : this.ha;
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return new ec(b, this.Aa, this.ha, this.count, this.k);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return L;
};
function fc(a) {
  this.i = a;
  this.h = 65937614;
  this.n = 8192;
}
f = fc.prototype;
f.v = function() {
  return 0;
};
f.S = function() {
  return null;
};
f.B = function(a, b) {
  return new ec(this.i, b, null, 1, null);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return T.a(b, this);
};
f.P = function(a, b, c) {
  return T.c(b, c, this);
};
f.G = function() {
  return null;
};
f.I = function() {
  return 0;
};
f.L = function() {
  return null;
};
f.T = function() {
  return L;
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return new fc(b);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return this;
};
var L = new fc(null), gc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof rb && 0 === a.l) {
      b = a.d;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.L(null)), a = a.S(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = L;;) {
      if (0 < a) {
        var g = a - 1, e = e.B(null, b[a - 1]);
        a = g;
      } else {
        return e;
      }
    }
  }
  a.j = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function hc(a, b, c, d) {
  this.i = a;
  this.Aa = b;
  this.ha = c;
  this.k = d;
  this.h = 65929452;
  this.n = 8192;
}
f = hc.prototype;
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = wb(this);
};
f.S = function() {
  return null == this.ha ? null : G(this.ha);
};
f.B = function(a, b) {
  return new hc(null, b, this, this.k);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return T.a(b, this);
};
f.P = function(a, b, c) {
  return T.c(b, c, this);
};
f.G = function() {
  return this;
};
f.L = function() {
  return this.Aa;
};
f.T = function() {
  return null == this.ha ? L : this.ha;
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return new hc(b, this.Aa, this.ha, this.k);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Hb(L, this.i);
};
function P(a, b) {
  var c = null == b;
  return(c ? c : b && (b.h & 64 || b.ya)) ? new hc(null, a, b, null) : new hc(null, a, G(b), null);
}
function U(a, b, c, d) {
  this.R = a;
  this.name = b;
  this.ja = c;
  this.na = d;
  this.h = 2153775105;
  this.n = 4096;
}
f = U.prototype;
f.u = function(a, b) {
  return D(b, [v(":"), v(this.ja)].join(""));
};
f.v = function() {
  null == this.na && (this.na = qb(F(this.R), F(this.name)) + 2654435769);
  return this.na;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Cb.a(c, this);
      case 3:
        return Cb.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.b = function(a) {
  return Cb.a(a, this);
};
f.a = function(a, b) {
  return Cb.c(a, this, b);
};
f.t = function(a, b) {
  return b instanceof U ? this.ja === b.ja : !1;
};
f.toString = function() {
  return[v(":"), v(this.ja)].join("");
};
var jc = function() {
  function a(a, b) {
    return new U(a, b, [v(p(a) ? [v(a), v("/")].join("") : null), v(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof U) {
      return a;
    }
    if (a instanceof pb) {
      var b;
      if (a && (a.n & 4096 || a.sb)) {
        b = a.R;
      } else {
        throw Error([v("Doesn't support namespace: "), v(a)].join(""));
      }
      return new U(b, ic.b ? ic.b(a) : ic.call(null, a), a.ma, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function W(a, b, c, d) {
  this.i = a;
  this.ua = b;
  this.r = c;
  this.k = d;
  this.n = 0;
  this.h = 32374988;
}
f = W.prototype;
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = wb(this);
};
f.S = function() {
  Xa(this);
  return null == this.r ? null : N(this.r);
};
f.B = function(a, b) {
  return P(b, this);
};
f.toString = function() {
  return E(this);
};
function kc(a) {
  null != a.ua && (a.r = a.ua.p ? a.ua.p() : a.ua.call(null), a.ua = null);
  return a.r;
}
f.O = function(a, b) {
  return T.a(b, this);
};
f.P = function(a, b, c) {
  return T.c(b, c, this);
};
f.G = function() {
  kc(this);
  if (null == this.r) {
    return null;
  }
  for (var a = this.r;;) {
    if (a instanceof W) {
      a = kc(a);
    } else {
      return this.r = a, G(this.r);
    }
  }
};
f.L = function() {
  Xa(this);
  return null == this.r ? null : I(this.r);
};
f.T = function() {
  Xa(this);
  return null != this.r ? J(this.r) : L;
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return new W(b, this.ua, this.r, this.k);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Hb(L, this.i);
};
function lc(a, b) {
  this.Ga = a;
  this.end = b;
  this.n = 0;
  this.h = 2;
}
lc.prototype.I = function() {
  return this.end;
};
lc.prototype.add = function(a) {
  this.Ga[this.end] = a;
  return this.end += 1;
};
lc.prototype.V = function() {
  var a = new mc(this.Ga, 0, this.end);
  this.Ga = null;
  return a;
};
function mc(a, b, c) {
  this.d = a;
  this.s = b;
  this.end = c;
  this.n = 0;
  this.h = 524306;
}
f = mc.prototype;
f.O = function(a, b) {
  return tb.m(this.d, b, this.d[this.s], this.s + 1);
};
f.P = function(a, b, c) {
  return tb.m(this.d, b, c, this.s);
};
f.ab = function() {
  if (this.s === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new mc(this.d, this.s + 1, this.end);
};
f.N = function(a, b) {
  return this.d[this.s + b];
};
f.W = function(a, b, c) {
  return 0 <= b && b < this.end - this.s ? this.d[this.s + b] : c;
};
f.I = function() {
  return this.end - this.s;
};
var nc = function() {
  function a(a, b, c) {
    return new mc(a, b, c);
  }
  function b(a, b) {
    return new mc(a, b, a.length);
  }
  function c(a) {
    return new mc(a, 0, a.length);
  }
  var d = null, d = function(d, g, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d;
}();
function oc(a, b, c, d) {
  this.V = a;
  this.ba = b;
  this.i = c;
  this.k = d;
  this.h = 31850732;
  this.n = 1536;
}
f = oc.prototype;
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = wb(this);
};
f.S = function() {
  if (1 < x(this.V)) {
    return new oc(gb(this.V), this.ba, this.i, null);
  }
  var a = Xa(this.ba);
  return null == a ? null : a;
};
f.B = function(a, b) {
  return P(b, this);
};
f.toString = function() {
  return E(this);
};
f.G = function() {
  return this;
};
f.L = function() {
  return z.a(this.V, 0);
};
f.T = function() {
  return 1 < x(this.V) ? new oc(gb(this.V), this.ba, this.i, null) : null == this.ba ? L : this.ba;
};
f.Ia = function() {
  return null == this.ba ? null : this.ba;
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return new oc(this.V, this.ba, b, this.k);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Hb(L, this.i);
};
f.Ja = function() {
  return this.V;
};
f.Ka = function() {
  return null == this.ba ? L : this.ba;
};
function pc(a, b) {
  return 0 === x(a) ? b : new oc(a, b, null, null);
}
function qc(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(I(a)), a = N(a);
    } else {
      return b;
    }
  }
}
function rc(a, b) {
  if (ub(a)) {
    return R(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G(c)) {
      c = N(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var tc = function sc(b) {
  return null == b ? null : null == N(b) ? G(I(b)) : s ? P(I(b), sc(N(b))) : null;
}, uc = function() {
  function a(a, b) {
    return new W(null, function() {
      var c = G(a);
      return c ? Nb(c) ? pc(hb(c), d.a(ib(c), b)) : P(I(c), d.a(J(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new W(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new W(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, g) {
      var e = null;
      2 < arguments.length && (e = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, e);
    }
    function b(a, c, e) {
      return function t(a, b) {
        return new W(null, function() {
          var c = G(a);
          return c ? Nb(c) ? pc(hb(c), t(ib(c), b)) : P(I(c), t(J(c), b)) : p(b) ? t(I(b), N(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.j = 2;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.e(d, h, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 2;
  d.g = e.g;
  d.p = c;
  d.b = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), vc = function() {
  function a(a, b, c, d) {
    return P(a, P(b, P(c, d)));
  }
  function b(a, b, c) {
    return P(a, P(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, q) {
      var t = null;
      4 < arguments.length && (t = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, t);
    }
    function b(a, c, d, e, g) {
      return P(a, P(c, P(d, P(e, tc(g)))));
    }
    a.j = 4;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var q = I(a);
      a = J(a);
      return b(c, d, e, q, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return G(c);
      case 2:
        return P(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.e(c, g, h, k, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.j = 4;
  c.g = d.g;
  c.b = function(a) {
    return G(a);
  };
  c.a = function(a, b) {
    return P(a, b);
  };
  c.c = b;
  c.m = a;
  c.e = d.e;
  return c;
}();
function wc(a) {
  return db(a);
}
var xc = function() {
  var a = null, b = function() {
    function a(c, g, h) {
      var k = null;
      2 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, g, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = cb(a, c), p(d)) {
          c = I(d), d = N(d);
        } else {
          return a;
        }
      }
    }
    a.j = 2;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var h = I(a);
      a = J(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return cb(a, d);
      default:
        return b.e(a, d, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.j = 2;
  a.g = b.g;
  a.a = function(a, b) {
    return cb(a, b);
  };
  a.e = b.e;
  return a;
}(), yc = function() {
  var a = null, b = function() {
    function a(c, g, h, k) {
      var l = null;
      3 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, g, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = eb(a, c, d), p(k)) {
          c = I(k), d = I(N(k)), k = N(N(k));
        } else {
          return a;
        }
      }
    }
    a.j = 3;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var h = I(a);
      a = N(a);
      var k = I(a);
      a = J(a);
      return b(c, h, k, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, g) {
    switch(arguments.length) {
      case 3:
        return eb(a, d, e);
      default:
        return b.e(a, d, e, O(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.j = 3;
  a.g = b.g;
  a.c = function(a, b, e) {
    return eb(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function zc(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.p ? a.p() : a.call(null);
  }
  c = A(d);
  var e = B(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = A(e), g = B(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = A(g), h = B(g);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var g = A(h), k = B(h);
  if (4 === b) {
    return a.m ? a.m(c, d, e, g) : a.m ? a.m(c, d, e, g) : a.call(null, c, d, e, g);
  }
  h = A(k);
  k = B(k);
  if (5 === b) {
    return a.w ? a.w(c, d, e, g, h) : a.w ? a.w(c, d, e, g, h) : a.call(null, c, d, e, g, h);
  }
  a = A(k);
  var l = B(k);
  if (6 === b) {
    return a.ea ? a.ea(c, d, e, g, h, a) : a.ea ? a.ea(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a);
  }
  var k = A(l), n = B(l);
  if (7 === b) {
    return a.ra ? a.ra(c, d, e, g, h, a, k) : a.ra ? a.ra(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k);
  }
  var l = A(n), q = B(n);
  if (8 === b) {
    return a.Wa ? a.Wa(c, d, e, g, h, a, k, l) : a.Wa ? a.Wa(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l);
  }
  var n = A(q), t = B(q);
  if (9 === b) {
    return a.Xa ? a.Xa(c, d, e, g, h, a, k, l, n) : a.Xa ? a.Xa(c, d, e, g, h, a, k, l, n) : a.call(null, c, d, e, g, h, a, k, l, n);
  }
  var q = A(t), y = B(t);
  if (10 === b) {
    return a.La ? a.La(c, d, e, g, h, a, k, l, n, q) : a.La ? a.La(c, d, e, g, h, a, k, l, n, q) : a.call(null, c, d, e, g, h, a, k, l, n, q);
  }
  var t = A(y), H = B(y);
  if (11 === b) {
    return a.Ma ? a.Ma(c, d, e, g, h, a, k, l, n, q, t) : a.Ma ? a.Ma(c, d, e, g, h, a, k, l, n, q, t) : a.call(null, c, d, e, g, h, a, k, l, n, q, t);
  }
  var y = A(H), K = B(H);
  if (12 === b) {
    return a.Na ? a.Na(c, d, e, g, h, a, k, l, n, q, t, y) : a.Na ? a.Na(c, d, e, g, h, a, k, l, n, q, t, y) : a.call(null, c, d, e, g, h, a, k, l, n, q, t, y);
  }
  var H = A(K), M = B(K);
  if (13 === b) {
    return a.Oa ? a.Oa(c, d, e, g, h, a, k, l, n, q, t, y, H) : a.Oa ? a.Oa(c, d, e, g, h, a, k, l, n, q, t, y, H) : a.call(null, c, d, e, g, h, a, k, l, n, q, t, y, H);
  }
  var K = A(M), V = B(M);
  if (14 === b) {
    return a.Pa ? a.Pa(c, d, e, g, h, a, k, l, n, q, t, y, H, K) : a.Pa ? a.Pa(c, d, e, g, h, a, k, l, n, q, t, y, H, K) : a.call(null, c, d, e, g, h, a, k, l, n, q, t, y, H, K);
  }
  var M = A(V), ga = B(V);
  if (15 === b) {
    return a.Qa ? a.Qa(c, d, e, g, h, a, k, l, n, q, t, y, H, K, M) : a.Qa ? a.Qa(c, d, e, g, h, a, k, l, n, q, t, y, H, K, M) : a.call(null, c, d, e, g, h, a, k, l, n, q, t, y, H, K, M);
  }
  var V = A(ga), sa = B(ga);
  if (16 === b) {
    return a.Ra ? a.Ra(c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V) : a.Ra ? a.Ra(c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V) : a.call(null, c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V);
  }
  var ga = A(sa), Ja = B(sa);
  if (17 === b) {
    return a.Sa ? a.Sa(c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V, ga) : a.Sa ? a.Sa(c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V, ga) : a.call(null, c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V, ga);
  }
  var sa = A(Ja), Pb = B(Ja);
  if (18 === b) {
    return a.Ta ? a.Ta(c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V, ga, sa) : a.Ta ? a.Ta(c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V, ga, sa) : a.call(null, c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V, ga, sa);
  }
  Ja = A(Pb);
  Pb = B(Pb);
  if (19 === b) {
    return a.Ua ? a.Ua(c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V, ga, sa, Ja) : a.Ua ? a.Ua(c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V, ga, sa, Ja) : a.call(null, c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V, ga, sa, Ja);
  }
  var Ec = A(Pb);
  B(Pb);
  if (20 === b) {
    return a.Va ? a.Va(c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V, ga, sa, Ja, Ec) : a.Va ? a.Va(c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V, ga, sa, Ja, Ec) : a.call(null, c, d, e, g, h, a, k, l, n, q, t, y, H, K, M, V, ga, sa, Ja, Ec);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var S = function() {
  function a(a, b, c, d, g) {
    b = vc.m(b, c, d, g);
    c = a.j;
    return a.g ? (d = rc(b, c + 1), d <= c ? zc(a, d, b) : a.g(b)) : a.apply(a, qc(b));
  }
  function b(a, b, c, d) {
    b = vc.c(b, c, d);
    c = a.j;
    return a.g ? (d = rc(b, c + 1), d <= c ? zc(a, d, b) : a.g(b)) : a.apply(a, qc(b));
  }
  function c(a, b, c) {
    b = vc.a(b, c);
    c = a.j;
    if (a.g) {
      var d = rc(b, c + 1);
      return d <= c ? zc(a, d, b) : a.g(b);
    }
    return a.apply(a, qc(b));
  }
  function d(a, b) {
    var c = a.j;
    if (a.g) {
      var d = rc(b, c + 1);
      return d <= c ? zc(a, d, b) : a.g(b);
    }
    return a.apply(a, qc(b));
  }
  var e = null, g = function() {
    function a(c, d, g, e, h, H) {
      var K = null;
      5 < arguments.length && (K = O(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, g, e, h, K);
    }
    function b(a, c, d, g, e, h) {
      c = P(c, P(d, P(g, P(e, tc(h)))));
      d = a.j;
      return a.g ? (g = rc(c, d + 1), g <= d ? zc(a, g, c) : a.g(c)) : a.apply(a, qc(c));
    }
    a.j = 5;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var g = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var h = I(a);
      a = J(a);
      return b(c, d, g, e, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, q, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, q);
      default:
        return g.e(e, k, l, n, q, O(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.j = 5;
  e.g = g.g;
  e.a = d;
  e.c = c;
  e.m = b;
  e.w = a;
  e.e = g.e;
  return e;
}();
function Ac(a, b) {
  for (;;) {
    if (null == G(b)) {
      return!0;
    }
    if (p(a.b ? a.b(I(b)) : a.call(null, I(b)))) {
      var c = a, d = N(b);
      a = c;
      b = d;
    } else {
      return s ? !1 : null;
    }
  }
}
function Bc(a) {
  return a;
}
function Cc(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l);
      }
      function c(b, d, e) {
        return oa(S.m(a, b, d, e));
      }
      b.j = 2;
      b.g = function(a) {
        var b = I(a);
        a = N(a);
        var d = I(a);
        a = J(a);
        return c(b, d, a);
      };
      b.e = c;
      return b;
    }(), b = function(b, e, g) {
      switch(arguments.length) {
        case 0:
          return oa(a.p ? a.p() : a.call(null));
        case 1:
          return oa(a.b ? a.b(b) : a.call(null, b));
        case 2:
          return oa(a.a ? a.a(b, e) : a.call(null, b, e));
        default:
          return c.e(b, e, O(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.j = 2;
    b.g = c.g;
    return b;
  }();
}
var Dc = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
        return q.call(this, b);
      }
      function q(e) {
        return S.w(a, b, c, d, e);
      }
      e.j = 0;
      e.g = function(a) {
        a = G(a);
        return q(a);
      };
      e.e = q;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return S.m(a, b, c, d);
      }
      d.j = 0;
      d.g = function(a) {
        a = G(a);
        return e(a);
      };
      d.e = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = O(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return S.c(a, b, c);
      }
      c.j = 0;
      c.g = function(a) {
        a = G(a);
        return d(a);
      };
      c.e = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, g, t) {
      var y = null;
      4 < arguments.length && (y = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, y);
    }
    function b(a, c, d, e, g) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = O(Array.prototype.slice.call(arguments, 0), 0));
          return h.call(this, c);
        }
        function h(b) {
          return S.w(a, c, d, e, uc.a(g, b));
        }
        b.j = 0;
        b.g = function(a) {
          a = G(a);
          return h(a);
        };
        b.e = h;
        return b;
      }();
    }
    a.j = 4;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var g = I(a);
      a = J(a);
      return b(c, d, e, g, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 4;
  d.g = e.g;
  d.b = function(a) {
    return a;
  };
  d.a = c;
  d.c = b;
  d.m = a;
  d.e = e.e;
  return d;
}(), Fc = function() {
  function a(a, b, c, e) {
    return new W(null, function() {
      var n = G(b), q = G(c), t = G(e);
      return n && q && t ? P(a.c ? a.c(I(n), I(q), I(t)) : a.call(null, I(n), I(q), I(t)), d.m(a, J(n), J(q), J(t))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new W(null, function() {
      var e = G(b), n = G(c);
      return e && n ? P(a.a ? a.a(I(e), I(n)) : a.call(null, I(e), I(n)), d.c(a, J(e), J(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new W(null, function() {
      var c = G(b);
      if (c) {
        if (Nb(c)) {
          for (var e = hb(c), n = R(e), q = new lc(Array(n), 0), t = 0;;) {
            if (t < n) {
              var y = a.b ? a.b(z.a(e, t)) : a.call(null, z.a(e, t));
              q.add(y);
              t += 1;
            } else {
              break;
            }
          }
          return pc(q.V(), d.a(a, ib(c)));
        }
        return P(a.b ? a.b(I(c)) : a.call(null, I(c)), d.a(a, J(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, g, t) {
      var y = null;
      4 < arguments.length && (y = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, y);
    }
    function b(a, c, e, g, h) {
      return d.a(function(b) {
        return S.a(a, b);
      }, function H(a) {
        return new W(null, function() {
          var b = d.a(G, a);
          return Ac(Bc, b) ? P(d.a(I, b), H(d.a(J, b))) : null;
        }, null, null);
      }(zb.e(h, g, O([e, c], 0))));
    }
    a.j = 4;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var g = I(a);
      a = J(a);
      return b(c, d, e, g, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.m = a;
  d.e = e.e;
  return d;
}(), Hc = function Gc(b, c) {
  return new W(null, function() {
    var d = G(c);
    if (d) {
      if (Nb(d)) {
        for (var e = hb(d), g = R(e), h = new lc(Array(g), 0), k = 0;;) {
          if (k < g) {
            if (p(b.b ? b.b(z.a(e, k)) : b.call(null, z.a(e, k)))) {
              var l = z.a(e, k);
              h.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return pc(h.V(), Gc(b, ib(d)));
      }
      e = I(d);
      d = J(d);
      return p(b.b ? b.b(e) : b.call(null, e)) ? P(e, Gc(b, d)) : Gc(b, d);
    }
    return null;
  }, null, null);
};
function Ic(a, b) {
  return null != a ? a && (a.n & 4 || a.Gb) ? wc(Vb.c(cb, bb(a), b)) : Vb.c(wa, a, b) : Vb.c(zb, L, b);
}
var Kc = function() {
  function a(a, b, c, d) {
    return Ic(Jc, Fc.m(a, b, c, d));
  }
  function b(a, b, c) {
    return Ic(Jc, Fc.c(a, b, c));
  }
  function c(a, b) {
    return wc(Vb.c(function(b, c) {
      return xc.a(b, a.b ? a.b(c) : a.call(null, c));
    }, bb(Jc), b));
  }
  var d = null, e = function() {
    function a(c, d, e, g, t) {
      var y = null;
      4 < arguments.length && (y = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, y);
    }
    function b(a, c, d, e, g) {
      return Ic(Jc, S.e(Fc, a, c, d, e, O([g], 0)));
    }
    a.j = 4;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var g = I(a);
      a = J(a);
      return b(c, d, e, g, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.m = a;
  d.e = e.e;
  return d;
}();
function Lc(a, b) {
  this.o = a;
  this.d = b;
}
function Mc(a) {
  return new Lc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Nc(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Oc(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Mc(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var Qc = function Pc(b, c, d, e) {
  var g = new Lc(d.o, w(d.d)), h = b.f - 1 >>> c & 31;
  5 === c ? g.d[h] = e : (d = d.d[h], b = null != d ? Pc(b, c - 5, d, e) : Oc(null, c - 5, e), g.d[h] = b);
  return g;
};
function Rc(a, b) {
  throw Error([v("No item "), v(a), v(" in vector of length "), v(b)].join(""));
}
function Sc(a, b) {
  if (0 <= b && b < a.f) {
    if (b >= Nc(a)) {
      return a.M;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      } else {
        return c.d;
      }
    }
  } else {
    return Rc(b, a.f);
  }
}
var Uc = function Tc(b, c, d, e, g) {
  var h = new Lc(d.o, w(d.d));
  if (0 === c) {
    h.d[e & 31] = g;
  } else {
    var k = e >>> c & 31;
    b = Tc(b, c - 5, d.d[k], e, g);
    h.d[k] = b;
  }
  return h;
};
function X(a, b, c, d, e, g) {
  this.i = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.M = e;
  this.k = g;
  this.n = 8196;
  this.h = 167668511;
}
f = X.prototype;
f.xa = function() {
  return new Vc(this.f, this.shift, Wc.b ? Wc.b(this.root) : Wc.call(null, this.root), Xc.b ? Xc.b(this.M) : Xc.call(null, this.M));
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = wb(this);
};
f.C = function(a, b) {
  return z.c(this, b, null);
};
f.D = function(a, b, c) {
  return z.c(this, b, c);
};
f.wa = function(a, b, c) {
  if ("number" === typeof b) {
    return Ma(this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.W(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.b = function(a) {
  return this.N(null, a);
};
f.a = function(a, b) {
  return this.W(null, a, b);
};
f.B = function(a, b) {
  if (32 > this.f - Nc(this)) {
    for (var c = this.M.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.M[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new X(this.i, this.f + 1, this.shift, this.root, d, null);
  }
  c = (d = this.f >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Mc(null), d.d[0] = this.root, e = Oc(null, this.shift, new Lc(null, this.M)), d.d[1] = e) : d = Qc(this, this.shift, this.root, new Lc(null, this.M));
  return new X(this.i, this.f + 1, c, d, [b], null);
};
f.Za = function() {
  return z.a(this, 0);
};
f.cb = function() {
  return z.a(this, 1);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return sb.a(this, b);
};
f.P = function(a, b, c) {
  return sb.c(this, b, c);
};
f.G = function() {
  return 0 === this.f ? null : 32 > this.f ? O.b(this.M) : s ? Y.c ? Y.c(this, 0, 0) : Y.call(null, this, 0, 0) : null;
};
f.I = function() {
  return this.f;
};
f.$a = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return Nc(this) <= b ? (a = w(this.M), a[b & 31] = c, new X(this.i, this.f, this.shift, this.root, a, null)) : new X(this.i, this.f, this.shift, Uc(this, this.shift, this.root, b, c), this.M, null);
  }
  if (b === this.f) {
    return wa(this, c);
  }
  if (s) {
    throw Error([v("Index "), v(b), v(" out of bounds  [0,"), v(this.f), v("]")].join(""));
  }
  return null;
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return new X(b, this.f, this.shift, this.root, this.M, this.k);
};
f.F = function() {
  return this.i;
};
f.N = function(a, b) {
  return Sc(this, b)[b & 31];
};
f.W = function(a, b, c) {
  return 0 <= b && b < this.f ? z.a(this, b) : c;
};
f.J = function() {
  return Hb(Jc, this.i);
};
var Z = new Lc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Jc = new X(null, 0, 5, Z, [], 0);
function Yc(a) {
  return db(Vb.c(cb, bb(Jc), a));
}
function Zc(a, b, c, d, e, g) {
  this.A = a;
  this.X = b;
  this.l = c;
  this.s = d;
  this.i = e;
  this.k = g;
  this.h = 32243948;
  this.n = 1536;
}
f = Zc.prototype;
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = wb(this);
};
f.S = function() {
  if (this.s + 1 < this.X.length) {
    var a = Y.m ? Y.m(this.A, this.X, this.l, this.s + 1) : Y.call(null, this.A, this.X, this.l, this.s + 1);
    return null == a ? null : a;
  }
  return jb(this);
};
f.B = function(a, b) {
  return P(b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return sb.a($c.c ? $c.c(this.A, this.l + this.s, R(this.A)) : $c.call(null, this.A, this.l + this.s, R(this.A)), b);
};
f.P = function(a, b, c) {
  return sb.c($c.c ? $c.c(this.A, this.l + this.s, R(this.A)) : $c.call(null, this.A, this.l + this.s, R(this.A)), b, c);
};
f.G = function() {
  return this;
};
f.L = function() {
  return this.X[this.s];
};
f.T = function() {
  if (this.s + 1 < this.X.length) {
    var a = Y.m ? Y.m(this.A, this.X, this.l, this.s + 1) : Y.call(null, this.A, this.X, this.l, this.s + 1);
    return null == a ? L : a;
  }
  return ib(this);
};
f.Ia = function() {
  var a = this.X.length, a = this.l + a < x(this.A) ? Y.c ? Y.c(this.A, this.l + a, 0) : Y.call(null, this.A, this.l + a, 0) : null;
  return null == a ? null : a;
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return Y.w ? Y.w(this.A, this.X, this.l, this.s, b) : Y.call(null, this.A, this.X, this.l, this.s, b);
};
f.J = function() {
  return Hb(Jc, this.i);
};
f.Ja = function() {
  return nc.a(this.X, this.s);
};
f.Ka = function() {
  var a = this.X.length, a = this.l + a < x(this.A) ? Y.c ? Y.c(this.A, this.l + a, 0) : Y.call(null, this.A, this.l + a, 0) : null;
  return null == a ? L : a;
};
var Y = function() {
  function a(a, b, c, d, l) {
    return new Zc(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Zc(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Zc(a, Sc(a, b), b, c, null, null);
  }
  var d = null, d = function(d, g, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, g, h);
      case 4:
        return b.call(this, d, g, h, k);
      case 5:
        return a.call(this, d, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.m = b;
  d.w = a;
  return d;
}();
function ad(a, b, c, d, e) {
  this.i = a;
  this.ca = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.h = 166617887;
  this.n = 8192;
}
f = ad.prototype;
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = wb(this);
};
f.C = function(a, b) {
  return z.c(this, b, null);
};
f.D = function(a, b, c) {
  return z.c(this, b, c);
};
f.wa = function(a, b, c) {
  if ("number" === typeof b) {
    return Ma(this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.N(null, c);
      case 3:
        return this.W(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.b = function(a) {
  return this.N(null, a);
};
f.a = function(a, b) {
  return this.W(null, a, b);
};
f.B = function(a, b) {
  return bd.w ? bd.w(this.i, Ma(this.ca, this.end, b), this.start, this.end + 1, null) : bd.call(null, this.i, Ma(this.ca, this.end, b), this.start, this.end + 1, null);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return sb.a(this, b);
};
f.P = function(a, b, c) {
  return sb.c(this, b, c);
};
f.G = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : P(z.a(a.ca, d), new W(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
f.I = function() {
  return this.end - this.start;
};
f.$a = function(a, b, c) {
  var d = this, e = d.start + b;
  return bd.w ? bd.w(d.i, Eb.c(d.ca, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : bd.call(null, d.i, Eb.c(d.ca, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return bd.w ? bd.w(b, this.ca, this.start, this.end, this.k) : bd.call(null, b, this.ca, this.start, this.end, this.k);
};
f.F = function() {
  return this.i;
};
f.N = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Rc(b, this.end - this.start) : z.a(this.ca, this.start + b);
};
f.W = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.c(this.ca, this.start + b, c);
};
f.J = function() {
  return Hb(Jc, this.i);
};
function bd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof ad) {
      c = b.start + c, d = b.start + d, b = b.ca;
    } else {
      var g = R(b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new ad(a, b, c, d, e);
    }
  }
}
var $c = function() {
  function a(a, b, c) {
    return bd(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, R(a));
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Wc(a) {
  return new Lc({}, w(a.d));
}
function Xc(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Qb(a, 0, b, 0, a.length);
  return b;
}
var dd = function cd(b, c, d, e) {
  d = b.root.o === d.o ? d : new Lc(b.root.o, w(d.d));
  var g = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.d[g];
    b = null != h ? cd(b, c - 5, h, e) : Oc(b.root.o, c - 5, e);
  }
  d.d[g] = b;
  return d;
};
function Vc(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.M = d;
  this.h = 275;
  this.n = 88;
}
f = Vc.prototype;
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.D(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.b = function(a) {
  return this.C(null, a);
};
f.a = function(a, b) {
  return this.D(null, a, b);
};
f.C = function(a, b) {
  return z.c(this, b, null);
};
f.D = function(a, b, c) {
  return z.c(this, b, c);
};
f.N = function(a, b) {
  if (this.root.o) {
    return Sc(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
f.W = function(a, b, c) {
  return 0 <= b && b < this.f ? z.a(this, b) : c;
};
f.I = function() {
  if (this.root.o) {
    return this.f;
  }
  throw Error("count after persistent!");
};
f.gb = function(a, b, c) {
  var d = this;
  if (d.root.o) {
    if (0 <= b && b < d.f) {
      return Nc(this) <= b ? d.M[b & 31] = c : (a = function g(a, k) {
        var l = d.root.o === k.o ? k : new Lc(d.root.o, w(k.d));
        if (0 === a) {
          l.d[b & 31] = c;
        } else {
          var n = b >>> a & 31, q = g(a - 5, l.d[n]);
          l.d[n] = q;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.f) {
      return cb(this, c);
    }
    if (s) {
      throw Error([v("Index "), v(b), v(" out of bounds for TransientVector of length"), v(d.f)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
f.za = function(a, b, c) {
  return fb(this, b, c);
};
f.oa = function(a, b) {
  if (this.root.o) {
    if (32 > this.f - Nc(this)) {
      this.M[this.f & 31] = b;
    } else {
      var c = new Lc(this.root.o, this.M), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.M = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Oc(this.root.o, this.shift, c);
        this.root = new Lc(this.root.o, d);
        this.shift = e;
      } else {
        this.root = dd(this, this.shift, this.root, c);
      }
    }
    this.f += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
f.pa = function() {
  if (this.root.o) {
    this.root.o = null;
    var a = this.f - Nc(this), b = Array(a);
    Qb(this.M, 0, b, 0, a);
    return new X(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function ed() {
  this.n = 0;
  this.h = 2097152;
}
ed.prototype.t = function() {
  return!1;
};
var fd = new ed;
function gd(a, b) {
  return Tb((null == b ? 0 : b ? b.h & 1024 || b.Ib || (b.h ? 0 : r(Da, b)) : r(Da, b)) ? R(a) === R(b) ? Ac(Bc, Fc.a(function(a) {
    return mb.a(Cb.c(b, I(a), fd), I(N(a)));
  }, a)) : null : null);
}
function hd(a, b) {
  var c = a.d;
  if (b instanceof U) {
    a: {
      for (var d = c.length, e = b.ja, g = 0;;) {
        if (d <= g) {
          c = -1;
          break a;
        }
        var h = c[g];
        if (h instanceof U && e === h.ja) {
          c = g;
          break a;
        }
        if (s) {
          g += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if ("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (s) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof pb) {
        a: {
          d = c.length;
          e = b.ma;
          for (g = 0;;) {
            if (d <= g) {
              c = -1;
              break a;
            }
            h = c[g];
            if (h instanceof pb && e === h.ma) {
              c = g;
              break a;
            }
            if (s) {
              g += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (s) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (s) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (mb.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (s) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function id(a, b, c) {
  this.d = a;
  this.l = b;
  this.Y = c;
  this.n = 0;
  this.h = 32374990;
}
f = id.prototype;
f.v = function() {
  return wb(this);
};
f.S = function() {
  return this.l < this.d.length - 2 ? new id(this.d, this.l + 2, this.Y) : null;
};
f.B = function(a, b) {
  return P(b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return T.a(b, this);
};
f.P = function(a, b, c) {
  return T.c(b, c, this);
};
f.G = function() {
  return this;
};
f.I = function() {
  return(this.d.length - this.l) / 2;
};
f.L = function() {
  return new X(null, 2, 5, Z, [this.d[this.l], this.d[this.l + 1]], null);
};
f.T = function() {
  return this.l < this.d.length - 2 ? new id(this.d, this.l + 2, this.Y) : L;
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return new id(this.d, this.l, b);
};
f.F = function() {
  return this.Y;
};
f.J = function() {
  return Hb(L, this.Y);
};
function ia(a, b, c, d) {
  this.i = a;
  this.f = b;
  this.d = c;
  this.k = d;
  this.n = 8196;
  this.h = 16123663;
}
f = ia.prototype;
f.xa = function() {
  return new jd({}, this.d.length, w(this.d));
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = bc(this);
};
f.C = function(a, b) {
  return C.c(this, b, null);
};
f.D = function(a, b, c) {
  a = hd(this, b);
  return-1 === a ? c : this.d[a + 1];
};
f.wa = function(a, b, c) {
  a = hd(this, b);
  if (-1 === a) {
    if (this.f < kd) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), g = 0;;) {
        if (g < d) {
          e[g] = a[g], g += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new ia(this.i, this.f + 1, e, null);
    }
    return Ra(Ca(Ic(ld, this), b, c), this.i);
  }
  return c === this.d[a + 1] ? this : s ? (b = w(this.d), b[a + 1] = c, new ia(this.i, this.f, b, null)) : null;
};
f.Ha = function(a, b) {
  return-1 !== hd(this, b);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.D(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.b = function(a) {
  return this.C(null, a);
};
f.a = function(a, b) {
  return this.D(null, a, b);
};
f.B = function(a, b) {
  return Mb(b) ? Ca(this, z.a(b, 0), z.a(b, 1)) : Vb.c(wa, this, b);
};
f.toString = function() {
  return E(this);
};
f.G = function() {
  return 0 <= this.d.length - 2 ? new id(this.d, 0, null) : null;
};
f.I = function() {
  return this.f;
};
f.t = function(a, b) {
  return gd(this, b);
};
f.H = function(a, b) {
  return new ia(b, this.f, this.d, this.k);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Ra(md, this.i);
};
f.Ya = function(a, b) {
  if (0 <= hd(this, b)) {
    var c = this.d.length, d = c - 2;
    if (0 === d) {
      return ua(this);
    }
    for (var d = Array(d), e = 0, g = 0;;) {
      if (e >= c) {
        return new ia(this.i, this.f - 1, d, null);
      }
      if (mb.a(b, this.d[e])) {
        e += 2;
      } else {
        if (s) {
          d[g] = this.d[e], d[g + 1] = this.d[e + 1], g += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var md = new ia(null, 0, [], null), kd = 8;
function jd(a, b, c) {
  this.sa = a;
  this.ga = b;
  this.d = c;
  this.n = 56;
  this.h = 258;
}
f = jd.prototype;
f.za = function(a, b, c) {
  if (p(this.sa)) {
    a = hd(this, b);
    if (-1 === a) {
      return this.ga + 2 <= 2 * kd ? (this.ga += 2, this.d.push(b), this.d.push(c), this) : yc.c(nd.a ? nd.a(this.ga, this.d) : nd.call(null, this.ga, this.d), b, c);
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
f.oa = function(a, b) {
  if (p(this.sa)) {
    if (b ? b.h & 2048 || b.qb || (b.h ? 0 : r(Fa, b)) : r(Fa, b)) {
      return eb(this, cc.b ? cc.b(b) : cc.call(null, b), dc.b ? dc.b(b) : dc.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = I(c);
      if (p(e)) {
        c = N(c), d = eb(d, cc.b ? cc.b(e) : cc.call(null, e), dc.b ? dc.b(e) : dc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
f.pa = function() {
  if (p(this.sa)) {
    return this.sa = !1, new ia(null, Yb((this.ga - this.ga % 2) / 2), this.d, null);
  }
  throw Error("persistent! called twice");
};
f.C = function(a, b) {
  return C.c(this, b, null);
};
f.D = function(a, b, c) {
  if (p(this.sa)) {
    return a = hd(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.I = function() {
  if (p(this.sa)) {
    return Yb((this.ga - this.ga % 2) / 2);
  }
  throw Error("count after persistent!");
};
function nd(a, b) {
  for (var c = bb(ld), d = 0;;) {
    if (d < a) {
      c = yc.c(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function od() {
  this.da = !1;
}
function pd(a, b) {
  return a === b ? !0 : a === b || a instanceof U && b instanceof U && a.ja === b.ja ? !0 : s ? mb.a(a, b) : null;
}
var qd = function() {
  function a(a, b, c, h, k) {
    a = w(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = w(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.w = a;
  return c;
}();
function rd(a, b) {
  var c = Array(a.length - 2);
  Qb(a, 0, c, 0, 2 * b);
  Qb(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var sd = function() {
  function a(a, b, c, h, k, l) {
    a = a.ta(b);
    a.d[c] = h;
    a.d[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.ta(b);
    a.d[c] = h;
    return a;
  }
  var c = null, c = function(c, e, g, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, g, h);
      case 6:
        return a.call(this, c, e, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.m = b;
  c.ea = a;
  return c;
}();
function td(a, b, c) {
  this.o = a;
  this.q = b;
  this.d = c;
}
f = td.prototype;
f.$ = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = ac(this.q & h - 1);
  if (0 === (this.q & h)) {
    var l = ac(this.q);
    if (2 * l < this.d.length) {
      a = this.ta(a);
      b = a.d;
      g.da = !0;
      a: {
        for (c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[g];
          l -= 1;
          c -= 1;
          g -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.q |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = ud.$(a, b + 5, c, d, e, g);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.q >>> d & 1) && (k[d] = null != this.d[e] ? ud.$(a, b + 5, F(this.d[e]), this.d[e], this.d[e + 1], g) : this.d[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new vd(a, l + 1, k);
    }
    return s ? (b = Array(2 * (l + 4)), Qb(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Qb(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.da = !0, a = this.ta(a), a.d = b, a.q |= h, a) : null;
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.$(a, b + 5, c, d, e, g), l === h ? this : sd.m(this, a, 2 * k + 1, l)) : pd(d, l) ? e === h ? this : sd.m(this, a, 2 * k + 1, e) : s ? (g.da = !0, sd.ea(this, a, 2 * k, null, 2 * k + 1, wd.ra ? wd.ra(a, b + 5, l, h, c, d, e) : wd.call(null, a, b + 5, l, h, c, d, e))) : null;
};
f.Ba = function() {
  return xd.b ? xd.b(this.d) : xd.call(null, this.d);
};
f.ta = function(a) {
  if (a === this.o) {
    return this;
  }
  var b = ac(this.q), c = Array(0 > b ? 4 : 2 * (b + 1));
  Qb(this.d, 0, c, 0, 2 * b);
  return new td(a, this.q, c);
};
f.Ca = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.q & d)) {
    return this;
  }
  var e = ac(this.q & d - 1), g = this.d[2 * e], h = this.d[2 * e + 1];
  return null == g ? (a = h.Ca(a + 5, b, c), a === h ? this : null != a ? new td(null, this.q, qd.c(this.d, 2 * e + 1, a)) : this.q === d ? null : s ? new td(null, this.q ^ d, rd(this.d, e)) : null) : pd(c, g) ? new td(null, this.q ^ d, rd(this.d, e)) : s ? this : null;
};
f.Z = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = ac(this.q & g - 1);
  if (0 === (this.q & g)) {
    var k = ac(this.q);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = ud.Z(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.q >>> c & 1) && (h[c] = null != this.d[d] ? ud.Z(a + 5, F(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new vd(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Qb(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Qb(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.da = !0;
    return new td(null, this.q | g, a);
  }
  k = this.d[2 * h];
  g = this.d[2 * h + 1];
  return null == k ? (k = g.Z(a + 5, b, c, d, e), k === g ? this : new td(null, this.q, qd.c(this.d, 2 * h + 1, k))) : pd(c, k) ? d === g ? this : new td(null, this.q, qd.c(this.d, 2 * h + 1, d)) : s ? (e.da = !0, new td(null, this.q, qd.w(this.d, 2 * h, null, 2 * h + 1, wd.ea ? wd.ea(a + 5, k, g, b, c, d) : wd.call(null, a + 5, k, g, b, c, d)))) : null;
};
f.ka = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.q & e)) {
    return d;
  }
  var g = ac(this.q & e - 1), e = this.d[2 * g], g = this.d[2 * g + 1];
  return null == e ? g.ka(a + 5, b, c, d) : pd(c, e) ? g : s ? d : null;
};
var ud = new td(null, 0, []);
function vd(a, b, c) {
  this.o = a;
  this.f = b;
  this.d = c;
}
f = vd.prototype;
f.$ = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.d[h];
  if (null == k) {
    return a = sd.m(this, a, h, ud.$(a, b + 5, c, d, e, g)), a.f += 1, a;
  }
  b = k.$(a, b + 5, c, d, e, g);
  return b === k ? this : sd.m(this, a, h, b);
};
f.Ba = function() {
  return yd.b ? yd.b(this.d) : yd.call(null, this.d);
};
f.ta = function(a) {
  return a === this.o ? this : new vd(a, this.f, w(this.d));
};
f.Ca = function(a, b, c) {
  var d = b >>> a & 31, e = this.d[d];
  if (null != e) {
    a = e.Ca(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.f) {
          a: {
            e = this.d;
            a = 2 * (this.f - 1);
            b = Array(a);
            c = 0;
            for (var g = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[g] = e[c], g += 2, h |= 1 << c), c += 1;
              } else {
                d = new td(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new vd(null, this.f - 1, qd.c(this.d, d, a));
        }
      } else {
        d = s ? new vd(null, this.f, qd.c(this.d, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
f.Z = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.d[g];
  if (null == h) {
    return new vd(null, this.f + 1, qd.c(this.d, g, ud.Z(a + 5, b, c, d, e)));
  }
  a = h.Z(a + 5, b, c, d, e);
  return a === h ? this : new vd(null, this.f, qd.c(this.d, g, a));
};
f.ka = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.ka(a + 5, b, c, d) : d;
};
function zd(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (pd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ad(a, b, c, d) {
  this.o = a;
  this.fa = b;
  this.f = c;
  this.d = d;
}
f = Ad.prototype;
f.$ = function(a, b, c, d, e, g) {
  if (c === this.fa) {
    b = zd(this.d, this.f, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.f) {
        return a = sd.ea(this, a, 2 * this.f, d, 2 * this.f + 1, e), g.da = !0, a.f += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      Qb(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.da = !0;
      g = this.f + 1;
      a === this.o ? (this.d = b, this.f = g, a = this) : a = new Ad(this.o, this.fa, g, b);
      return a;
    }
    return this.d[b + 1] === e ? this : sd.m(this, a, b + 1, e);
  }
  return(new td(a, 1 << (this.fa >>> b & 31), [null, this, null, null])).$(a, b, c, d, e, g);
};
f.Ba = function() {
  return xd.b ? xd.b(this.d) : xd.call(null, this.d);
};
f.ta = function(a) {
  if (a === this.o) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  Qb(this.d, 0, b, 0, 2 * this.f);
  return new Ad(a, this.fa, this.f, b);
};
f.Ca = function(a, b, c) {
  a = zd(this.d, this.f, c);
  return-1 === a ? this : 1 === this.f ? null : s ? new Ad(null, this.fa, this.f - 1, rd(this.d, Yb((a - a % 2) / 2))) : null;
};
f.Z = function(a, b, c, d, e) {
  return b === this.fa ? (a = zd(this.d, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), Qb(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.da = !0, new Ad(null, this.fa, this.f + 1, b)) : mb.a(this.d[a], d) ? this : new Ad(null, this.fa, this.f, qd.c(this.d, a + 1, d))) : (new td(null, 1 << (this.fa >>> a & 31), [null, this])).Z(a, b, c, d, e);
};
f.ka = function(a, b, c, d) {
  a = zd(this.d, this.f, c);
  return 0 > a ? d : pd(c, this.d[a]) ? this.d[a + 1] : s ? d : null;
};
var wd = function() {
  function a(a, b, c, h, k, l, n) {
    var q = F(c);
    if (q === k) {
      return new Ad(null, q, 2, [c, h, l, n]);
    }
    var t = new od;
    return ud.$(a, b, q, c, h, t).$(a, b, k, l, n, t);
  }
  function b(a, b, c, h, k, l) {
    var n = F(b);
    if (n === h) {
      return new Ad(null, n, 2, [b, c, k, l]);
    }
    var q = new od;
    return ud.Z(a, n, b, c, q).Z(a, h, k, l, q);
  }
  var c = null, c = function(c, e, g, h, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ea = b;
  c.ra = a;
  return c;
}();
function Bd(a, b, c, d, e) {
  this.i = a;
  this.aa = b;
  this.l = c;
  this.r = d;
  this.k = e;
  this.n = 0;
  this.h = 32374860;
}
f = Bd.prototype;
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = wb(this);
};
f.B = function(a, b) {
  return P(b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return T.a(b, this);
};
f.P = function(a, b, c) {
  return T.c(b, c, this);
};
f.G = function() {
  return this;
};
f.L = function() {
  return null == this.r ? new X(null, 2, 5, Z, [this.aa[this.l], this.aa[this.l + 1]], null) : I(this.r);
};
f.T = function() {
  return null == this.r ? xd.c ? xd.c(this.aa, this.l + 2, null) : xd.call(null, this.aa, this.l + 2, null) : xd.c ? xd.c(this.aa, this.l, N(this.r)) : xd.call(null, this.aa, this.l, N(this.r));
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return new Bd(b, this.aa, this.l, this.r, this.k);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Hb(L, this.i);
};
var xd = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Bd(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (p(h) && (h = h.Ba(), p(h))) {
            return new Bd(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Bd(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function Cd(a, b, c, d, e) {
  this.i = a;
  this.aa = b;
  this.l = c;
  this.r = d;
  this.k = e;
  this.n = 0;
  this.h = 32374860;
}
f = Cd.prototype;
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = wb(this);
};
f.B = function(a, b) {
  return P(b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return T.a(b, this);
};
f.P = function(a, b, c) {
  return T.c(b, c, this);
};
f.G = function() {
  return this;
};
f.L = function() {
  return I(this.r);
};
f.T = function() {
  return yd.m ? yd.m(null, this.aa, this.l, N(this.r)) : yd.call(null, null, this.aa, this.l, N(this.r));
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return new Cd(b, this.aa, this.l, this.r, this.k);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Hb(L, this.i);
};
var yd = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (p(k) && (k = k.Ba(), p(k))) {
            return new Cd(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Cd(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.m(null, a, 0, null);
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.m = a;
  return c;
}();
function Dd(a, b, c, d, e, g) {
  this.i = a;
  this.f = b;
  this.root = c;
  this.Q = d;
  this.U = e;
  this.k = g;
  this.n = 8196;
  this.h = 16123663;
}
f = Dd.prototype;
f.xa = function() {
  return new Ed({}, this.root, this.f, this.Q, this.U);
};
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = bc(this);
};
f.C = function(a, b) {
  return C.c(this, b, null);
};
f.D = function(a, b, c) {
  return null == b ? this.Q ? this.U : c : null == this.root ? c : s ? this.root.ka(0, F(b), b, c) : null;
};
f.wa = function(a, b, c) {
  if (null == b) {
    return this.Q && c === this.U ? this : new Dd(this.i, this.Q ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new od;
  b = (null == this.root ? ud : this.root).Z(0, F(b), b, c, a);
  return b === this.root ? this : new Dd(this.i, a.da ? this.f + 1 : this.f, b, this.Q, this.U, null);
};
f.Ha = function(a, b) {
  return null == b ? this.Q : null == this.root ? !1 : s ? this.root.ka(0, F(b), b, Rb) !== Rb : null;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.D(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.b = function(a) {
  return this.C(null, a);
};
f.a = function(a, b) {
  return this.D(null, a, b);
};
f.B = function(a, b) {
  return Mb(b) ? Ca(this, z.a(b, 0), z.a(b, 1)) : Vb.c(wa, this, b);
};
f.toString = function() {
  return E(this);
};
f.G = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.Ba() : null;
    return this.Q ? P(new X(null, 2, 5, Z, [null, this.U], null), a) : a;
  }
  return null;
};
f.I = function() {
  return this.f;
};
f.t = function(a, b) {
  return gd(this, b);
};
f.H = function(a, b) {
  return new Dd(b, this.f, this.root, this.Q, this.U, this.k);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Ra(ld, this.i);
};
f.Ya = function(a, b) {
  if (null == b) {
    return this.Q ? new Dd(this.i, this.f - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (s) {
    var c = this.root.Ca(0, F(b), b);
    return c === this.root ? this : new Dd(this.i, this.f - 1, c, this.Q, this.U, null);
  }
  return null;
};
var ld = new Dd(null, 0, null, !1, null, 0);
function Db(a, b) {
  for (var c = a.length, d = 0, e = bb(ld);;) {
    if (d < c) {
      var g = d + 1, e = e.za(null, a[d], b[d]), d = g
    } else {
      return db(e);
    }
  }
}
function Ed(a, b, c, d, e) {
  this.o = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.U = e;
  this.n = 56;
  this.h = 258;
}
f = Ed.prototype;
f.za = function(a, b, c) {
  return Fd(this, b, c);
};
f.oa = function(a, b) {
  var c;
  a: {
    if (this.o) {
      if (b ? b.h & 2048 || b.qb || (b.h ? 0 : r(Fa, b)) : r(Fa, b)) {
        c = Fd(this, cc.b ? cc.b(b) : cc.call(null, b), dc.b ? dc.b(b) : dc.call(null, b));
        break a;
      }
      c = G(b);
      for (var d = this;;) {
        var e = I(c);
        if (p(e)) {
          c = N(c), d = Fd(d, cc.b ? cc.b(e) : cc.call(null, e), dc.b ? dc.b(e) : dc.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
f.pa = function() {
  var a;
  if (this.o) {
    this.o = null, a = new Dd(null, this.count, this.root, this.Q, this.U, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
f.C = function(a, b) {
  return null == b ? this.Q ? this.U : null : null == this.root ? null : this.root.ka(0, F(b), b);
};
f.D = function(a, b, c) {
  return null == b ? this.Q ? this.U : c : null == this.root ? c : this.root.ka(0, F(b), b, c);
};
f.I = function() {
  if (this.o) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Fd(a, b, c) {
  if (a.o) {
    if (null == b) {
      a.U !== c && (a.U = c), a.Q || (a.count += 1, a.Q = !0);
    } else {
      var d = new od;
      b = (null == a.root ? ud : a.root).$(a.o, 0, F(b), b, c, d);
      b !== a.root && (a.root = b);
      d.da && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var Gd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = G(a);
    for (var b = bb(ld);;) {
      if (a) {
        var e = N(N(a)), b = yc.c(b, I(a), I(N(a)));
        a = e;
      } else {
        return db(b);
      }
    }
  }
  a.j = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Hd(a, b) {
  this.la = a;
  this.Y = b;
  this.n = 0;
  this.h = 32374988;
}
f = Hd.prototype;
f.v = function() {
  return wb(this);
};
f.S = function() {
  var a = this.la, a = (a ? a.h & 128 || a.eb || (a.h ? 0 : r(za, a)) : r(za, a)) ? this.la.S(null) : N(this.la);
  return null == a ? null : new Hd(a, this.Y);
};
f.B = function(a, b) {
  return P(b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return T.a(b, this);
};
f.P = function(a, b, c) {
  return T.c(b, c, this);
};
f.G = function() {
  return this;
};
f.L = function() {
  return this.la.L(null).Za();
};
f.T = function() {
  var a = this.la, a = (a ? a.h & 128 || a.eb || (a.h ? 0 : r(za, a)) : r(za, a)) ? this.la.S(null) : N(this.la);
  return null != a ? new Hd(a, this.Y) : L;
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return new Hd(this.la, b);
};
f.F = function() {
  return this.Y;
};
f.J = function() {
  return Hb(L, this.Y);
};
function cc(a) {
  return Ga(a);
}
function dc(a) {
  return Ha(a);
}
function Id(a, b, c) {
  this.i = a;
  this.qa = b;
  this.k = c;
  this.n = 8196;
  this.h = 15077647;
}
f = Id.prototype;
f.xa = function() {
  return new Jd(bb(this.qa));
};
f.v = function() {
  var a = this.k;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = G(this);;) {
      if (b) {
        var c = I(b), a = (a + F(c)) % 4503599627370496, b = N(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.k = a;
};
f.C = function(a, b) {
  return C.c(this, b, null);
};
f.D = function(a, b, c) {
  return Ba(this.qa, b) ? b : c;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.C(null, c);
      case 3:
        return this.D(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.b = function(a) {
  return this.C(null, a);
};
f.a = function(a, b) {
  return this.D(null, a, b);
};
f.B = function(a, b) {
  return new Id(this.i, Eb.c(this.qa, b, null), null);
};
f.toString = function() {
  return E(this);
};
f.G = function() {
  var a = G(this.qa);
  return a ? new Hd(a, null) : null;
};
f.fb = function(a, b) {
  return new Id(this.i, Ea(this.qa, b), null);
};
f.I = function() {
  return x(this.qa);
};
f.t = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.h & 4096 || b.Lb ? !0 : b.h ? !1 : r(Ia, b) : r(Ia, b)) && R(c) === R(b) && Ac(function(a) {
    return Cb.c(c, a, Rb) === Rb ? !1 : !0;
  }, b);
};
f.H = function(a, b) {
  return new Id(b, this.qa, this.k);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Hb(Kd, this.i);
};
var Kd = new Id(null, md, 0);
function Ld(a) {
  var b = a.length;
  if (b <= kd) {
    for (var c = 0, d = bb(md);;) {
      if (c < b) {
        var e = c + 1, d = eb(d, a[c], null), c = e
      } else {
        return new Id(null, db(d), null);
      }
    }
  } else {
    for (c = 0, d = bb(Kd);;) {
      if (c < b) {
        e = c + 1, d = cb(d, a[c]), c = e;
      } else {
        return db(d);
      }
    }
  }
}
function Jd(a) {
  this.ia = a;
  this.h = 259;
  this.n = 136;
}
f = Jd.prototype;
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return C.c(this.ia, c, Rb) === Rb ? null : c;
      case 3:
        return C.c(this.ia, c, Rb) === Rb ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.b = function(a) {
  return C.c(this.ia, a, Rb) === Rb ? null : a;
};
f.a = function(a, b) {
  return C.c(this.ia, a, Rb) === Rb ? b : a;
};
f.C = function(a, b) {
  return C.c(this, b, null);
};
f.D = function(a, b, c) {
  return C.c(this.ia, b, Rb) === Rb ? c : b;
};
f.I = function() {
  return R(this.ia);
};
f.oa = function(a, b) {
  this.ia = yc.c(this.ia, b, null);
  return this;
};
f.pa = function() {
  return new Id(null, db(this.ia), null);
};
function Md(a) {
  a = G(a);
  if (null == a) {
    return Kd;
  }
  if (a instanceof rb && 0 === a.l) {
    a = a.d;
    a: {
      for (var b = 0, c = bb(Kd);;) {
        if (b < a.length) {
          var d = b + 1, c = c.oa(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.pa(null);
  }
  if (s) {
    for (d = bb(Kd);;) {
      if (null != a) {
        b = a.S(null), d = d.oa(null, a.L(null)), a = b;
      } else {
        return d.pa(null);
      }
    }
  } else {
    return null;
  }
}
function ic(a) {
  if (a && (a.n & 4096 || a.sb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([v("Doesn't support name: "), v(a)].join(""));
}
var Nd = function() {
  function a(a, b, c) {
    return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = O(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      return Vb.c(function(c, d) {
        return b.c(a, c, d);
      }, b.c(a, d, e), l);
    }
    a.j = 3;
    a.g = function(a) {
      var b = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var l = I(a);
      a = J(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.e(b, e, g, O(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 3;
  b.g = c.g;
  b.a = function(a, b) {
    return b;
  };
  b.c = a;
  b.e = c.e;
  return b;
}();
function Od(a, b, c, d, e) {
  this.i = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.k = e;
  this.h = 32375006;
  this.n = 8192;
}
f = Od.prototype;
f.v = function() {
  var a = this.k;
  return null != a ? a : this.k = a = wb(this);
};
f.S = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Od(this.i, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Od(this.i, this.start + this.step, this.end, this.step, null) : null;
};
f.B = function(a, b) {
  return P(b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return sb.a(this, b);
};
f.P = function(a, b, c) {
  return sb.c(this, b, c);
};
f.G = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
f.I = function() {
  return oa(Xa(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
f.L = function() {
  return null == Xa(this) ? null : this.start;
};
f.T = function() {
  return null != Xa(this) ? new Od(this.i, this.start + this.step, this.end, this.step, null) : L;
};
f.t = function(a, b) {
  return Q(this, b);
};
f.H = function(a, b) {
  return new Od(b, this.start, this.end, this.step, this.k);
};
f.F = function() {
  return this.i;
};
f.N = function(a, b) {
  if (b < x(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
f.W = function(a, b, c) {
  return b < x(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
f.J = function() {
  return Hb(L, this.i);
};
var Pd = function() {
  function a(a, b, c) {
    return new Od(null, a, b, c, null);
  }
  function b(a, b) {
    return e.c(a, b, 1);
  }
  function c(a) {
    return e.c(0, a, 1);
  }
  function d() {
    return e.c(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, h);
      case 3:
        return a.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.p = d;
  e.b = c;
  e.a = b;
  e.c = a;
  return e;
}();
function Qd(a, b, c, d, e, g, h) {
  var k = fa;
  try {
    fa = null == fa ? null : fa - 1;
    if (null != fa && 0 > fa) {
      return D(a, "#");
    }
    D(a, c);
    G(h) && (b.c ? b.c(I(h), a, g) : b.call(null, I(h), a, g));
    for (var l = N(h), n = na.b(g);l && (null == n || 0 !== n);) {
      D(a, d);
      b.c ? b.c(I(l), a, g) : b.call(null, I(l), a, g);
      var q = N(l);
      c = n - 1;
      l = q;
      n = c;
    }
    p(na.b(g)) && (D(a, d), b.c ? b.c("...", a, g) : b.call(null, "...", a, g));
    return D(a, e);
  } finally {
    fa = k;
  }
}
var Rd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = O(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = G(b), g = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = g.N(null, k);
        D(a, l);
        k += 1;
      } else {
        if (e = G(e)) {
          g = e, Nb(g) ? (e = hb(g), h = ib(g), g = e, l = R(e), e = h, h = l) : (l = I(g), D(a, l), e = N(g), g = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.j = 1;
  a.g = function(a) {
    var d = I(a);
    a = J(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Sd = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Td(a) {
  return[v('"'), v(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Sd[a];
  })), v('"')].join("");
}
var $ = function Ud(b, c, d) {
  if (null == b) {
    return D(c, "nil");
  }
  if (void 0 === b) {
    return D(c, "#\x3cundefined\x3e");
  }
  if (s) {
    p(function() {
      var c = Cb.a(d, la);
      return p(c) ? (c = b ? b.h & 131072 || b.rb ? !0 : b.h ? !1 : r(Oa, b) : r(Oa, b)) ? Ib(b) : c : c;
    }()) && (D(c, "^"), Ud(Ib(b), c, d), D(c, " "));
    if (null == b) {
      return D(c, "nil");
    }
    if (b.kb) {
      return b.zb(c);
    }
    if (b && (b.h & 2147483648 || b.K)) {
      return b.u(null, c, d);
    }
    if (pa(b) === Boolean || "number" === typeof b) {
      return D(c, "" + v(b));
    }
    if (null != b && b.constructor === Object) {
      return D(c, "#js "), Vd.m ? Vd.m(Fc.a(function(c) {
        return new X(null, 2, 5, Z, [jc.b(c), b[c]], null);
      }, Ob(b)), Ud, c, d) : Vd.call(null, Fc.a(function(c) {
        return new X(null, 2, 5, Z, [jc.b(c), b[c]], null);
      }, Ob(b)), Ud, c, d);
    }
    if (b instanceof Array) {
      return Qd(c, Ud, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return p(ka.b(d)) ? D(c, Td(b)) : D(c, b);
    }
    if (Fb(b)) {
      return Rd.e(c, O(["#\x3c", "" + v(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + v(b);;) {
          if (R(d) < c) {
            d = [v("0"), v(d)].join("");
          } else {
            return d;
          }
        }
      };
      return Rd.e(c, O(['#inst "', "" + v(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Rd.e(c, O(['#"', b.source, '"'], 0)) : (b ? b.h & 2147483648 || b.K || (b.h ? 0 : r(Za, b)) : r(Za, b)) ? $a(b, c, d) : s ? Rd.e(c, O(["#\x3c", "" + v(b), "\x3e"], 0)) : null;
  }
  return null;
}, Wd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = O(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || oa(G(a))) {
      b = "";
    } else {
      b = v;
      var e = ha(), g = new da;
      a: {
        var h = new kb(g);
        $(I(a), h, e);
        a = G(N(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var q = k.N(null, n);
            D(h, " ");
            $(q, h, e);
            n += 1;
          } else {
            if (a = G(a)) {
              k = a, Nb(k) ? (a = hb(k), l = ib(k), k = a, q = R(a), a = l, l = q) : (q = I(k), D(h, " "), $(q, h, e), a = N(k), k = null, l = 0), n = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(g);
    }
    return b;
  }
  a.j = 0;
  a.g = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Vd(a, b, c, d) {
  return Qd(c, function(a, c, d) {
    b.c ? b.c(Ga(a), c, d) : b.call(null, Ga(a), c, d);
    D(c, " ");
    return b.c ? b.c(Ha(a), c, d) : b.call(null, Ha(a), c, d);
  }, "{", ", ", "}", d, G(a));
}
Hd.prototype.K = !0;
Hd.prototype.u = function(a, b, c) {
  return Qd(b, $, "(", " ", ")", c, this);
};
rb.prototype.K = !0;
rb.prototype.u = function(a, b, c) {
  return Qd(b, $, "(", " ", ")", c, this);
};
ad.prototype.K = !0;
ad.prototype.u = function(a, b, c) {
  return Qd(b, $, "[", " ", "]", c, this);
};
oc.prototype.K = !0;
oc.prototype.u = function(a, b, c) {
  return Qd(b, $, "(", " ", ")", c, this);
};
ia.prototype.K = !0;
ia.prototype.u = function(a, b, c) {
  return Vd(this, $, b, c);
};
W.prototype.K = !0;
W.prototype.u = function(a, b, c) {
  return Qd(b, $, "(", " ", ")", c, this);
};
Bd.prototype.K = !0;
Bd.prototype.u = function(a, b, c) {
  return Qd(b, $, "(", " ", ")", c, this);
};
Zc.prototype.K = !0;
Zc.prototype.u = function(a, b, c) {
  return Qd(b, $, "(", " ", ")", c, this);
};
Dd.prototype.K = !0;
Dd.prototype.u = function(a, b, c) {
  return Vd(this, $, b, c);
};
Id.prototype.K = !0;
Id.prototype.u = function(a, b, c) {
  return Qd(b, $, "#{", " ", "}", c, this);
};
X.prototype.K = !0;
X.prototype.u = function(a, b, c) {
  return Qd(b, $, "[", " ", "]", c, this);
};
ec.prototype.K = !0;
ec.prototype.u = function(a, b, c) {
  return Qd(b, $, "(", " ", ")", c, this);
};
id.prototype.K = !0;
id.prototype.u = function(a, b, c) {
  return Qd(b, $, "(", " ", ")", c, this);
};
fc.prototype.K = !0;
fc.prototype.u = function(a, b) {
  return D(b, "()");
};
hc.prototype.K = !0;
hc.prototype.u = function(a, b, c) {
  return Qd(b, $, "(", " ", ")", c, this);
};
Od.prototype.K = !0;
Od.prototype.u = function(a, b, c) {
  return Qd(b, $, "(", " ", ")", c, this);
};
Cd.prototype.K = !0;
Cd.prototype.u = function(a, b, c) {
  return Qd(b, $, "(", " ", ")", c, this);
};
X.prototype.Ea = !0;
X.prototype.Fa = function(a, b) {
  return Ub.a(this, b);
};
ad.prototype.Ea = !0;
ad.prototype.Fa = function(a, b) {
  return Ub.a(this, b);
};
U.prototype.Ea = !0;
U.prototype.Fa = function(a, b) {
  return lb(this, b);
};
pb.prototype.Ea = !0;
pb.prototype.Fa = function(a, b) {
  return lb(this, b);
};
function Xd(a, b) {
  if (a ? a.ub : a) {
    return a.ub(a, b);
  }
  var c;
  c = Xd[m(null == a ? null : a)];
  if (!c && (c = Xd._, !c)) {
    throw u("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Yd = function() {
  function a(a, b, c, d, e) {
    if (a ? a.yb : a) {
      return a.yb(a, b, c, d, e);
    }
    var q;
    q = Yd[m(null == a ? null : a)];
    if (!q && (q = Yd._, !q)) {
      throw u("ISwap.-swap!", a);
    }
    return q.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.xb : a) {
      return a.xb(a, b, c, d);
    }
    var e;
    e = Yd[m(null == a ? null : a)];
    if (!e && (e = Yd._, !e)) {
      throw u("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.wb : a) {
      return a.wb(a, b, c);
    }
    var d;
    d = Yd[m(null == a ? null : a)];
    if (!d && (d = Yd._, !d)) {
      throw u("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.vb : a) {
      return a.vb(a, b);
    }
    var c;
    c = Yd[m(null == a ? null : a)];
    if (!c && (c = Yd._, !c)) {
      throw u("ISwap.-swap!", a);
    }
    return c.call(null, a, b);
  }
  var e = null, e = function(e, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, h);
      case 3:
        return c.call(this, e, h, k);
      case 4:
        return b.call(this, e, h, k, l);
      case 5:
        return a.call(this, e, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.a = d;
  e.c = c;
  e.m = b;
  e.w = a;
  return e;
}();
function Zd(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.Cb = c;
  this.lb = d;
  this.h = 2153938944;
  this.n = 16386;
}
f = Zd.prototype;
f.v = function() {
  return this[aa] || (this[aa] = ++ba);
};
f.hb = function(a, b, c) {
  a = G(this.lb);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.N(null, g), k = Bb.c(h, 0, null), h = Bb.c(h, 1, null);
      h.m ? h.m(k, this, b, c) : h.call(null, k, this, b, c);
      g += 1;
    } else {
      if (a = G(a)) {
        Nb(a) ? (d = hb(a), a = ib(a), k = d, e = R(d), d = k) : (d = I(a), k = Bb.c(d, 0, null), h = Bb.c(d, 1, null), h.m ? h.m(k, this, b, c) : h.call(null, k, this, b, c), a = N(a), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
f.u = function(a, b, c) {
  D(b, "#\x3cAtom: ");
  $(this.state, b, c);
  return D(b, "\x3e");
};
f.F = function() {
  return this.i;
};
f.ob = function() {
  return this.state;
};
f.t = function(a, b) {
  return this === b;
};
var ae = function() {
  function a(a) {
    return new Zd(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = O(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Sb(c) ? S.a(Gd, c) : c, e = Cb.a(d, $d), d = Cb.a(d, la);
      return new Zd(a, d, e, null);
    }
    a.j = 1;
    a.g = function(a) {
      var c = I(a);
      a = J(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, O(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 1;
  b.g = c.g;
  b.b = a;
  b.e = c.e;
  return b;
}();
function be(a, b) {
  if (a instanceof Zd) {
    var c = a.Cb;
    if (null != c && !p(c.b ? c.b(b) : c.call(null, b))) {
      throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(Wd.e(O([gc(new pb(null, "validate", "validate", 1233162959, null), new pb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.lb && ab(a, c, b);
    return b;
  }
  return Xd(a, b);
}
var ce = function() {
  function a(a, b, c, d) {
    return a instanceof Zd ? be(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d)) : Yd.m(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof Zd ? be(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : Yd.c(a, b, c);
  }
  function c(a, b) {
    return a instanceof Zd ? be(a, b.b ? b.b(a.state) : b.call(null, a.state)) : Yd.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, g, t) {
      var y = null;
      4 < arguments.length && (y = O(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, y);
    }
    function b(a, c, d, e, g) {
      return a instanceof Zd ? be(a, S.w(c, a.state, d, e, g)) : Yd.w(a, c, d, e, g);
    }
    a.j = 4;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = N(a);
      var e = I(a);
      a = N(a);
      var g = I(a);
      a = J(a);
      return b(c, d, e, g, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, O(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.j = 4;
  d.g = e.g;
  d.a = c;
  d.c = b;
  d.m = a;
  d.e = e.e;
  return d;
}(), Zb = function() {
  function a(a) {
    return(Math.random.p ? Math.random.p() : Math.random.call(null)) * a;
  }
  function b() {
    return c.b(1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.p = b;
  c.b = a;
  return c;
}(), $b = function(a) {
  return Math.floor.b ? Math.floor.b((Math.random.p ? Math.random.p() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.p ? Math.random.p() : Math.random.call(null)) * a);
};
var ma = new U(null, "dup", "dup"), de = new U(null, "bottom", "bottom"), ob = new U(null, "default", "default"), ee = new U(null, "width", "width"), fe = new U(null, "dir", "dir"), ja = new U(null, "flush-on-newline", "flush-on-newline"), ge = new U(null, "location", "location"), he = new U(null, "top", "top"), na = new U(null, "print-length", "print-length"), ie = new U(null, "right", "right"), je = new U(null, "left", "left"), s = new U(null, "else", "else"), ka = new U(null, "readably", "readably"), 
$d = new U(null, "validator", "validator"), la = new U(null, "meta", "meta"), ke = new U(null, "prizes", "prizes"), le = new U(null, "height", "height");
function me(a, b) {
  var c = S.c(Nd, a, b);
  return P(c, Hc(Cc(function(a) {
    return c === a;
  }), b));
}
var ne = function() {
  function a(a, b) {
    return R(a) < R(b) ? Vb.c(zb, b, a) : Vb.c(zb, a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = O(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = me(R, zb.e(d, c, O([a], 0)));
      return Vb.c(Ic, I(a), J(a));
    }
    a.j = 2;
    a.g = function(a) {
      var c = I(a);
      a = N(a);
      var d = I(a);
      a = J(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 0:
        return Kd;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, O(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.j = 2;
  b.g = c.g;
  b.p = function() {
    return Kd;
  };
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function oe(a) {
  var b = function() {
    return function e(b) {
      return new W(null, function() {
        for (var c = b;;) {
          var k = G(c);
          if (k) {
            var l = k, n = I(l);
            if (n < (a.b ? a.b(fe) : a.call(null, fe))) {
              if (k = G(function(b, c, e, g) {
                return function M(h) {
                  return new W(null, function(b, c) {
                    return function() {
                      for (;;) {
                        var b = G(h);
                        if (b) {
                          if (Nb(b)) {
                            var e = hb(b), g = R(e), k = new lc(Array(g), 0);
                            a: {
                              for (var l = 0;;) {
                                if (l < g) {
                                  var n = z.a(e, l);
                                  if (n < (a.b ? a.b(ee) : a.call(null, ee))) {
                                    k.add(new X(null, 2, 5, Z, [c, n], null)), l += 1;
                                  } else {
                                    e = null;
                                    break a;
                                  }
                                } else {
                                  e = !0;
                                  break a;
                                }
                              }
                              e = void 0;
                            }
                            return e ? pc(k.V(), M(ib(b))) : pc(k.V(), null);
                          }
                          k = I(b);
                          return k < (a.b ? a.b(ee) : a.call(null, ee)) ? P(new X(null, 2, 5, Z, [c, k], null), M(J(b))) : null;
                        }
                        return null;
                      }
                    };
                  }(b, c, e, g), null, null);
                };
              }(c, n, l, k)(Pd.p()))) {
                return uc.a(k, e(J(c)));
              }
              c = J(c);
            } else {
              return null;
            }
          } else {
            return null;
          }
        }
      }, null, null);
    }(Pd.p());
  }(), c = ne.a(a.b ? a.b(le) : a.call(null, le), Md(a.b ? a.b(ke) : a.call(null, ke)));
  return Eb.c(a, le, zb.a(a.b ? a.b(le) : a.call(null, le), Bb.a(Hc(Cc(c), b), $b(R(Hc(Cc(c), b))))));
}
function pe(a) {
  var b, c = Sb(a) ? S.a(Gd, a) : a;
  b = Cb.a(c, ke);
  c = Cb.a(c, ge);
  b = Kc.c(Wb, c, yb(b));
  var c = a.b ? a.b(le) : a.call(null, le), d = Md(a.b ? a.b(ke) : a.call(null, ke)), d = d.b ? d.b(b) : d.call(null, b);
  if (!p(d)) {
    var d = Bb.c(b, 0, null), e = Bb.c(b, 1, null), d = 0 > d || d >= (a.b ? a.b(fe) : a.call(null, fe)) || 0 > e || e >= (a.b ? a.b(ee) : a.call(null, ee))
  }
  return p(d) ? !1 : p(c.b ? c.b(b) : c.call(null, b)) ? oe(Eb.e(a, le, Jb.a(a.b ? a.b(le) : a.call(null, le), b), O([ke, zb.a(a.b ? a.b(ke) : a.call(null, ke), b)], 0))) : s ? Eb.c(a, ke, Yc(J(zb.a(a.b ? a.b(ke) : a.call(null, ke), b)))) : null;
}
function qe(a, b) {
  var c = new ia(null, 4, [je, new X(null, 2, 5, Z, [-1, 0], null), ie, new X(null, 2, 5, Z, [1, 0], null), he, new X(null, 2, 5, Z, [0, -1], null), de, new X(null, 2, 5, Z, [0, 1], null)], null);
  return mb.a(new X(null, 2, 5, Z, [0, 0], null), Fc.c(Wb, c.b ? c.b(b) : c.call(null, b), a.b ? a.b(ge) : a.call(null, ge))) ? a : Eb.c(a, ge, c.b ? c.b(b) : c.call(null, b));
}
Ld([new X(null, 2, 5, Z, [3, 8], null), new X(null, 2, 5, Z, [1, 8], null)]);
var re = new X(null, 3, 5, Z, [255, 101, 0], null), se = new X(null, 3, 5, Z, [112, 174, 32], null), te = new ia(null, 4, [37, je, 38, he, 39, ie, 40, de], null);
function ue(a) {
  return document.onkeydown = function(b) {
    b = te.b ? te.b(b.keyCode) : te.call(null, b.keyCode);
    return p(b) ? ce.c(a, qe, b) : null;
  };
}
function ve(a) {
  return(null == a ? 0 : a ? a.h & 8 || a.Fb || (a.h ? 0 : r(va, a)) : r(va, a)) ? Kc.a(Dc.a(Xb, 10), a) : 10 * a;
}
function we(a, b) {
  var c = Sb(a) ? S.a(Gd, a) : a, d = Cb.a(c, ee), c = Cb.a(c, fe);
  b.clearRect(0, 0, ve(c), ve(d));
}
function xe(a) {
  var b = document.getElementById("canvas");
  b.setAttribute("width", ve(a.b ? a.b(fe) : a.call(null, fe)));
  return b.setAttribute("height", ve(a.b ? a.b(ee) : a.call(null, ee)));
}
function ye(a, b, c) {
  return[v("rgb("), v(a), v(","), v(b), v(","), v(c), v(")")].join("");
}
function ze(a, b, c, d) {
  var e = Bb.c(c, 0, null), g = Bb.c(c, 1, null);
  c = Bb.c(c, 2, null);
  d.fillStyle = ye(e, g, c);
  d.fillRect(ve(a), ve(b), 10, 10);
  d.fillStyle = ye(e, g, c);
  d.strokeRect(ve(a), ve(b), 10, 10);
}
function Ae(a, b, c) {
  a = G(a);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.N(null, g), k = Bb.c(h, 0, null), h = Bb.c(h, 1, null);
      ze(k, h, b, c);
      g += 1;
    } else {
      if (a = G(a)) {
        Nb(a) ? (d = hb(a), a = ib(a), k = d, e = R(d), d = k) : (d = I(a), k = Bb.c(d, 0, null), h = Bb.c(d, 1, null), ze(k, h, b, c), a = N(a), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
}
function Be(a) {
  var b = document.getElementById("canvas").getContext("2d"), c = function(a) {
    return function(b) {
      return Ae(b, re, a);
    };
  }(b), d = function(a) {
    return function(b) {
      return Ae(b, se, a);
    };
  }(b, c);
  we(a, b);
  c(a.b ? a.b(le) : a.call(null, le));
  return d(a.b ? a.b(ke) : a.call(null, ke));
}
;var Ce = new ia(null, 5, [ge, new X(null, 2, 5, Z, [1, 0], null), fe, 30, ee, 30, le, Ld([new X(null, 2, 5, Z, [$b(30), 2 + ($b(30) - 1)], null)]), ke, new X(null, 3, 5, Z, [new X(null, 2, 5, Z, [1, 1], null), new X(null, 2, 5, Z, [2, 1], null), new X(null, 2, 5, Z, [3, 1], null)], null)], null), De = ae.b(Ce), Fe = function Ee() {
  return p(Na(De)) ? (Be.b ? Be.b(Na(De)) : Be.call(null, Na(De)), setTimeout(function() {
    return Ee(ce.a(De, pe));
  }, 150)) : alert("GAME OVER");
};
function Ge() {
  xe.b ? xe.b(Na(De)) : xe.call(null, Na(De));
  ue.b ? ue.b(De) : ue.call(null, De);
  return Fe();
}
var He = ["snake", "game", "start"], Ie = this;
He[0] in Ie || !Ie.execScript || Ie.execScript("var " + He[0]);
for (var Je;He.length && (Je = He.shift());) {
  var Ke;
  if (Ke = !He.length) {
    Ke = void 0 !== Ge;
  }
  Ke ? Ie[Je] = Ge : Ie = Ie[Je] ? Ie[Je] : Ie[Je] = {};
}
;
})();
