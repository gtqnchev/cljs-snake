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
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function pa(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = pa(b), c = p(p(c) ? c.kb : c) ? c.jb : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ra(a) {
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
var sa = {}, ta = {};
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
    if (a ? a.V : a) {
      return a.V(a, b, c);
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
  c.b = a;
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
  c.b = a;
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
function Ha(a) {
  if (a ? a.Za : a) {
    return a.Za();
  }
  var b;
  b = Ha[m(null == a ? null : a)];
  if (!b && (b = Ha._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ia(a) {
  if (a ? a.cb : a) {
    return a.cb();
  }
  var b;
  b = Ia[m(null == a ? null : a)];
  if (!b && (b = Ia._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ja = {};
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
  c.b = a;
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
  this.g = 1073741824;
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
  this.X = e;
  this.g = 2154168321;
  this.n = 4096;
}
f = pb.prototype;
f.u = function(a, b) {
  return D(b, this.ma);
};
f.v = function() {
  var a = this.na;
  return null != a ? a : this.na = a = qb.a ? qb.a(F.d ? F.d(this.R) : F.call(null, this.R), F.d ? F.d(this.name) : F.call(null, this.name)) : qb.call(null, F.d ? F.d(this.R) : F.call(null, this.R), F.d ? F.d(this.name) : F.call(null, this.name));
};
f.H = function(a, b) {
  return new pb(this.R, this.name, this.ma, this.na, b);
};
f.F = function() {
  return this.X;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return C.b(c, this, null);
      case 3:
        return C.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.d = function(a) {
  return C.b(a, this, null);
};
f.a = function(a, b) {
  return C.b(a, this, b);
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
  if (a && (a.g & 8388608 || a.Jb)) {
    return a.G(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new rb(a, 0);
  }
  if (r(Wa, a)) {
    return Xa(a);
  }
  if (t) {
    throw Error([v(a), v("is not ISeqable")].join(""));
  }
  return null;
}
function J(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.ya)) {
    return a.L(null);
  }
  a = G(a);
  return null == a ? null : A(a);
}
function K(a) {
  return null != a ? a && (a.g & 64 || a.ya) ? a.T(null) : (a = G(a)) ? B(a) : L : L;
}
function M(a) {
  return null == a ? null : a && (a.g & 128 || a.eb) ? a.S(null) : G(K(a));
}
var mb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Ua(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (M(e)) {
            a = d, d = J(e), e = M(e);
          } else {
            return b.a(d, J(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
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
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.d = function() {
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
sa["function"] = !0;
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
  d.b = b;
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
  d.b = b;
  d.m = a;
  return d;
}();
function vb(a) {
  return a ? a.g & 2 || a.nb ? !0 : a.g ? !1 : r(ta, a) : r(ta, a);
}
function wb(a) {
  return a ? a.g & 16 || a.bb ? !0 : a.g ? !1 : r(xa, a) : r(xa, a);
}
function rb(a, b) {
  this.c = a;
  this.k = b;
  this.g = 166199550;
  this.n = 8192;
}
f = rb.prototype;
f.v = function() {
  return xb.d ? xb.d(this) : xb.call(null, this);
};
f.S = function() {
  return this.k + 1 < this.c.length ? new rb(this.c, this.k + 1) : null;
};
f.B = function(a, b) {
  return O.a ? O.a(b, this) : O.call(null, b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return tb.m(this.c, b, this.c[this.k], this.k + 1);
};
f.P = function(a, b, c) {
  return tb.m(this.c, b, c, this.k);
};
f.G = function() {
  return this;
};
f.I = function() {
  return this.c.length - this.k;
};
f.L = function() {
  return this.c[this.k];
};
f.T = function() {
  return this.k + 1 < this.c.length ? new rb(this.c, this.k + 1) : L;
};
f.t = function(a, b) {
  return P.a ? P.a(this, b) : P.call(null, this, b);
};
f.N = function(a, b) {
  var c = b + this.k;
  return c < this.c.length ? this.c[c] : null;
};
f.V = function(a, b, c) {
  a = b + this.k;
  return a < this.c.length ? this.c[a] : c;
};
f.J = function() {
  return L;
};
var yb = function() {
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
  c.d = b;
  c.a = a;
  return c;
}(), N = function() {
  function a(a, b) {
    return yb.a(a, b);
  }
  function b(a) {
    return yb.a(a, 0);
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
  c.d = b;
  c.a = a;
  return c;
}();
function zb(a) {
  for (;;) {
    var b = M(a);
    if (null != b) {
      a = b;
    } else {
      return J(a);
    }
  }
}
Ua._ = function(a, b) {
  return a === b;
};
var Ab = function() {
  function a(a, b) {
    return null != a ? wa(a, b) : wa(L, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (p(e)) {
          a = b.a(a, d), d = J(e), e = M(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function R(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.nb)) {
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
            if (t) {
              a: {
                a = G(a);
                for (var b = 0;;) {
                  if (vb(a)) {
                    a = b + x(a);
                    break a;
                  }
                  a = M(a);
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
var Bb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return G(a) ? J(a) : c;
      }
      if (wb(a)) {
        return z.b(a, b, c);
      }
      if (G(a)) {
        a = M(a), b -= 1;
      } else {
        return t ? c : null;
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
          return J(a);
        }
        throw Error("Index out of bounds");
      }
      if (wb(a)) {
        return z.a(a, b);
      }
      if (G(a)) {
        var c = M(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (t) {
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
  c.b = a;
  return c;
}(), Cb = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.g & 16 || a.bb)) {
        return a.V(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (r(xa, a)) {
        return z.a(a, b);
      }
      if (t) {
        if (a ? a.g & 64 || a.ya || (a.g ? 0 : r(ya, a)) : r(ya, a)) {
          return Bb.b(a, b, c);
        }
        throw Error([v("nth not supported on this type "), v(ra(pa(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.g & 16 || a.bb)) {
      return a.N(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (r(xa, a)) {
      return z.a(a, b);
    }
    if (t) {
      if (a ? a.g & 64 || a.ya || (a.g ? 0 : r(ya, a)) : r(ya, a)) {
        return Bb.a(a, b);
      }
      throw Error([v("nth not supported on this type "), v(ra(pa(a)))].join(""));
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
  c.b = a;
  return c;
}(), S = function() {
  function a(a, b, c) {
    return null != a ? a && (a.g & 256 || a.pb) ? a.D(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : r(Aa, a) ? C.b(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.g & 256 || a.pb) ? a.C(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : r(Aa, a) ? C.a(a, b) : null;
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
  c.b = a;
  return c;
}(), Eb = function() {
  function a(a, b, c) {
    return null != a ? Ca(a, b, c) : Db.a ? Db.a([b], [c]) : Db.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.b(a, d, e), p(l)) {
          d = J(l), e = J(M(l)), l = M(M(l));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.h = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var l = J(a);
      a = K(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.e(b, e, g, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 3;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}();
function Fb(a) {
  var b = "function" == m(a);
  return b ? b : a ? p(p(null) ? null : a.mb) ? !0 : a.Ob ? !1 : r(sa, a) : r(sa, a);
}
var Hb = function Gb(b, c) {
  return Fb(b) && !(b ? b.g & 262144 || b.Nb || (b.g ? 0 : r(Qa, b)) : r(Qa, b)) ? Gb(function() {
    "undefined" === typeof ea && (ea = function(b, c, g, h) {
      this.i = b;
      this.Da = c;
      this.Db = g;
      this.Ab = h;
      this.n = 0;
      this.g = 393217;
    }, ea.kb = !0, ea.jb = "cljs.core/t5087", ea.zb = function(b) {
      return D(b, "cljs.core/t5087");
    }, ea.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return T.a ? T.a(b.Da, d) : T.call(null, b.Da, d);
      }
      b.l = 1;
      b.h = function(b) {
        var d = J(b);
        b = K(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), ea.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(w(c)));
    }, ea.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return T.a ? T.a(self__.Da, b) : T.call(null, self__.Da, b);
      }
      b.l = 0;
      b.h = function(b) {
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
  return(b ? a ? a.g & 131072 || a.rb || (a.g ? 0 : r(Oa, a)) : r(Oa, a) : b) ? Pa(a) : null;
}
var Jb = function() {
  function a(a, b) {
    return null == a ? null : Ka(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (p(e)) {
          d = J(e), e = M(e);
        } else {
          return a;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var b = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
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
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.d = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}(), Kb = {}, Lb = 0;
function F(a) {
  if (a && (a.g & 4194304 || a.Hb)) {
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
            a = null == a ? 0 : t ? Va(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Mb(a) {
  return a ? a.g & 16384 || a.Mb ? !0 : a.g ? !1 : r(La, a) : r(La, a);
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
function Pb(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Qb = {};
function Rb(a) {
  return null == a ? !1 : a ? a.g & 64 || a.ya ? !0 : a.g ? !1 : r(ya, a) : r(ya, a);
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
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Ub = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = nb(Cb.a(a, h), Cb.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var g = R(a), h = R(b);
    return g < h ? -1 : g > h ? 1 : t ? c.m(a, b, g, 0) : null;
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
}(), U = function() {
  function a(a, b, c) {
    for (c = G(c);;) {
      if (c) {
        b = a.a ? a.a(b, J(c)) : a.call(null, b, J(c)), c = M(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = G(b);
    return c ? Vb.b ? Vb.b(a, J(c), M(c)) : Vb.call(null, a, J(c), M(c)) : a.p ? a.p() : a.call(null);
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
  c.b = a;
  return c;
}(), Vb = function() {
  function a(a, b, c) {
    return c && (c.g & 524288 || c.tb) ? c.P(null, a, b) : c instanceof Array ? tb.b(c, a, b) : "string" === typeof c ? tb.b(c, a, b) : r(Sa, c) ? Ta.b(c, a, b) : t ? U.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.g & 524288 || b.tb) ? b.O(null, a) : b instanceof Array ? tb.a(b, a) : "string" === typeof b ? tb.a(b, a) : r(Sa, b) ? Ta.a(b, a) : t ? U.a(a, b) : null;
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
  c.b = a;
  return c;
}(), Wb = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Vb.b(a, b + c, d);
    }
    b.l = 2;
    b.h = function(a) {
      var b = J(a);
      a = M(a);
      var c = J(a);
      a = K(a);
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
        return b.e(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 2;
  a.h = b.h;
  a.p = function() {
    return 0;
  };
  a.d = function(a) {
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
      2 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return Vb.b(a, b * c, d);
    }
    b.l = 2;
    b.h = function(a) {
      var b = J(a);
      a = M(a);
      var c = J(a);
      a = K(a);
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
        return b.e(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 2;
  a.h = b.h;
  a.p = function() {
    return 1;
  };
  a.d = function(a) {
    return a;
  };
  a.a = function(a, b) {
    return a * b;
  };
  a.e = b.e;
  return a;
}();
function Yb(a) {
  return 0 <= a ? Math.floor.d ? Math.floor.d(a) : Math.floor.call(null, a) : Math.ceil.d ? Math.ceil.d(a) : Math.ceil.call(null, a);
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
  c.d = a;
  return c;
}();
function $b(a) {
  return Yb(Zb.d(a));
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
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new da(b.d(a)), l = d;;) {
        if (p(l)) {
          e = e.append(b.d(J(l))), l = M(l);
        } else {
          return e.toString();
        }
      }
    }
    a.l = 1;
    a.h = function(a) {
      var b = J(a);
      a = K(a);
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
        return c.e(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.h = c.h;
  b.p = function() {
    return "";
  };
  b.d = a;
  b.e = c.e;
  return b;
}();
function P(a, b) {
  return Tb((b ? b.g & 16777216 || b.Kb || (b.g ? 0 : r(Ya, b)) : r(Ya, b)) ? function() {
    for (var c = G(a), d = G(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (mb.a(J(c), J(d))) {
        c = M(c), d = M(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function qb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function xb(a) {
  if (G(a)) {
    var b = F(J(a));
    for (a = M(a);;) {
      if (null == a) {
        return b;
      }
      b = qb(b, F(J(a)));
      a = M(a);
    }
  } else {
    return 0;
  }
}
function bc(a) {
  var b = 0;
  for (a = G(a);;) {
    if (a) {
      var c = J(a), b = (b + (F(cc.d ? cc.d(c) : cc.call(null, c)) ^ F(dc.d ? dc.d(c) : dc.call(null, c)))) % 4503599627370496;
      a = M(a);
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
  this.j = e;
  this.g = 65937646;
  this.n = 8192;
}
f = ec.prototype;
f.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = xb(this);
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
  return U.a(b, this);
};
f.P = function(a, b, c) {
  return U.b(b, c, this);
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
  return P(this, b);
};
f.H = function(a, b) {
  return new ec(b, this.Aa, this.ha, this.count, this.j);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return L;
};
function fc(a) {
  this.i = a;
  this.g = 65937614;
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
  return U.a(b, this);
};
f.P = function(a, b, c) {
  return U.b(b, c, this);
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
  return P(this, b);
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
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof rb && 0 === a.k) {
      b = a.c;
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
  a.l = 0;
  a.h = function(a) {
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
  this.j = d;
  this.g = 65929452;
  this.n = 8192;
}
f = hc.prototype;
f.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = xb(this);
};
f.S = function() {
  return null == this.ha ? null : G(this.ha);
};
f.B = function(a, b) {
  return new hc(null, b, this, this.j);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return U.a(b, this);
};
f.P = function(a, b, c) {
  return U.b(b, c, this);
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
  return P(this, b);
};
f.H = function(a, b) {
  return new hc(b, this.Aa, this.ha, this.j);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Hb(L, this.i);
};
function O(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.ya)) ? new hc(null, a, b, null) : new hc(null, a, G(b), null);
}
function V(a, b, c, d) {
  this.R = a;
  this.name = b;
  this.ja = c;
  this.na = d;
  this.g = 2153775105;
  this.n = 4096;
}
f = V.prototype;
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
        return S.a(c, this);
      case 3:
        return S.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.d = function(a) {
  return S.a(a, this);
};
f.a = function(a, b) {
  return S.b(a, this, b);
};
f.t = function(a, b) {
  return b instanceof V ? this.ja === b.ja : !1;
};
f.toString = function() {
  return[v(":"), v(this.ja)].join("");
};
var jc = function() {
  function a(a, b) {
    return new V(a, b, [v(p(a) ? [v(a), v("/")].join("") : null), v(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof V) {
      return a;
    }
    if (a instanceof pb) {
      var b;
      if (a && (a.n & 4096 || a.sb)) {
        b = a.R;
      } else {
        throw Error([v("Doesn't support namespace: "), v(a)].join(""));
      }
      return new V(b, ic.d ? ic.d(a) : ic.call(null, a), a.ma, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new V(b[0], b[1], a, null) : new V(null, b[0], a, null)) : null;
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
  c.d = b;
  c.a = a;
  return c;
}();
function kc(a, b, c, d) {
  this.i = a;
  this.ua = b;
  this.r = c;
  this.j = d;
  this.n = 0;
  this.g = 32374988;
}
f = kc.prototype;
f.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = xb(this);
};
f.S = function() {
  Xa(this);
  return null == this.r ? null : M(this.r);
};
f.B = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return E(this);
};
function lc(a) {
  null != a.ua && (a.r = a.ua.p ? a.ua.p() : a.ua.call(null), a.ua = null);
  return a.r;
}
f.O = function(a, b) {
  return U.a(b, this);
};
f.P = function(a, b, c) {
  return U.b(b, c, this);
};
f.G = function() {
  lc(this);
  if (null == this.r) {
    return null;
  }
  for (var a = this.r;;) {
    if (a instanceof kc) {
      a = lc(a);
    } else {
      return this.r = a, G(this.r);
    }
  }
};
f.L = function() {
  Xa(this);
  return null == this.r ? null : J(this.r);
};
f.T = function() {
  Xa(this);
  return null != this.r ? K(this.r) : L;
};
f.t = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new kc(b, this.ua, this.r, this.j);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Hb(L, this.i);
};
function mc(a, b) {
  this.Ga = a;
  this.end = b;
  this.n = 0;
  this.g = 2;
}
mc.prototype.I = function() {
  return this.end;
};
mc.prototype.add = function(a) {
  this.Ga[this.end] = a;
  return this.end += 1;
};
mc.prototype.Y = function() {
  var a = new nc(this.Ga, 0, this.end);
  this.Ga = null;
  return a;
};
function nc(a, b, c) {
  this.c = a;
  this.s = b;
  this.end = c;
  this.n = 0;
  this.g = 524306;
}
f = nc.prototype;
f.O = function(a, b) {
  return tb.m(this.c, b, this.c[this.s], this.s + 1);
};
f.P = function(a, b, c) {
  return tb.m(this.c, b, c, this.s);
};
f.ab = function() {
  if (this.s === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new nc(this.c, this.s + 1, this.end);
};
f.N = function(a, b) {
  return this.c[this.s + b];
};
f.V = function(a, b, c) {
  return 0 <= b && b < this.end - this.s ? this.c[this.s + b] : c;
};
f.I = function() {
  return this.end - this.s;
};
var oc = function() {
  function a(a, b, c) {
    return new nc(a, b, c);
  }
  function b(a, b) {
    return new nc(a, b, a.length);
  }
  function c(a) {
    return new nc(a, 0, a.length);
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
  d.d = c;
  d.a = b;
  d.b = a;
  return d;
}();
function pc(a, b, c, d) {
  this.Y = a;
  this.ba = b;
  this.i = c;
  this.j = d;
  this.g = 31850732;
  this.n = 1536;
}
f = pc.prototype;
f.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = xb(this);
};
f.S = function() {
  if (1 < x(this.Y)) {
    return new pc(gb(this.Y), this.ba, this.i, null);
  }
  var a = Xa(this.ba);
  return null == a ? null : a;
};
f.B = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return E(this);
};
f.G = function() {
  return this;
};
f.L = function() {
  return z.a(this.Y, 0);
};
f.T = function() {
  return 1 < x(this.Y) ? new pc(gb(this.Y), this.ba, this.i, null) : null == this.ba ? L : this.ba;
};
f.Ia = function() {
  return null == this.ba ? null : this.ba;
};
f.t = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new pc(this.Y, this.ba, b, this.j);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Hb(L, this.i);
};
f.Ja = function() {
  return this.Y;
};
f.Ka = function() {
  return null == this.ba ? L : this.ba;
};
function qc(a, b) {
  return 0 === x(a) ? b : new pc(a, b, null, null);
}
function rc(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(J(a)), a = M(a);
    } else {
      return b;
    }
  }
}
function sc(a, b) {
  if (vb(a)) {
    return R(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G(c)) {
      c = M(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var uc = function tc(b) {
  return null == b ? null : null == M(b) ? G(J(b)) : t ? O(J(b), tc(M(b))) : null;
}, vc = function() {
  function a(a, b) {
    return new kc(null, function() {
      var c = G(a);
      return c ? Nb(c) ? qc(hb(c), d.a(ib(c), b)) : O(J(c), d.a(K(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new kc(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new kc(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var g = null;
      2 < arguments.length && (g = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, g);
    }
    function b(a, c, e) {
      return function s(a, b) {
        return new kc(null, function() {
          var c = G(a);
          return c ? Nb(c) ? qc(hb(c), s(ib(c), b)) : O(J(c), s(K(c), b)) : p(b) ? s(J(b), M(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.l = 2;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
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
        return e.e(d, h, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 2;
  d.h = e.h;
  d.p = c;
  d.d = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), wc = function() {
  function a(a, b, c, d) {
    return O(a, O(b, O(c, d)));
  }
  function b(a, b, c) {
    return O(a, O(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, q) {
      var s = null;
      4 < arguments.length && (s = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, s);
    }
    function b(a, c, d, e, g) {
      return O(a, O(c, O(d, O(e, uc(g)))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var q = J(a);
      a = K(a);
      return b(c, d, e, q, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return G(c);
      case 2:
        return O(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.e(c, g, h, k, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = 4;
  c.h = d.h;
  c.d = function(a) {
    return G(a);
  };
  c.a = function(a, b) {
    return O(a, b);
  };
  c.b = b;
  c.m = a;
  c.e = d.e;
  return c;
}();
function xc(a) {
  return db(a);
}
var yc = function() {
  var a = null, b = function() {
    function a(c, g, h) {
      var k = null;
      2 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, g, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = cb(a, c), p(d)) {
          c = J(d), d = M(d);
        } else {
          return a;
        }
      }
    }
    a.l = 2;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var h = J(a);
      a = K(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 2:
        return cb(a, d);
      default:
        return b.e(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 2;
  a.h = b.h;
  a.a = function(a, b) {
    return cb(a, b);
  };
  a.e = b.e;
  return a;
}(), zc = function() {
  var a = null, b = function() {
    function a(c, g, h, k) {
      var l = null;
      3 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, g, h, l);
    }
    function b(a, c, d, k) {
      for (;;) {
        if (a = eb(a, c, d), p(k)) {
          c = J(k), d = J(M(k)), k = M(M(k));
        } else {
          return a;
        }
      }
    }
    a.l = 3;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var h = J(a);
      a = M(a);
      var k = J(a);
      a = K(a);
      return b(c, h, k, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e, g) {
    switch(arguments.length) {
      case 3:
        return eb(a, d, e);
      default:
        return b.e(a, d, e, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.l = 3;
  a.h = b.h;
  a.b = function(a, b, e) {
    return eb(a, b, e);
  };
  a.e = b.e;
  return a;
}();
function Ac(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.p ? a.p() : a.call(null);
  }
  c = A(d);
  var e = B(d);
  if (1 === b) {
    return a.d ? a.d(c) : a.d ? a.d(c) : a.call(null, c);
  }
  var d = A(e), g = B(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = A(g), h = B(g);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
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
  var n = A(q), s = B(q);
  if (9 === b) {
    return a.Xa ? a.Xa(c, d, e, g, h, a, k, l, n) : a.Xa ? a.Xa(c, d, e, g, h, a, k, l, n) : a.call(null, c, d, e, g, h, a, k, l, n);
  }
  var q = A(s), y = B(s);
  if (10 === b) {
    return a.La ? a.La(c, d, e, g, h, a, k, l, n, q) : a.La ? a.La(c, d, e, g, h, a, k, l, n, q) : a.call(null, c, d, e, g, h, a, k, l, n, q);
  }
  var s = A(y), H = B(y);
  if (11 === b) {
    return a.Ma ? a.Ma(c, d, e, g, h, a, k, l, n, q, s) : a.Ma ? a.Ma(c, d, e, g, h, a, k, l, n, q, s) : a.call(null, c, d, e, g, h, a, k, l, n, q, s);
  }
  var y = A(H), I = B(H);
  if (12 === b) {
    return a.Na ? a.Na(c, d, e, g, h, a, k, l, n, q, s, y) : a.Na ? a.Na(c, d, e, g, h, a, k, l, n, q, s, y) : a.call(null, c, d, e, g, h, a, k, l, n, q, s, y);
  }
  var H = A(I), Q = B(I);
  if (13 === b) {
    return a.Oa ? a.Oa(c, d, e, g, h, a, k, l, n, q, s, y, H) : a.Oa ? a.Oa(c, d, e, g, h, a, k, l, n, q, s, y, H) : a.call(null, c, d, e, g, h, a, k, l, n, q, s, y, H);
  }
  var I = A(Q), W = B(Q);
  if (14 === b) {
    return a.Pa ? a.Pa(c, d, e, g, h, a, k, l, n, q, s, y, H, I) : a.Pa ? a.Pa(c, d, e, g, h, a, k, l, n, q, s, y, H, I) : a.call(null, c, d, e, g, h, a, k, l, n, q, s, y, H, I);
  }
  var Q = A(W), ga = B(W);
  if (15 === b) {
    return a.Qa ? a.Qa(c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q) : a.Qa ? a.Qa(c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q) : a.call(null, c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q);
  }
  var W = A(ga), qa = B(ga);
  if (16 === b) {
    return a.Ra ? a.Ra(c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W) : a.Ra ? a.Ra(c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W) : a.call(null, c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W);
  }
  var ga = A(qa), Ga = B(qa);
  if (17 === b) {
    return a.Sa ? a.Sa(c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W, ga) : a.Sa ? a.Sa(c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W, ga) : a.call(null, c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W, ga);
  }
  var qa = A(Ga), Sb = B(Ga);
  if (18 === b) {
    return a.Ta ? a.Ta(c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W, ga, qa) : a.Ta ? a.Ta(c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W, ga, qa) : a.call(null, c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W, ga, qa);
  }
  Ga = A(Sb);
  Sb = B(Sb);
  if (19 === b) {
    return a.Ua ? a.Ua(c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W, ga, qa, Ga) : a.Ua ? a.Ua(c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W, ga, qa, Ga) : a.call(null, c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W, ga, qa, Ga);
  }
  var ub = A(Sb);
  B(Sb);
  if (20 === b) {
    return a.Va ? a.Va(c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W, ga, qa, Ga, ub) : a.Va ? a.Va(c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W, ga, qa, Ga, ub) : a.call(null, c, d, e, g, h, a, k, l, n, q, s, y, H, I, Q, W, ga, qa, Ga, ub);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var T = function() {
  function a(a, b, c, d, g) {
    b = wc.m(b, c, d, g);
    c = a.l;
    return a.h ? (d = sc(b, c + 1), d <= c ? Ac(a, d, b) : a.h(b)) : a.apply(a, rc(b));
  }
  function b(a, b, c, d) {
    b = wc.b(b, c, d);
    c = a.l;
    return a.h ? (d = sc(b, c + 1), d <= c ? Ac(a, d, b) : a.h(b)) : a.apply(a, rc(b));
  }
  function c(a, b, c) {
    b = wc.a(b, c);
    c = a.l;
    if (a.h) {
      var d = sc(b, c + 1);
      return d <= c ? Ac(a, d, b) : a.h(b);
    }
    return a.apply(a, rc(b));
  }
  function d(a, b) {
    var c = a.l;
    if (a.h) {
      var d = sc(b, c + 1);
      return d <= c ? Ac(a, d, b) : a.h(b);
    }
    return a.apply(a, rc(b));
  }
  var e = null, g = function() {
    function a(c, d, g, e, h, H) {
      var I = null;
      5 < arguments.length && (I = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, g, e, h, I);
    }
    function b(a, c, d, g, e, h) {
      c = O(c, O(d, O(g, O(e, uc(h)))));
      d = a.l;
      return a.h ? (g = sc(c, d + 1), g <= d ? Ac(a, g, c) : a.h(c)) : a.apply(a, rc(c));
    }
    a.l = 5;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var g = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var h = J(a);
      a = K(a);
      return b(c, d, g, e, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, q, s) {
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
        return g.e(e, k, l, n, q, N(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.l = 5;
  e.h = g.h;
  e.a = d;
  e.b = c;
  e.m = b;
  e.w = a;
  e.e = g.e;
  return e;
}(), Bc = function() {
  function a(a, b) {
    return!mb.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return oa(T.m(mb, a, c, d));
    }
    a.l = 2;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = K(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 2;
  b.h = c.h;
  b.d = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Cc(a, b) {
  for (;;) {
    if (null == G(b)) {
      return!0;
    }
    if (p(a.d ? a.d(J(b)) : a.call(null, J(b)))) {
      var c = a, d = M(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function Dc(a) {
  return a;
}
var Ec = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return q.call(this, b);
      }
      function q(e) {
        return T.w(a, b, c, d, e);
      }
      e.l = 0;
      e.h = function(a) {
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
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return T.m(a, b, c, d);
      }
      d.l = 0;
      d.h = function(a) {
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
        0 < arguments.length && (b = N(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return T.b(a, b, c);
      }
      c.l = 0;
      c.h = function(a) {
        a = G(a);
        return d(a);
      };
      c.e = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, g, s) {
      var y = null;
      4 < arguments.length && (y = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, y);
    }
    function b(a, c, d, e, g) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = N(Array.prototype.slice.call(arguments, 0), 0));
          return h.call(this, c);
        }
        function h(b) {
          return T.w(a, c, d, e, vc.a(g, b));
        }
        b.l = 0;
        b.h = function(a) {
          a = G(a);
          return h(a);
        };
        b.e = h;
        return b;
      }();
    }
    a.l = 4;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var g = J(a);
      a = K(a);
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
        return e.e(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.h = e.h;
  d.d = function(a) {
    return a;
  };
  d.a = c;
  d.b = b;
  d.m = a;
  d.e = e.e;
  return d;
}(), Fc = function() {
  function a(a, b, c, e) {
    return new kc(null, function() {
      var n = G(b), q = G(c), s = G(e);
      return n && q && s ? O(a.b ? a.b(J(n), J(q), J(s)) : a.call(null, J(n), J(q), J(s)), d.m(a, K(n), K(q), K(s))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new kc(null, function() {
      var e = G(b), n = G(c);
      return e && n ? O(a.a ? a.a(J(e), J(n)) : a.call(null, J(e), J(n)), d.b(a, K(e), K(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new kc(null, function() {
      var c = G(b);
      if (c) {
        if (Nb(c)) {
          for (var e = hb(c), n = R(e), q = new mc(Array(n), 0), s = 0;;) {
            if (s < n) {
              var y = a.d ? a.d(z.a(e, s)) : a.call(null, z.a(e, s));
              q.add(y);
              s += 1;
            } else {
              break;
            }
          }
          return qc(q.Y(), d.a(a, ib(c)));
        }
        return O(a.d ? a.d(J(c)) : a.call(null, J(c)), d.a(a, K(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, g, s) {
      var y = null;
      4 < arguments.length && (y = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, y);
    }
    function b(a, c, e, g, h) {
      return d.a(function(b) {
        return T.a(a, b);
      }, function H(a) {
        return new kc(null, function() {
          var b = d.a(G, a);
          return Cc(Dc, b) ? O(d.a(J, b), H(d.a(K, b))) : null;
        }, null, null);
      }(Ab.e(h, g, N([e, c], 0))));
    }
    a.l = 4;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var g = J(a);
      a = K(a);
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
        return e.e(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.h = e.h;
  d.a = c;
  d.b = b;
  d.m = a;
  d.e = e.e;
  return d;
}();
function Gc(a, b) {
  return null != a ? a && (a.n & 4 || a.Gb) ? xc(Vb.b(cb, bb(a), b)) : Vb.b(wa, a, b) : Vb.b(Ab, L, b);
}
var Ic = function() {
  function a(a, b, c, d) {
    return Gc(Hc, Fc.m(a, b, c, d));
  }
  function b(a, b, c) {
    return Gc(Hc, Fc.b(a, b, c));
  }
  function c(a, b) {
    return xc(Vb.b(function(b, c) {
      return yc.a(b, a.d ? a.d(c) : a.call(null, c));
    }, bb(Hc), b));
  }
  var d = null, e = function() {
    function a(c, d, e, g, s) {
      var y = null;
      4 < arguments.length && (y = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, y);
    }
    function b(a, c, d, e, g) {
      return Gc(Hc, T.e(Fc, a, c, d, e, N([g], 0)));
    }
    a.l = 4;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var g = J(a);
      a = K(a);
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
        return e.e(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.h = e.h;
  d.a = c;
  d.b = b;
  d.m = a;
  d.e = e.e;
  return d;
}();
function Jc(a, b) {
  this.o = a;
  this.c = b;
}
function Kc(a) {
  return new Jc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Lc(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Mc(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Kc(a);
    d.c[0] = c;
    c = d;
    b -= 5;
  }
}
var Oc = function Nc(b, c, d, e) {
  var g = new Jc(d.o, w(d.c)), h = b.f - 1 >>> c & 31;
  5 === c ? g.c[h] = e : (d = d.c[h], b = null != d ? Nc(b, c - 5, d, e) : Mc(null, c - 5, e), g.c[h] = b);
  return g;
};
function Pc(a, b) {
  throw Error([v("No item "), v(a), v(" in vector of length "), v(b)].join(""));
}
function Qc(a, b) {
  if (0 <= b && b < a.f) {
    if (b >= Lc(a)) {
      return a.M;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.c[b >>> d & 31], d = e
      } else {
        return c.c;
      }
    }
  } else {
    return Pc(b, a.f);
  }
}
var Sc = function Rc(b, c, d, e, g) {
  var h = new Jc(d.o, w(d.c));
  if (0 === c) {
    h.c[e & 31] = g;
  } else {
    var k = e >>> c & 31;
    b = Rc(b, c - 5, d.c[k], e, g);
    h.c[k] = b;
  }
  return h;
};
function X(a, b, c, d, e, g) {
  this.i = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.M = e;
  this.j = g;
  this.n = 8196;
  this.g = 167668511;
}
f = X.prototype;
f.xa = function() {
  return new Tc(this.f, this.shift, Uc.d ? Uc.d(this.root) : Uc.call(null, this.root), Vc.d ? Vc.d(this.M) : Vc.call(null, this.M));
};
f.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = xb(this);
};
f.C = function(a, b) {
  return z.b(this, b, null);
};
f.D = function(a, b, c) {
  return z.b(this, b, c);
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
        return this.V(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.d = function(a) {
  return this.N(null, a);
};
f.a = function(a, b) {
  return this.V(null, a, b);
};
f.B = function(a, b) {
  if (32 > this.f - Lc(this)) {
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
  d ? (d = Kc(null), d.c[0] = this.root, e = Mc(null, this.shift, new Jc(null, this.M)), d.c[1] = e) : d = Oc(this, this.shift, this.root, new Jc(null, this.M));
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
  return sb.b(this, b, c);
};
f.G = function() {
  return 0 === this.f ? null : 32 > this.f ? N.d(this.M) : t ? Y.b ? Y.b(this, 0, 0) : Y.call(null, this, 0, 0) : null;
};
f.I = function() {
  return this.f;
};
f.$a = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return Lc(this) <= b ? (a = w(this.M), a[b & 31] = c, new X(this.i, this.f, this.shift, this.root, a, null)) : new X(this.i, this.f, this.shift, Sc(this, this.shift, this.root, b, c), this.M, null);
  }
  if (b === this.f) {
    return wa(this, c);
  }
  if (t) {
    throw Error([v("Index "), v(b), v(" out of bounds  [0,"), v(this.f), v("]")].join(""));
  }
  return null;
};
f.t = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new X(b, this.f, this.shift, this.root, this.M, this.j);
};
f.F = function() {
  return this.i;
};
f.N = function(a, b) {
  return Qc(this, b)[b & 31];
};
f.V = function(a, b, c) {
  return 0 <= b && b < this.f ? z.a(this, b) : c;
};
f.J = function() {
  return Hb(Hc, this.i);
};
var Z = new Jc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Hc = new X(null, 0, 5, Z, [], 0);
function Wc(a) {
  return db(Vb.b(cb, bb(Hc), a));
}
function Xc(a, b, c, d, e, g) {
  this.A = a;
  this.W = b;
  this.k = c;
  this.s = d;
  this.i = e;
  this.j = g;
  this.g = 32243948;
  this.n = 1536;
}
f = Xc.prototype;
f.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = xb(this);
};
f.S = function() {
  if (this.s + 1 < this.W.length) {
    var a = Y.m ? Y.m(this.A, this.W, this.k, this.s + 1) : Y.call(null, this.A, this.W, this.k, this.s + 1);
    return null == a ? null : a;
  }
  return jb(this);
};
f.B = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return sb.a(Yc.b ? Yc.b(this.A, this.k + this.s, R(this.A)) : Yc.call(null, this.A, this.k + this.s, R(this.A)), b);
};
f.P = function(a, b, c) {
  return sb.b(Yc.b ? Yc.b(this.A, this.k + this.s, R(this.A)) : Yc.call(null, this.A, this.k + this.s, R(this.A)), b, c);
};
f.G = function() {
  return this;
};
f.L = function() {
  return this.W[this.s];
};
f.T = function() {
  if (this.s + 1 < this.W.length) {
    var a = Y.m ? Y.m(this.A, this.W, this.k, this.s + 1) : Y.call(null, this.A, this.W, this.k, this.s + 1);
    return null == a ? L : a;
  }
  return ib(this);
};
f.Ia = function() {
  var a = this.W.length, a = this.k + a < x(this.A) ? Y.b ? Y.b(this.A, this.k + a, 0) : Y.call(null, this.A, this.k + a, 0) : null;
  return null == a ? null : a;
};
f.t = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return Y.w ? Y.w(this.A, this.W, this.k, this.s, b) : Y.call(null, this.A, this.W, this.k, this.s, b);
};
f.J = function() {
  return Hb(Hc, this.i);
};
f.Ja = function() {
  return oc.a(this.W, this.s);
};
f.Ka = function() {
  var a = this.W.length, a = this.k + a < x(this.A) ? Y.b ? Y.b(this.A, this.k + a, 0) : Y.call(null, this.A, this.k + a, 0) : null;
  return null == a ? L : a;
};
var Y = function() {
  function a(a, b, c, d, l) {
    return new Xc(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Xc(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Xc(a, Qc(a, b), b, c, null, null);
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
  d.b = c;
  d.m = b;
  d.w = a;
  return d;
}();
function Zc(a, b, c, d, e) {
  this.i = a;
  this.ca = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.g = 166617887;
  this.n = 8192;
}
f = Zc.prototype;
f.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = xb(this);
};
f.C = function(a, b) {
  return z.b(this, b, null);
};
f.D = function(a, b, c) {
  return z.b(this, b, c);
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
        return this.V(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.d = function(a) {
  return this.N(null, a);
};
f.a = function(a, b) {
  return this.V(null, a, b);
};
f.B = function(a, b) {
  return $c.w ? $c.w(this.i, Ma(this.ca, this.end, b), this.start, this.end + 1, null) : $c.call(null, this.i, Ma(this.ca, this.end, b), this.start, this.end + 1, null);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return sb.a(this, b);
};
f.P = function(a, b, c) {
  return sb.b(this, b, c);
};
f.G = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : O(z.a(a.ca, d), new kc(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
f.I = function() {
  return this.end - this.start;
};
f.$a = function(a, b, c) {
  var d = this, e = d.start + b;
  return $c.w ? $c.w(d.i, Eb.b(d.ca, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : $c.call(null, d.i, Eb.b(d.ca, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
f.t = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return $c.w ? $c.w(b, this.ca, this.start, this.end, this.j) : $c.call(null, b, this.ca, this.start, this.end, this.j);
};
f.F = function() {
  return this.i;
};
f.N = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Pc(b, this.end - this.start) : z.a(this.ca, this.start + b);
};
f.V = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.b(this.ca, this.start + b, c);
};
f.J = function() {
  return Hb(Hc, this.i);
};
function $c(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Zc) {
      c = b.start + c, d = b.start + d, b = b.ca;
    } else {
      var g = R(b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Zc(a, b, c, d, e);
    }
  }
}
var Yc = function() {
  function a(a, b, c) {
    return $c(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, R(a));
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
  c.b = a;
  return c;
}();
function Uc(a) {
  return new Jc({}, w(a.c));
}
function Vc(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Pb(a, 0, b, 0, a.length);
  return b;
}
var bd = function ad(b, c, d, e) {
  d = b.root.o === d.o ? d : new Jc(b.root.o, w(d.c));
  var g = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.c[g];
    b = null != h ? ad(b, c - 5, h, e) : Mc(b.root.o, c - 5, e);
  }
  d.c[g] = b;
  return d;
};
function Tc(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.M = d;
  this.g = 275;
  this.n = 88;
}
f = Tc.prototype;
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
f.d = function(a) {
  return this.C(null, a);
};
f.a = function(a, b) {
  return this.D(null, a, b);
};
f.C = function(a, b) {
  return z.b(this, b, null);
};
f.D = function(a, b, c) {
  return z.b(this, b, c);
};
f.N = function(a, b) {
  if (this.root.o) {
    return Qc(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
f.V = function(a, b, c) {
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
      return Lc(this) <= b ? d.M[b & 31] = c : (a = function g(a, k) {
        var l = d.root.o === k.o ? k : new Jc(d.root.o, w(k.c));
        if (0 === a) {
          l.c[b & 31] = c;
        } else {
          var n = b >>> a & 31, q = g(a - 5, l.c[n]);
          l.c[n] = q;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.f) {
      return cb(this, c);
    }
    if (t) {
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
    if (32 > this.f - Lc(this)) {
      this.M[this.f & 31] = b;
    } else {
      var c = new Jc(this.root.o, this.M), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.M = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Mc(this.root.o, this.shift, c);
        this.root = new Jc(this.root.o, d);
        this.shift = e;
      } else {
        this.root = bd(this, this.shift, this.root, c);
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
    var a = this.f - Lc(this), b = Array(a);
    Pb(this.M, 0, b, 0, a);
    return new X(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function cd() {
  this.n = 0;
  this.g = 2097152;
}
cd.prototype.t = function() {
  return!1;
};
var dd = new cd;
function ed(a, b) {
  return Tb((null == b ? 0 : b ? b.g & 1024 || b.Ib || (b.g ? 0 : r(Da, b)) : r(Da, b)) ? R(a) === R(b) ? Cc(Dc, Fc.a(function(a) {
    return mb.a(S.b(b, J(a), dd), J(M(a)));
  }, a)) : null : null);
}
function fd(a, b) {
  var c = a.c;
  if (b instanceof V) {
    a: {
      for (var d = c.length, e = b.ja, g = 0;;) {
        if (d <= g) {
          c = -1;
          break a;
        }
        var h = c[g];
        if (h instanceof V && e === h.ja) {
          c = g;
          break a;
        }
        if (t) {
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
          if (t) {
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
            if (t) {
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
              if (t) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (t) {
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
                if (t) {
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
function gd(a, b, c) {
  this.c = a;
  this.k = b;
  this.X = c;
  this.n = 0;
  this.g = 32374990;
}
f = gd.prototype;
f.v = function() {
  return xb(this);
};
f.S = function() {
  return this.k < this.c.length - 2 ? new gd(this.c, this.k + 2, this.X) : null;
};
f.B = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return U.a(b, this);
};
f.P = function(a, b, c) {
  return U.b(b, c, this);
};
f.G = function() {
  return this;
};
f.I = function() {
  return(this.c.length - this.k) / 2;
};
f.L = function() {
  return new X(null, 2, 5, Z, [this.c[this.k], this.c[this.k + 1]], null);
};
f.T = function() {
  return this.k < this.c.length - 2 ? new gd(this.c, this.k + 2, this.X) : L;
};
f.t = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new gd(this.c, this.k, b);
};
f.F = function() {
  return this.X;
};
f.J = function() {
  return Hb(L, this.X);
};
function ia(a, b, c, d) {
  this.i = a;
  this.f = b;
  this.c = c;
  this.j = d;
  this.n = 8196;
  this.g = 16123663;
}
f = ia.prototype;
f.xa = function() {
  return new hd({}, this.c.length, w(this.c));
};
f.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bc(this);
};
f.C = function(a, b) {
  return C.b(this, b, null);
};
f.D = function(a, b, c) {
  a = fd(this, b);
  return-1 === a ? c : this.c[a + 1];
};
f.wa = function(a, b, c) {
  a = fd(this, b);
  if (-1 === a) {
    if (this.f < id) {
      a = this.c;
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
    return Ra(Ca(Gc(jd, this), b, c), this.i);
  }
  return c === this.c[a + 1] ? this : t ? (b = w(this.c), b[a + 1] = c, new ia(this.i, this.f, b, null)) : null;
};
f.Ha = function(a, b) {
  return-1 !== fd(this, b);
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
f.d = function(a) {
  return this.C(null, a);
};
f.a = function(a, b) {
  return this.D(null, a, b);
};
f.B = function(a, b) {
  return Mb(b) ? Ca(this, z.a(b, 0), z.a(b, 1)) : Vb.b(wa, this, b);
};
f.toString = function() {
  return E(this);
};
f.G = function() {
  return 0 <= this.c.length - 2 ? new gd(this.c, 0, null) : null;
};
f.I = function() {
  return this.f;
};
f.t = function(a, b) {
  return ed(this, b);
};
f.H = function(a, b) {
  return new ia(b, this.f, this.c, this.j);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Ra(kd, this.i);
};
f.Ya = function(a, b) {
  if (0 <= fd(this, b)) {
    var c = this.c.length, d = c - 2;
    if (0 === d) {
      return ua(this);
    }
    for (var d = Array(d), e = 0, g = 0;;) {
      if (e >= c) {
        return new ia(this.i, this.f - 1, d, null);
      }
      if (mb.a(b, this.c[e])) {
        e += 2;
      } else {
        if (t) {
          d[g] = this.c[e], d[g + 1] = this.c[e + 1], g += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var kd = new ia(null, 0, [], null), id = 8;
function hd(a, b, c) {
  this.sa = a;
  this.ga = b;
  this.c = c;
  this.n = 56;
  this.g = 258;
}
f = hd.prototype;
f.za = function(a, b, c) {
  if (p(this.sa)) {
    a = fd(this, b);
    if (-1 === a) {
      return this.ga + 2 <= 2 * id ? (this.ga += 2, this.c.push(b), this.c.push(c), this) : zc.b(ld.a ? ld.a(this.ga, this.c) : ld.call(null, this.ga, this.c), b, c);
    }
    c !== this.c[a + 1] && (this.c[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
f.oa = function(a, b) {
  if (p(this.sa)) {
    if (b ? b.g & 2048 || b.qb || (b.g ? 0 : r(Fa, b)) : r(Fa, b)) {
      return eb(this, cc.d ? cc.d(b) : cc.call(null, b), dc.d ? dc.d(b) : dc.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = J(c);
      if (p(e)) {
        c = M(c), d = eb(d, cc.d ? cc.d(e) : cc.call(null, e), dc.d ? dc.d(e) : dc.call(null, e));
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
    return this.sa = !1, new ia(null, Yb((this.ga - this.ga % 2) / 2), this.c, null);
  }
  throw Error("persistent! called twice");
};
f.C = function(a, b) {
  return C.b(this, b, null);
};
f.D = function(a, b, c) {
  if (p(this.sa)) {
    return a = fd(this, b), -1 === a ? c : this.c[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.I = function() {
  if (p(this.sa)) {
    return Yb((this.ga - this.ga % 2) / 2);
  }
  throw Error("count after persistent!");
};
function ld(a, b) {
  for (var c = bb(jd), d = 0;;) {
    if (d < a) {
      c = zc.b(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function md() {
  this.da = !1;
}
function nd(a, b) {
  return a === b ? !0 : a === b || a instanceof V && b instanceof V && a.ja === b.ja ? !0 : t ? mb.a(a, b) : null;
}
var od = function() {
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
  c.b = b;
  c.w = a;
  return c;
}();
function pd(a, b) {
  var c = Array(a.length - 2);
  Pb(a, 0, c, 0, 2 * b);
  Pb(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var qd = function() {
  function a(a, b, c, h, k, l) {
    a = a.ta(b);
    a.c[c] = h;
    a.c[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.ta(b);
    a.c[c] = h;
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
function rd(a, b, c) {
  this.o = a;
  this.q = b;
  this.c = c;
}
f = rd.prototype;
f.$ = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = ac(this.q & h - 1);
  if (0 === (this.q & h)) {
    var l = ac(this.q);
    if (2 * l < this.c.length) {
      a = this.ta(a);
      b = a.c;
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
      k[c >>> b & 31] = sd.$(a, b + 5, c, d, e, g);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.q >>> d & 1) && (k[d] = null != this.c[e] ? sd.$(a, b + 5, F(this.c[e]), this.c[e], this.c[e + 1], g) : this.c[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new td(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), Pb(this.c, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Pb(this.c, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.da = !0, a = this.ta(a), a.c = b, a.q |= h, a) : null;
  }
  l = this.c[2 * k];
  h = this.c[2 * k + 1];
  return null == l ? (l = h.$(a, b + 5, c, d, e, g), l === h ? this : qd.m(this, a, 2 * k + 1, l)) : nd(d, l) ? e === h ? this : qd.m(this, a, 2 * k + 1, e) : t ? (g.da = !0, qd.ea(this, a, 2 * k, null, 2 * k + 1, ud.ra ? ud.ra(a, b + 5, l, h, c, d, e) : ud.call(null, a, b + 5, l, h, c, d, e))) : null;
};
f.Ba = function() {
  return vd.d ? vd.d(this.c) : vd.call(null, this.c);
};
f.ta = function(a) {
  if (a === this.o) {
    return this;
  }
  var b = ac(this.q), c = Array(0 > b ? 4 : 2 * (b + 1));
  Pb(this.c, 0, c, 0, 2 * b);
  return new rd(a, this.q, c);
};
f.Ca = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.q & d)) {
    return this;
  }
  var e = ac(this.q & d - 1), g = this.c[2 * e], h = this.c[2 * e + 1];
  return null == g ? (a = h.Ca(a + 5, b, c), a === h ? this : null != a ? new rd(null, this.q, od.b(this.c, 2 * e + 1, a)) : this.q === d ? null : t ? new rd(null, this.q ^ d, pd(this.c, e)) : null) : nd(c, g) ? new rd(null, this.q ^ d, pd(this.c, e)) : t ? this : null;
};
f.Z = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = ac(this.q & g - 1);
  if (0 === (this.q & g)) {
    var k = ac(this.q);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = sd.Z(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.q >>> c & 1) && (h[c] = null != this.c[d] ? sd.Z(a + 5, F(this.c[d]), this.c[d], this.c[d + 1], e) : this.c[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new td(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Pb(this.c, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Pb(this.c, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.da = !0;
    return new rd(null, this.q | g, a);
  }
  k = this.c[2 * h];
  g = this.c[2 * h + 1];
  return null == k ? (k = g.Z(a + 5, b, c, d, e), k === g ? this : new rd(null, this.q, od.b(this.c, 2 * h + 1, k))) : nd(c, k) ? d === g ? this : new rd(null, this.q, od.b(this.c, 2 * h + 1, d)) : t ? (e.da = !0, new rd(null, this.q, od.w(this.c, 2 * h, null, 2 * h + 1, ud.ea ? ud.ea(a + 5, k, g, b, c, d) : ud.call(null, a + 5, k, g, b, c, d)))) : null;
};
f.ka = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.q & e)) {
    return d;
  }
  var g = ac(this.q & e - 1), e = this.c[2 * g], g = this.c[2 * g + 1];
  return null == e ? g.ka(a + 5, b, c, d) : nd(c, e) ? g : t ? d : null;
};
var sd = new rd(null, 0, []);
function td(a, b, c) {
  this.o = a;
  this.f = b;
  this.c = c;
}
f = td.prototype;
f.$ = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.c[h];
  if (null == k) {
    return a = qd.m(this, a, h, sd.$(a, b + 5, c, d, e, g)), a.f += 1, a;
  }
  b = k.$(a, b + 5, c, d, e, g);
  return b === k ? this : qd.m(this, a, h, b);
};
f.Ba = function() {
  return wd.d ? wd.d(this.c) : wd.call(null, this.c);
};
f.ta = function(a) {
  return a === this.o ? this : new td(a, this.f, w(this.c));
};
f.Ca = function(a, b, c) {
  var d = b >>> a & 31, e = this.c[d];
  if (null != e) {
    a = e.Ca(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.f) {
          a: {
            e = this.c;
            a = 2 * (this.f - 1);
            b = Array(a);
            c = 0;
            for (var g = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[g] = e[c], g += 2, h |= 1 << c), c += 1;
              } else {
                d = new rd(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new td(null, this.f - 1, od.b(this.c, d, a));
        }
      } else {
        d = t ? new td(null, this.f, od.b(this.c, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
f.Z = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.c[g];
  if (null == h) {
    return new td(null, this.f + 1, od.b(this.c, g, sd.Z(a + 5, b, c, d, e)));
  }
  a = h.Z(a + 5, b, c, d, e);
  return a === h ? this : new td(null, this.f, od.b(this.c, g, a));
};
f.ka = function(a, b, c, d) {
  var e = this.c[b >>> a & 31];
  return null != e ? e.ka(a + 5, b, c, d) : d;
};
function xd(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (nd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function yd(a, b, c, d) {
  this.o = a;
  this.fa = b;
  this.f = c;
  this.c = d;
}
f = yd.prototype;
f.$ = function(a, b, c, d, e, g) {
  if (c === this.fa) {
    b = xd(this.c, this.f, d);
    if (-1 === b) {
      if (this.c.length > 2 * this.f) {
        return a = qd.ea(this, a, 2 * this.f, d, 2 * this.f + 1, e), g.da = !0, a.f += 1, a;
      }
      c = this.c.length;
      b = Array(c + 2);
      Pb(this.c, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.da = !0;
      g = this.f + 1;
      a === this.o ? (this.c = b, this.f = g, a = this) : a = new yd(this.o, this.fa, g, b);
      return a;
    }
    return this.c[b + 1] === e ? this : qd.m(this, a, b + 1, e);
  }
  return(new rd(a, 1 << (this.fa >>> b & 31), [null, this, null, null])).$(a, b, c, d, e, g);
};
f.Ba = function() {
  return vd.d ? vd.d(this.c) : vd.call(null, this.c);
};
f.ta = function(a) {
  if (a === this.o) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  Pb(this.c, 0, b, 0, 2 * this.f);
  return new yd(a, this.fa, this.f, b);
};
f.Ca = function(a, b, c) {
  a = xd(this.c, this.f, c);
  return-1 === a ? this : 1 === this.f ? null : t ? new yd(null, this.fa, this.f - 1, pd(this.c, Yb((a - a % 2) / 2))) : null;
};
f.Z = function(a, b, c, d, e) {
  return b === this.fa ? (a = xd(this.c, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), Pb(this.c, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.da = !0, new yd(null, this.fa, this.f + 1, b)) : mb.a(this.c[a], d) ? this : new yd(null, this.fa, this.f, od.b(this.c, a + 1, d))) : (new rd(null, 1 << (this.fa >>> a & 31), [null, this])).Z(a, b, c, d, e);
};
f.ka = function(a, b, c, d) {
  a = xd(this.c, this.f, c);
  return 0 > a ? d : nd(c, this.c[a]) ? this.c[a + 1] : t ? d : null;
};
var ud = function() {
  function a(a, b, c, h, k, l, n) {
    var q = F(c);
    if (q === k) {
      return new yd(null, q, 2, [c, h, l, n]);
    }
    var s = new md;
    return sd.$(a, b, q, c, h, s).$(a, b, k, l, n, s);
  }
  function b(a, b, c, h, k, l) {
    var n = F(b);
    if (n === h) {
      return new yd(null, n, 2, [b, c, k, l]);
    }
    var q = new md;
    return sd.Z(a, n, b, c, q).Z(a, h, k, l, q);
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
function zd(a, b, c, d, e) {
  this.i = a;
  this.aa = b;
  this.k = c;
  this.r = d;
  this.j = e;
  this.n = 0;
  this.g = 32374860;
}
f = zd.prototype;
f.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = xb(this);
};
f.B = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return U.a(b, this);
};
f.P = function(a, b, c) {
  return U.b(b, c, this);
};
f.G = function() {
  return this;
};
f.L = function() {
  return null == this.r ? new X(null, 2, 5, Z, [this.aa[this.k], this.aa[this.k + 1]], null) : J(this.r);
};
f.T = function() {
  return null == this.r ? vd.b ? vd.b(this.aa, this.k + 2, null) : vd.call(null, this.aa, this.k + 2, null) : vd.b ? vd.b(this.aa, this.k, M(this.r)) : vd.call(null, this.aa, this.k, M(this.r));
};
f.t = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new zd(b, this.aa, this.k, this.r, this.j);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Hb(L, this.i);
};
var vd = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new zd(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (p(h) && (h = h.Ba(), p(h))) {
            return new zd(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new zd(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.b(a, 0, null);
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
  c.d = b;
  c.b = a;
  return c;
}();
function Ad(a, b, c, d, e) {
  this.i = a;
  this.aa = b;
  this.k = c;
  this.r = d;
  this.j = e;
  this.n = 0;
  this.g = 32374860;
}
f = Ad.prototype;
f.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = xb(this);
};
f.B = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return U.a(b, this);
};
f.P = function(a, b, c) {
  return U.b(b, c, this);
};
f.G = function() {
  return this;
};
f.L = function() {
  return J(this.r);
};
f.T = function() {
  return wd.m ? wd.m(null, this.aa, this.k, M(this.r)) : wd.call(null, null, this.aa, this.k, M(this.r));
};
f.t = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new Ad(b, this.aa, this.k, this.r, this.j);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Hb(L, this.i);
};
var wd = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (p(k) && (k = k.Ba(), p(k))) {
            return new Ad(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Ad(a, b, c, h, null);
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
  c.d = b;
  c.m = a;
  return c;
}();
function Bd(a, b, c, d, e, g) {
  this.i = a;
  this.f = b;
  this.root = c;
  this.Q = d;
  this.U = e;
  this.j = g;
  this.n = 8196;
  this.g = 16123663;
}
f = Bd.prototype;
f.xa = function() {
  return new Cd({}, this.root, this.f, this.Q, this.U);
};
f.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = bc(this);
};
f.C = function(a, b) {
  return C.b(this, b, null);
};
f.D = function(a, b, c) {
  return null == b ? this.Q ? this.U : c : null == this.root ? c : t ? this.root.ka(0, F(b), b, c) : null;
};
f.wa = function(a, b, c) {
  if (null == b) {
    return this.Q && c === this.U ? this : new Bd(this.i, this.Q ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new md;
  b = (null == this.root ? sd : this.root).Z(0, F(b), b, c, a);
  return b === this.root ? this : new Bd(this.i, a.da ? this.f + 1 : this.f, b, this.Q, this.U, null);
};
f.Ha = function(a, b) {
  return null == b ? this.Q : null == this.root ? !1 : t ? this.root.ka(0, F(b), b, Qb) !== Qb : null;
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
f.d = function(a) {
  return this.C(null, a);
};
f.a = function(a, b) {
  return this.D(null, a, b);
};
f.B = function(a, b) {
  return Mb(b) ? Ca(this, z.a(b, 0), z.a(b, 1)) : Vb.b(wa, this, b);
};
f.toString = function() {
  return E(this);
};
f.G = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.Ba() : null;
    return this.Q ? O(new X(null, 2, 5, Z, [null, this.U], null), a) : a;
  }
  return null;
};
f.I = function() {
  return this.f;
};
f.t = function(a, b) {
  return ed(this, b);
};
f.H = function(a, b) {
  return new Bd(b, this.f, this.root, this.Q, this.U, this.j);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Ra(jd, this.i);
};
f.Ya = function(a, b) {
  if (null == b) {
    return this.Q ? new Bd(this.i, this.f - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (t) {
    var c = this.root.Ca(0, F(b), b);
    return c === this.root ? this : new Bd(this.i, this.f - 1, c, this.Q, this.U, null);
  }
  return null;
};
var jd = new Bd(null, 0, null, !1, null, 0);
function Db(a, b) {
  for (var c = a.length, d = 0, e = bb(jd);;) {
    if (d < c) {
      var g = d + 1, e = e.za(null, a[d], b[d]), d = g
    } else {
      return db(e);
    }
  }
}
function Cd(a, b, c, d, e) {
  this.o = a;
  this.root = b;
  this.count = c;
  this.Q = d;
  this.U = e;
  this.n = 56;
  this.g = 258;
}
f = Cd.prototype;
f.za = function(a, b, c) {
  return Dd(this, b, c);
};
f.oa = function(a, b) {
  var c;
  a: {
    if (this.o) {
      if (b ? b.g & 2048 || b.qb || (b.g ? 0 : r(Fa, b)) : r(Fa, b)) {
        c = Dd(this, cc.d ? cc.d(b) : cc.call(null, b), dc.d ? dc.d(b) : dc.call(null, b));
        break a;
      }
      c = G(b);
      for (var d = this;;) {
        var e = J(c);
        if (p(e)) {
          c = M(c), d = Dd(d, cc.d ? cc.d(e) : cc.call(null, e), dc.d ? dc.d(e) : dc.call(null, e));
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
    this.o = null, a = new Bd(null, this.count, this.root, this.Q, this.U, null);
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
function Dd(a, b, c) {
  if (a.o) {
    if (null == b) {
      a.U !== c && (a.U = c), a.Q || (a.count += 1, a.Q = !0);
    } else {
      var d = new md;
      b = (null == a.root ? sd : a.root).$(a.o, 0, F(b), b, c, d);
      b !== a.root && (a.root = b);
      d.da && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var Ed = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = G(a);
    for (var b = bb(jd);;) {
      if (a) {
        var e = M(M(a)), b = zc.b(b, J(a), J(M(a)));
        a = e;
      } else {
        return db(b);
      }
    }
  }
  a.l = 0;
  a.h = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Fd(a, b) {
  this.la = a;
  this.X = b;
  this.n = 0;
  this.g = 32374988;
}
f = Fd.prototype;
f.v = function() {
  return xb(this);
};
f.S = function() {
  var a = this.la, a = (a ? a.g & 128 || a.eb || (a.g ? 0 : r(za, a)) : r(za, a)) ? this.la.S(null) : M(this.la);
  return null == a ? null : new Fd(a, this.X);
};
f.B = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return U.a(b, this);
};
f.P = function(a, b, c) {
  return U.b(b, c, this);
};
f.G = function() {
  return this;
};
f.L = function() {
  return this.la.L(null).Za();
};
f.T = function() {
  var a = this.la, a = (a ? a.g & 128 || a.eb || (a.g ? 0 : r(za, a)) : r(za, a)) ? this.la.S(null) : M(this.la);
  return null != a ? new Fd(a, this.X) : L;
};
f.t = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new Fd(this.la, b);
};
f.F = function() {
  return this.X;
};
f.J = function() {
  return Hb(L, this.X);
};
function cc(a) {
  return Ha(a);
}
function dc(a) {
  return Ia(a);
}
function Gd(a, b, c) {
  this.i = a;
  this.qa = b;
  this.j = c;
  this.n = 8196;
  this.g = 15077647;
}
f = Gd.prototype;
f.xa = function() {
  return new Hd(bb(this.qa));
};
f.v = function() {
  var a = this.j;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = G(this);;) {
      if (b) {
        var c = J(b), a = (a + F(c)) % 4503599627370496, b = M(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.j = a;
};
f.C = function(a, b) {
  return C.b(this, b, null);
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
f.d = function(a) {
  return this.C(null, a);
};
f.a = function(a, b) {
  return this.D(null, a, b);
};
f.B = function(a, b) {
  return new Gd(this.i, Eb.b(this.qa, b, null), null);
};
f.toString = function() {
  return E(this);
};
f.G = function() {
  var a = G(this.qa);
  return a ? new Fd(a, null) : null;
};
f.fb = function(a, b) {
  return new Gd(this.i, Ea(this.qa, b), null);
};
f.I = function() {
  return x(this.qa);
};
f.t = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.g & 4096 || b.Lb ? !0 : b.g ? !1 : r(Ja, b) : r(Ja, b)) && R(c) === R(b) && Cc(function(a) {
    return S.b(c, a, Qb) === Qb ? !1 : !0;
  }, b);
};
f.H = function(a, b) {
  return new Gd(b, this.qa, this.j);
};
f.F = function() {
  return this.i;
};
f.J = function() {
  return Hb(Id, this.i);
};
var Id = new Gd(null, kd, 0);
function Hd(a) {
  this.ia = a;
  this.g = 259;
  this.n = 136;
}
f = Hd.prototype;
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return C.b(this.ia, c, Qb) === Qb ? null : c;
      case 3:
        return C.b(this.ia, c, Qb) === Qb ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.d = function(a) {
  return C.b(this.ia, a, Qb) === Qb ? null : a;
};
f.a = function(a, b) {
  return C.b(this.ia, a, Qb) === Qb ? b : a;
};
f.C = function(a, b) {
  return C.b(this, b, null);
};
f.D = function(a, b, c) {
  return C.b(this.ia, b, Qb) === Qb ? c : b;
};
f.I = function() {
  return R(this.ia);
};
f.oa = function(a, b) {
  this.ia = zc.b(this.ia, b, null);
  return this;
};
f.pa = function() {
  return new Gd(null, db(this.ia), null);
};
function Jd(a) {
  a = G(a);
  if (null == a) {
    return Id;
  }
  if (a instanceof rb && 0 === a.k) {
    a = a.c;
    a: {
      for (var b = 0, c = bb(Id);;) {
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
  if (t) {
    for (d = bb(Id);;) {
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
function Kd(a, b, c, d, e) {
  this.i = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.j = e;
  this.g = 32375006;
  this.n = 8192;
}
f = Kd.prototype;
f.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = xb(this);
};
f.S = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Kd(this.i, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Kd(this.i, this.start + this.step, this.end, this.step, null) : null;
};
f.B = function(a, b) {
  return O(b, this);
};
f.toString = function() {
  return E(this);
};
f.O = function(a, b) {
  return sb.a(this, b);
};
f.P = function(a, b, c) {
  return sb.b(this, b, c);
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
  return null != Xa(this) ? new Kd(this.i, this.start + this.step, this.end, this.step, null) : L;
};
f.t = function(a, b) {
  return P(this, b);
};
f.H = function(a, b) {
  return new Kd(b, this.start, this.end, this.step, this.j);
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
f.V = function(a, b, c) {
  return b < x(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
f.J = function() {
  return Hb(L, this.i);
};
var Ld = function() {
  function a(a, b, c) {
    return new Kd(null, a, b, c, null);
  }
  function b(a, b) {
    return e.b(a, b, 1);
  }
  function c(a) {
    return e.b(0, a, 1);
  }
  function d() {
    return e.b(0, Number.MAX_VALUE, 1);
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
  e.d = c;
  e.a = b;
  e.b = a;
  return e;
}();
function Md(a, b, c, d, e, g, h) {
  var k = fa;
  try {
    fa = null == fa ? null : fa - 1;
    if (null != fa && 0 > fa) {
      return D(a, "#");
    }
    D(a, c);
    G(h) && (b.b ? b.b(J(h), a, g) : b.call(null, J(h), a, g));
    for (var l = M(h), n = na.d(g);l && (null == n || 0 !== n);) {
      D(a, d);
      b.b ? b.b(J(l), a, g) : b.call(null, J(l), a, g);
      var q = M(l);
      c = n - 1;
      l = q;
      n = c;
    }
    p(na.d(g)) && (D(a, d), b.b ? b.b("...", a, g) : b.call(null, "...", a, g));
    return D(a, e);
  } finally {
    fa = k;
  }
}
var Nd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
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
          g = e, Nb(g) ? (e = hb(g), h = ib(g), g = e, l = R(e), e = h, h = l) : (l = J(g), D(a, l), e = M(g), g = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.l = 1;
  a.h = function(a) {
    var d = J(a);
    a = K(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Od = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Pd(a) {
  return[v('"'), v(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Od[a];
  })), v('"')].join("");
}
var $ = function Qd(b, c, d) {
  if (null == b) {
    return D(c, "nil");
  }
  if (void 0 === b) {
    return D(c, "#\x3cundefined\x3e");
  }
  if (t) {
    p(function() {
      var c = S.a(d, la);
      return p(c) ? (c = b ? b.g & 131072 || b.rb ? !0 : b.g ? !1 : r(Oa, b) : r(Oa, b)) ? Ib(b) : c : c;
    }()) && (D(c, "^"), Qd(Ib(b), c, d), D(c, " "));
    if (null == b) {
      return D(c, "nil");
    }
    if (b.kb) {
      return b.zb(c);
    }
    if (b && (b.g & 2147483648 || b.K)) {
      return b.u(null, c, d);
    }
    if (pa(b) === Boolean || "number" === typeof b) {
      return D(c, "" + v(b));
    }
    if (null != b && b.constructor === Object) {
      return D(c, "#js "), Rd.m ? Rd.m(Fc.a(function(c) {
        return new X(null, 2, 5, Z, [jc.d(c), b[c]], null);
      }, Ob(b)), Qd, c, d) : Rd.call(null, Fc.a(function(c) {
        return new X(null, 2, 5, Z, [jc.d(c), b[c]], null);
      }, Ob(b)), Qd, c, d);
    }
    if (b instanceof Array) {
      return Md(c, Qd, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return p(ka.d(d)) ? D(c, Pd(b)) : D(c, b);
    }
    if (Fb(b)) {
      return Nd.e(c, N(["#\x3c", "" + v(b), "\x3e"], 0));
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
      return Nd.e(c, N(['#inst "', "" + v(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Nd.e(c, N(['#"', b.source, '"'], 0)) : (b ? b.g & 2147483648 || b.K || (b.g ? 0 : r(Za, b)) : r(Za, b)) ? $a(b, c, d) : t ? Nd.e(c, N(["#\x3c", "" + v(b), "\x3e"], 0)) : null;
  }
  return null;
}, Sd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
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
        $(J(a), h, e);
        a = G(M(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var q = k.N(null, n);
            D(h, " ");
            $(q, h, e);
            n += 1;
          } else {
            if (a = G(a)) {
              k = a, Nb(k) ? (a = hb(k), l = ib(k), k = a, q = R(a), a = l, l = q) : (q = J(k), D(h, " "), $(q, h, e), a = M(k), k = null, l = 0), n = 0;
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
  a.l = 0;
  a.h = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Rd(a, b, c, d) {
  return Md(c, function(a, c, d) {
    b.b ? b.b(Ha(a), c, d) : b.call(null, Ha(a), c, d);
    D(c, " ");
    return b.b ? b.b(Ia(a), c, d) : b.call(null, Ia(a), c, d);
  }, "{", ", ", "}", d, G(a));
}
Fd.prototype.K = !0;
Fd.prototype.u = function(a, b, c) {
  return Md(b, $, "(", " ", ")", c, this);
};
rb.prototype.K = !0;
rb.prototype.u = function(a, b, c) {
  return Md(b, $, "(", " ", ")", c, this);
};
Zc.prototype.K = !0;
Zc.prototype.u = function(a, b, c) {
  return Md(b, $, "[", " ", "]", c, this);
};
pc.prototype.K = !0;
pc.prototype.u = function(a, b, c) {
  return Md(b, $, "(", " ", ")", c, this);
};
ia.prototype.K = !0;
ia.prototype.u = function(a, b, c) {
  return Rd(this, $, b, c);
};
kc.prototype.K = !0;
kc.prototype.u = function(a, b, c) {
  return Md(b, $, "(", " ", ")", c, this);
};
zd.prototype.K = !0;
zd.prototype.u = function(a, b, c) {
  return Md(b, $, "(", " ", ")", c, this);
};
Xc.prototype.K = !0;
Xc.prototype.u = function(a, b, c) {
  return Md(b, $, "(", " ", ")", c, this);
};
Bd.prototype.K = !0;
Bd.prototype.u = function(a, b, c) {
  return Rd(this, $, b, c);
};
Gd.prototype.K = !0;
Gd.prototype.u = function(a, b, c) {
  return Md(b, $, "#{", " ", "}", c, this);
};
X.prototype.K = !0;
X.prototype.u = function(a, b, c) {
  return Md(b, $, "[", " ", "]", c, this);
};
ec.prototype.K = !0;
ec.prototype.u = function(a, b, c) {
  return Md(b, $, "(", " ", ")", c, this);
};
gd.prototype.K = !0;
gd.prototype.u = function(a, b, c) {
  return Md(b, $, "(", " ", ")", c, this);
};
fc.prototype.K = !0;
fc.prototype.u = function(a, b) {
  return D(b, "()");
};
hc.prototype.K = !0;
hc.prototype.u = function(a, b, c) {
  return Md(b, $, "(", " ", ")", c, this);
};
Kd.prototype.K = !0;
Kd.prototype.u = function(a, b, c) {
  return Md(b, $, "(", " ", ")", c, this);
};
Ad.prototype.K = !0;
Ad.prototype.u = function(a, b, c) {
  return Md(b, $, "(", " ", ")", c, this);
};
X.prototype.Ea = !0;
X.prototype.Fa = function(a, b) {
  return Ub.a(this, b);
};
Zc.prototype.Ea = !0;
Zc.prototype.Fa = function(a, b) {
  return Ub.a(this, b);
};
V.prototype.Ea = !0;
V.prototype.Fa = function(a, b) {
  return lb(this, b);
};
pb.prototype.Ea = !0;
pb.prototype.Fa = function(a, b) {
  return lb(this, b);
};
function Td(a, b) {
  if (a ? a.ub : a) {
    return a.ub(a, b);
  }
  var c;
  c = Td[m(null == a ? null : a)];
  if (!c && (c = Td._, !c)) {
    throw u("IReset.-reset!", a);
  }
  return c.call(null, a, b);
}
var Ud = function() {
  function a(a, b, c, d, e) {
    if (a ? a.yb : a) {
      return a.yb(a, b, c, d, e);
    }
    var q;
    q = Ud[m(null == a ? null : a)];
    if (!q && (q = Ud._, !q)) {
      throw u("ISwap.-swap!", a);
    }
    return q.call(null, a, b, c, d, e);
  }
  function b(a, b, c, d) {
    if (a ? a.xb : a) {
      return a.xb(a, b, c, d);
    }
    var e;
    e = Ud[m(null == a ? null : a)];
    if (!e && (e = Ud._, !e)) {
      throw u("ISwap.-swap!", a);
    }
    return e.call(null, a, b, c, d);
  }
  function c(a, b, c) {
    if (a ? a.wb : a) {
      return a.wb(a, b, c);
    }
    var d;
    d = Ud[m(null == a ? null : a)];
    if (!d && (d = Ud._, !d)) {
      throw u("ISwap.-swap!", a);
    }
    return d.call(null, a, b, c);
  }
  function d(a, b) {
    if (a ? a.vb : a) {
      return a.vb(a, b);
    }
    var c;
    c = Ud[m(null == a ? null : a)];
    if (!c && (c = Ud._, !c)) {
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
  e.b = c;
  e.m = b;
  e.w = a;
  return e;
}();
function Vd(a, b, c, d) {
  this.state = a;
  this.i = b;
  this.Cb = c;
  this.lb = d;
  this.g = 2153938944;
  this.n = 16386;
}
f = Vd.prototype;
f.v = function() {
  return this[aa] || (this[aa] = ++ba);
};
f.hb = function(a, b, c) {
  a = G(this.lb);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.N(null, g), k = Cb.b(h, 0, null), h = Cb.b(h, 1, null);
      h.m ? h.m(k, this, b, c) : h.call(null, k, this, b, c);
      g += 1;
    } else {
      if (a = G(a)) {
        Nb(a) ? (d = hb(a), a = ib(a), k = d, e = R(d), d = k) : (d = J(a), k = Cb.b(d, 0, null), h = Cb.b(d, 1, null), h.m ? h.m(k, this, b, c) : h.call(null, k, this, b, c), a = M(a), d = null, e = 0), g = 0;
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
var Xd = function() {
  function a(a) {
    return new Vd(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Rb(c) ? T.a(Ed, c) : c, e = S.a(d, Wd), d = S.a(d, la);
      return new Vd(a, d, e, null);
    }
    a.l = 1;
    a.h = function(a) {
      var c = J(a);
      a = K(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.l = 1;
  b.h = c.h;
  b.d = a;
  b.e = c.e;
  return b;
}();
function Yd(a, b) {
  if (a instanceof Vd) {
    var c = a.Cb;
    if (null != c && !p(c.d ? c.d(b) : c.call(null, b))) {
      throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(Sd.e(N([gc(new pb(null, "validate", "validate", 1233162959, null), new pb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
    }
    c = a.state;
    a.state = b;
    null != a.lb && ab(a, c, b);
    return b;
  }
  return Td(a, b);
}
var Zd = function() {
  function a(a, b, c, d) {
    return a instanceof Vd ? Yd(a, b.b ? b.b(a.state, c, d) : b.call(null, a.state, c, d)) : Ud.m(a, b, c, d);
  }
  function b(a, b, c) {
    return a instanceof Vd ? Yd(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c)) : Ud.b(a, b, c);
  }
  function c(a, b) {
    return a instanceof Vd ? Yd(a, b.d ? b.d(a.state) : b.call(null, a.state)) : Ud.a(a, b);
  }
  var d = null, e = function() {
    function a(c, d, e, g, s) {
      var y = null;
      4 < arguments.length && (y = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, y);
    }
    function b(a, c, d, e, g) {
      return a instanceof Vd ? Yd(a, T.w(c, a.state, d, e, g)) : Ud.w(a, c, d, e, g);
    }
    a.l = 4;
    a.h = function(a) {
      var c = J(a);
      a = M(a);
      var d = J(a);
      a = M(a);
      var e = J(a);
      a = M(a);
      var g = J(a);
      a = K(a);
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
        return e.e(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.l = 4;
  d.h = e.h;
  d.a = c;
  d.b = b;
  d.m = a;
  d.e = e.e;
  return d;
}(), Zb = function() {
  function a(a) {
    return(Math.random.p ? Math.random.p() : Math.random.call(null)) * a;
  }
  function b() {
    return c.d(1);
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
  c.d = a;
  return c;
}(), $b = function(a) {
  return Math.floor.d ? Math.floor.d((Math.random.p ? Math.random.p() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.p ? Math.random.p() : Math.random.call(null)) * a);
};
var ma = new V(null, "dup", "dup"), $d = new V(null, "bottom", "bottom"), ob = new V(null, "default", "default"), ae = new V(null, "width", "width"), be = new V(null, "dir", "dir"), ja = new V(null, "flush-on-newline", "flush-on-newline"), ce = new V(null, "location", "location"), de = new V(null, "top", "top"), na = new V(null, "print-length", "print-length"), ee = new V(null, "right", "right"), fe = new V(null, "left", "left"), t = new V(null, "else", "else"), ka = new V(null, "readably", "readably"), 
Wd = new V(null, "validator", "validator"), la = new V(null, "meta", "meta"), ge = new V(null, "prizes", "prizes"), he = new V(null, "height", "height");
function ie(a) {
  a = Rb(a) ? T.a(Ed, a) : a;
  var b = S.a(a, ce), c = S.a(a, ge), d = S.a(a, he), e = S.a(a, ae), g = vc.a(b, c), b = function() {
    return function(a) {
      return function l(b) {
        return new kc(null, function(a) {
          return function() {
            for (var c = b;;) {
              var g = G(c);
              if (g) {
                var h = g, I = J(h);
                if (I < e) {
                  if (g = G(function(a, b, c, e, g) {
                    return function ub(h) {
                      return new kc(null, function(a, b, c, e, g) {
                        return function() {
                          for (var a = h;;) {
                            if (a = G(a)) {
                              if (Nb(a)) {
                                var c = hb(a), e = R(c), l = new mc(Array(e), 0);
                                a: {
                                  for (var n = 0;;) {
                                    if (n < e) {
                                      var q = z.a(c, n);
                                      if (q < d) {
                                        Cc(Ec.a(Bc, new X(null, 2, 5, Z, [b, q], null)), g) && l.add(new X(null, 2, 5, Z, [b, q], null)), n += 1;
                                      } else {
                                        c = null;
                                        break a;
                                      }
                                    } else {
                                      c = !0;
                                      break a;
                                    }
                                  }
                                  c = void 0;
                                }
                                return c ? qc(l.Y(), ub(ib(a))) : qc(l.Y(), null);
                              }
                              l = J(a);
                              if (l < d) {
                                if (Cc(Ec.a(Bc, new X(null, 2, 5, Z, [b, l], null)), g)) {
                                  return O(new X(null, 2, 5, Z, [b, l], null), ub(K(a)));
                                }
                                a = K(a);
                              } else {
                                return null;
                              }
                            } else {
                              return null;
                            }
                          }
                        };
                      }(a, b, c, e, g), null, null);
                    };
                  }(c, I, h, g, a)(Ld.p()))) {
                    return vc.a(g, l(K(c)));
                  }
                  c = K(c);
                } else {
                  return null;
                }
              } else {
                return null;
              }
            }
          };
        }(a), null, null);
      };
    }(g)(Ld.p());
  }();
  return Eb.b(a, ge, Ab.a(c, Cb.a(b, $b(R(b)))));
}
function je(a) {
  var b, c = Rb(a) ? T.a(Ed, a) : a;
  b = S.a(c, ce);
  c = S.a(c, be);
  b = Ic.b(Wb, c, zb(b));
  var c = a.d ? a.d(ge) : a.call(null, ge), d = Jd(K(a.d ? a.d(ce) : a.call(null, ce))), d = d.d ? d.d(b) : d.call(null, b);
  if (!p(d)) {
    var d = Cb.b(b, 0, null), e = Cb.b(b, 1, null), d = 0 > d || d >= (a.d ? a.d(ae) : a.call(null, ae)) || 0 > e || e >= (a.d ? a.d(he) : a.call(null, he))
  }
  p(d) ? b = !1 : p(c.d ? c.d(b) : c.call(null, b)) ? (a = Rb(a) ? T.a(Ed, a) : a, c = S.a(a, ce), d = S.a(a, ge), b = ie(Eb.e(a, ge, Jb.a(d, b), N([ce, Ab.a(c, b)], 0)))) : t ? (a = Rb(a) ? T.a(Ed, a) : a, c = S.a(a, ce), b = Eb.b(a, ce, Wc(K(Ab.a(c, b))))) : b = null;
  return b;
}
function ke(a, b) {
  var c = new ia(null, 4, [fe, new X(null, 2, 5, Z, [-1, 0], null), ee, new X(null, 2, 5, Z, [1, 0], null), de, new X(null, 2, 5, Z, [0, -1], null), $d, new X(null, 2, 5, Z, [0, 1], null)], null);
  return mb.a(new X(null, 2, 5, Z, [0, 0], null), Fc.b(Wb, c.d ? c.d(b) : c.call(null, b), a.d ? a.d(be) : a.call(null, be))) ? a : Eb.b(a, be, c.d ? c.d(b) : c.call(null, b));
}
;var le = new X(null, 3, 5, Z, [255, 101, 0], null), me = new X(null, 3, 5, Z, [112, 174, 32], null), ne = new ia(null, 4, [37, fe, 38, de, 39, ee, 40, $d], null);
function oe() {
  var a = pe;
  document.onkeydown = function(b) {
    b = ne.d ? ne.d(b.keyCode) : ne.call(null, b.keyCode);
    return p(b) ? Zd.b(a, ke, b) : null;
  };
}
function qe(a) {
  return(null == a ? 0 : a ? a.g & 8 || a.Fb || (a.g ? 0 : r(va, a)) : r(va, a)) ? Ic.a(Ec.a(Xb, 10), a) : 10 * a;
}
function re(a, b) {
  var c = Rb(a) ? T.a(Ed, a) : a, d = S.a(c, he), c = S.a(c, ae);
  b.clearRect(0, 0, qe(c), qe(d));
}
function se(a, b, c) {
  return[v("rgb("), v(a), v(","), v(b), v(","), v(c), v(")")].join("");
}
function te(a, b, c, d) {
  var e = Cb.b(c, 0, null), g = Cb.b(c, 1, null);
  c = Cb.b(c, 2, null);
  d.fillStyle = se(e, g, c);
  d.fillRect(qe(a), qe(b), 10, 10);
  d.fillStyle = se(e, g, c);
  d.strokeRect(qe(a), qe(b), 10, 10);
}
function ue(a, b, c) {
  a = G(a);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.N(null, g), k = Cb.b(h, 0, null), h = Cb.b(h, 1, null);
      te(k, h, b, c);
      g += 1;
    } else {
      if (a = G(a)) {
        Nb(a) ? (d = hb(a), a = ib(a), k = d, e = R(d), d = k) : (d = J(a), k = Cb.b(d, 0, null), h = Cb.b(d, 1, null), te(k, h, b, c), a = M(a), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
}
function ve() {
  var a = Na(pe), b = document.getElementById("canvas").getContext("2d"), c = function(a) {
    return function(b) {
      return ue(b, le, a);
    };
  }(b), d = function(a) {
    return function(b) {
      return ue(b, me, a);
    };
  }(b, c);
  re(a, b);
  c(a.d ? a.d(ge) : a.call(null, ge));
  d(a.d ? a.d(ce) : a.call(null, ce));
}
;var we = new X(null, 2, 5, Z, [1, 0], null), xe;
a: {
  var ye = [new X(null, 2, 5, Z, [$b(30), 2 + ($b(30) - 1)], null)], ze = ye.length;
  if (ze <= id) {
    for (var Ae = 0, Be = bb(kd);;) {
      if (Ae < ze) {
        var Ce = Ae + 1, De = eb(Be, ye[Ae], null), Ae = Ce, Be = De
      } else {
        xe = new Gd(null, db(Be), null);
        break a;
      }
    }
  } else {
    for (Ae = 0, Be = bb(Id);;) {
      if (Ae < ze) {
        var Ee = Ae + 1, Fe = cb(Be, ye[Ae]), Ae = Ee, Be = Fe
      } else {
        xe = db(Be);
        break a;
      }
    }
  }
  xe = void 0;
}
var pe = Xd.d(new ia(null, 5, [be, we, ae, 30, he, 30, ge, xe, ce, new X(null, 3, 5, Z, [new X(null, 2, 5, Z, [1, 1], null), new X(null, 2, 5, Z, [2, 1], null), new X(null, 2, 5, Z, [3, 1], null)], null)], null)), He = function Ge() {
  return p(Na(pe)) ? (ve(), setTimeout(function() {
    return Ge(Zd.a(pe, je));
  }, 150)) : alert("GAME OVER");
};
function Ie() {
  var a = Na(pe), b = document.getElementById("canvas");
  b.setAttribute("width", qe(a.d ? a.d(ae) : a.call(null, ae)));
  b.setAttribute("height", qe(a.d ? a.d(he) : a.call(null, he)));
  oe();
  return He();
}
var Je = ["snake", "game", "start"], Ke = this;
Je[0] in Ke || !Ke.execScript || Ke.execScript("var " + Je[0]);
for (var Le;Je.length && (Le = Je.shift());) {
  var Me;
  if (Me = !Je.length) {
    Me = void 0 !== Ie;
  }
  Me ? Ke[Le] = Ie : Ke = Ke[Le] ? Ke[Le] : Ke[Le] = {};
}
;
})();
