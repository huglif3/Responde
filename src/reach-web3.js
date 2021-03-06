// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  return {
    Concluded: [ctc0],
    Created: [ctc0]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc4 = stdlib.T_Struct([['adminFee', ctc1], ['fee', ctc1], ['title', ctc2], ['description', ctc3]]);
  const ctc5 = stdlib.T_Bool;
  const ctc6 = stdlib.T_Null;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc5, ctc5]);
  const ctc8 = stdlib.T_Data({
    None: ctc6,
    Some: ctc7
    });
  const map0_ctc = ctc8;
  
  
  return {
    infos: {
      info: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313] = svs;
            return (await ((async () => {
              
              
              return v2283;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc4
        },
      isAttending: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313] = svs;
            return (await ((async (_v2318 ) => {
                const v2318 = stdlib.protect(ctc0, _v2318, null);
              
              const v2319 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2318), null);
              const v2320 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
              const v2321 = stdlib.fromSome(v2319, v2320);
              const v2322 = v2321[stdlib.checkedBigNumberify('./index.rsh:64:15:array', stdlib.UInt_max, '0')];
              let v2326;
              switch (v2319[0]) {
                case 'None': {
                  const v2327 = v2319[1];
                  v2326 = false;
                  
                  break;
                  }
                case 'Some': {
                  const v2328 = v2319[1];
                  v2326 = true;
                  
                  break;
                  }
                }
              const v2329 = stdlib.ge(v2322, v2312);
              const v2330 = v2326 ? v2329 : false;
              
              return v2330;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc5
        },
      stakeBalance: {
        decode: async (i, svs, args) => {
          if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
            const [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313] = svs;
            return (await ((async (_v2331 ) => {
                const v2331 = stdlib.protect(ctc0, _v2331, null);
              
              const v2332 = stdlib.protect(map0_ctc, await viewlib.viewMapRef(0, v2331), null);
              const v2333 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
              const v2334 = stdlib.fromSome(v2332, v2333);
              const v2335 = v2334[stdlib.checkedBigNumberify('./index.rsh:68:15:array', stdlib.UInt_max, '0')];
              
              return v2335;}))(...args));
            }
          
          stdlib.assert(false, 'illegal view')
          },
        ty: ctc1
        }
      },
    views: {
      3: [ctc0, ctc4, ctc4, ctc5, ctc1, ctc1, ctc1, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([ctc4]);
  return {
    mapDataTy: ctc5
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Tuple([]);
  const ctc6 = stdlib.T_Tuple([ctc1]);
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc8 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc9 = stdlib.T_Struct([['adminFee', ctc1], ['fee', ctc1], ['title', ctc7], ['description', ctc8]]);
  const ctc10 = stdlib.T_Tuple([ctc9]);
  const ctc11 = stdlib.T_Address;
  const ctc12 = stdlib.T_Tuple([ctc11]);
  const ctc13 = stdlib.T_Data({
    checkIn0_157: ctc5,
    claimStake0_157: ctc6,
    concludeEvent0_157: ctc5,
    createEvent0_157: ctc10,
    register0_157: ctc5,
    shutDown0_157: ctc5,
    verifyAttendance0_157: ctc12
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:49:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:49:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [], secs: v2277, time: v2276, didSend: v22, from: v2275 } = txn1;
      
      ;
      const v2278 = await ctc.getContractInfo();
      
      const v2280 = '                                                                                                                                ';
      const v2281 = '                                                                                                                                                                                                                                                                ';
      const v2282 = {
        adminFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        description: v2281,
        fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        title: v2280
        };
      const v2283 = v2282;
      const v2284 = true;
      const v2285 = false;
      const v2286 = v2276;
      const v2289 = stdlib.checkedBigNumberify('./index.rsh:47:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        
        return v2284;})()) {
        const v2310 = v2283.adminFee;
        const v2312 = v2283.fee;
        const v2313 = v2283.title;
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'from',
          to: v2275,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v2277, time: v2276, didSend: v22, from: v2275 } = txn1;
  ;
  const v2278 = await ctc.getContractInfo();
  stdlib.protect(ctc0, await interact.done(v2278), {
    at: './index.rsh:50:22:application',
    fs: ['at ./index.rsh:50:22:application call to [unknown function] (defined at: ./index.rsh:50:22:function exp)', 'at ./index.rsh:50:22:application call to "liftedInteract" (defined at: ./index.rsh:50:22:application)'],
    msg: 'done',
    who: 'Admin'
    });
  
  const v2280 = '                                                                                                                                ';
  const v2281 = '                                                                                                                                                                                                                                                                ';
  const v2282 = {
    adminFee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    description: v2281,
    fee: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    title: v2280
    };
  let v2283 = v2282;
  let v2284 = true;
  let v2285 = false;
  let v2286 = v2276;
  let v2289 = stdlib.checkedBigNumberify('./index.rsh:47:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    
    return v2284;})()) {
    const v2310 = v2283.adminFee;
    const v2312 = v2283.fee;
    const v2313 = v2283.title;
    const txn2 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 2,
      out_tys: [ctc13],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn2;
    switch (v2559[0]) {
      case 'checkIn0_157': {
        const v2562 = v2559[1];
        undefined /* setApiDetails */;
        const v2602 = stdlib.le(v2289, stdlib.UInt_max);
        stdlib.assert(v2602, {
          at: './index.rsh:55:58:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        stdlib.assert(v2285, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:152:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:13:application call to [unknown function] (defined at: ./index.rsh:158:13:function exp)'],
          msg: 'No active Event',
          who: 'Admin'
          });
        const v2608 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2558), null);
        const v2609 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
        const v2610 = stdlib.fromSome(v2608, v2609);
        const v2611 = v2610[stdlib.checkedBigNumberify('./index.rsh:153:13:array', stdlib.UInt_max, '0')];
        const v2612 = v2610[stdlib.checkedBigNumberify('./index.rsh:153:13:array', stdlib.UInt_max, '1')];
        const v2613 = v2610[stdlib.checkedBigNumberify('./index.rsh:153:13:array', stdlib.UInt_max, '2')];
        const v2614 = stdlib.gt(v2611, stdlib.checkedBigNumberify('./index.rsh:154:22:decimal', stdlib.UInt_max, '0'));
        const v2615 = stdlib.le(v2611, v2312);
        const v2616 = v2614 ? v2615 : false;
        stdlib.assert(v2616, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:13:application call to [unknown function] (defined at: ./index.rsh:158:13:function exp)'],
          msg: 'No registration found for Address',
          who: 'Admin'
          });
        const v2618 = v2612 ? false : true;
        stdlib.assert(v2618, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:13:application call to [unknown function] (defined at: ./index.rsh:158:13:function exp)'],
          msg: 'Address has attended this event',
          who: 'Admin'
          });
        const v2620 = null;
        await txn2.getOutput('checkIn', 'v2620', ctc0, v2620);
        const v2626 = [v2611, true, v2613];
        await stdlib.mapSet(map0, v2558, v2626);
        const cv2283 = v2283;
        const cv2284 = true;
        const cv2285 = true;
        const cv2286 = v2560;
        const cv2289 = v2289;
        
        v2283 = cv2283;
        v2284 = cv2284;
        v2285 = cv2285;
        v2286 = cv2286;
        v2289 = cv2289;
        
        continue;
        break;
        }
      case 'claimStake0_157': {
        const v2812 = v2559[1];
        undefined /* setApiDetails */;
        const v2852 = stdlib.le(v2289, stdlib.UInt_max);
        stdlib.assert(v2852, {
          at: './index.rsh:55:58:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v2879 = v2812[stdlib.checkedBigNumberify('./index.rsh:181:10:spread', stdlib.UInt_max, '0')];
        const v2880 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2558), null);
        const v2881 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
        const v2882 = stdlib.fromSome(v2880, v2881);
        const v2883 = v2882[stdlib.checkedBigNumberify('./index.rsh:182:13:array', stdlib.UInt_max, '0')];
        const v2884 = v2882[stdlib.checkedBigNumberify('./index.rsh:182:13:array', stdlib.UInt_max, '1')];
        const v2885 = v2882[stdlib.checkedBigNumberify('./index.rsh:182:13:array', stdlib.UInt_max, '2')];
        const v2886 = stdlib.gt(v2883, stdlib.checkedBigNumberify('./index.rsh:183:22:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v2886, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:183:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
          msg: 'No registration found for Address',
          who: 'Admin'
          });
        const v2889 = stdlib.le(v2883, v2289);
        stdlib.assert(v2889, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
          msg: 'Insufficient balance',
          who: 'Admin'
          });
        if (v2285) {
          stdlib.assert(v2885, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:186:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
            msg: 'Your attendance was not verified',
            who: 'Admin'
            });
          }
        else {
          const v2892 = v2884 ? v2885 : false;
          stdlib.assert(v2892, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./index.rsh:188:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
            msg: 'You did not attend the event',
            who: 'Admin'
            });
          }
        const v2894 = stdlib.gt(v2879, stdlib.checkedBigNumberify('./index.rsh:190:19:decimal', stdlib.UInt_max, '0'));
        const v2895 = stdlib.le(v2879, v2883);
        const v2896 = v2894 ? v2895 : false;
        stdlib.assert(v2896, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
          msg: 'Invalid harvest amount',
          who: 'Admin'
          });
        const v2899 = stdlib.sub(v2883, v2879);
        const v2904 = stdlib.sub(v2289, v2879);
        const v2905 = stdlib.ge(v2904, stdlib.checkedBigNumberify('./index.rsh:195:27:application', stdlib.UInt_max, '0'));
        stdlib.assert(v2905, {
          at: './index.rsh:195:27:application',
          fs: ['at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v2908 = null;
        await txn2.getOutput('claimStake', 'v2908', ctc0, v2908);
        const v2915 = stdlib.eq(v2899, stdlib.checkedBigNumberify('./index.rsh:198:28:decimal', stdlib.UInt_max, '0'));
        if (v2915) {
          await stdlib.mapSet(map0, v2558, undefined /* Nothing */);
          const cv2283 = v2283;
          const cv2284 = true;
          const cv2285 = v2285;
          const cv2286 = v2560;
          const cv2289 = v2904;
          
          v2283 = cv2283;
          v2284 = cv2284;
          v2285 = cv2285;
          v2286 = cv2286;
          v2289 = cv2289;
          
          continue;}
        else {
          const v2917 = [v2899, v2884, v2885];
          await stdlib.mapSet(map0, v2558, v2917);
          const cv2283 = v2283;
          const cv2284 = true;
          const cv2285 = v2285;
          const cv2286 = v2560;
          const cv2289 = v2904;
          
          v2283 = cv2283;
          v2284 = cv2284;
          v2285 = cv2285;
          v2286 = cv2286;
          v2289 = cv2289;
          
          continue;}
        break;
        }
      case 'concludeEvent0_157': {
        const v3062 = v2559[1];
        undefined /* setApiDetails */;
        const v3102 = stdlib.le(v2289, stdlib.UInt_max);
        stdlib.assert(v3102, {
          at: './index.rsh:55:58:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        stdlib.assert(v2285, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
          msg: 'No active Event',
          who: 'Admin'
          });
        const v3171 = stdlib.addressEq(v2558, v2275);
        stdlib.assert(v3171, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
          msg: 'This address cannot perform that action',
          who: 'Admin'
          });
        const v3173 = null;
        await txn2.getOutput('concludeEvent', 'v3173', ctc0, v3173);
        null;
        const cv2283 = v2282;
        const cv2284 = true;
        const cv2285 = false;
        const cv2286 = v2560;
        const cv2289 = v2289;
        
        v2283 = cv2283;
        v2284 = cv2284;
        v2285 = cv2285;
        v2286 = cv2286;
        v2289 = cv2289;
        
        continue;
        break;
        }
      case 'createEvent0_157': {
        const v3312 = v2559[1];
        undefined /* setApiDetails */;
        const v3352 = stdlib.le(v2289, stdlib.UInt_max);
        stdlib.assert(v3352, {
          at: './index.rsh:55:58:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v3438 = v3312[stdlib.checkedBigNumberify('./index.rsh:88:10:spread', stdlib.UInt_max, '0')];
        const v3439 = v2285 ? false : true;
        stdlib.assert(v3439, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'Event in progress',
          who: 'Admin'
          });
        const v3441 = stdlib.addressEq(v2558, v2275);
        stdlib.assert(v3441, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'This address cannot perform that action',
          who: 'Admin'
          });
        const v3443 = v3438.adminFee;
        const v3444 = v3438.fee;
        const v3445 = v3438.title;
        const v3448 = stdlib.gt(v3444, stdlib.checkedBigNumberify('./index.rsh:97:33:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3448, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:97:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:22:application call to "checkReasonable" (defined at: ./index.rsh:92:44:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'Event fee cannot be 0',
          who: 'Admin'
          });
        const v3450 = stdlib.lt(v3444, stdlib.UInt_max);
        stdlib.assert(v3450, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:98:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:22:application call to "checkReasonable" (defined at: ./index.rsh:92:44:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'That is an absurd fee',
          who: 'Admin'
          });
        const v3453 = stdlib.lt(v3443, stdlib.UInt_max);
        stdlib.assert(v3453, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:98:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:102:22:application call to "checkReasonable" (defined at: ./index.rsh:92:44:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'That is an absurd Admin fee',
          who: 'Admin'
          });
        const v3456 = stdlib.sub(stdlib.UInt_max, v3443);
        const v3457 = stdlib.lt(v3444, v3456);
        stdlib.assert(v3457, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:103:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'Fee is too large',
          who: 'Admin'
          });
        const v3461 = stdlib.add(v3444, v3443);
        const v3464 = stdlib.sub(stdlib.UInt_max, v3461);
        const v3465 = stdlib.lt(v2289, v3464);
        stdlib.assert(v3465, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'No one can join at this price',
          who: 'Admin'
          });
        const v3468 = null;
        await txn2.getOutput('createEvent', 'v3468', ctc0, v3468);
        null;
        const cv2283 = v3438;
        const cv2284 = true;
        const cv2285 = true;
        const cv2286 = v2560;
        const cv2289 = v2289;
        
        v2283 = cv2283;
        v2284 = cv2284;
        v2285 = cv2285;
        v2286 = cv2286;
        v2289 = cv2289;
        
        continue;
        break;
        }
      case 'register0_157': {
        const v3562 = v2559[1];
        undefined /* setApiDetails */;
        stdlib.assert(v2285, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
          msg: 'No active Event',
          who: 'Admin'
          });
        const v3572 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2558), null);
        const v3573 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
        const v3574 = stdlib.fromSome(v3572, v3573);
        const v3575 = v3574[stdlib.checkedBigNumberify('./index.rsh:132:13:array', stdlib.UInt_max, '0')];
        const v3578 = stdlib.lt(v3575, v2312);
        stdlib.assert(v3578, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:133:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
          msg: 'Address is registered for this Event',
          who: 'Admin'
          });
        const v3581 = stdlib.sub(v2312, v3575);
        const v3583 = stdlib.sub(stdlib.UInt_max, v2310);
        const v3584 = stdlib.lt(v3581, v3583);
        stdlib.assert(v3584, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:134:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
          msg: 'Event registration is at capacity',
          who: 'Admin'
          });
        const v3590 = stdlib.add(v3581, v2310);
        const v3591 = stdlib.gt(v3590, stdlib.checkedBigNumberify('./index.rsh:136:21:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v3591, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:136:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
          msg: 'Invalid fee amount',
          who: 'Admin'
          });
        const v3595 = stdlib.sub(stdlib.UInt_max, v2289);
        const v3596 = stdlib.lt(v3590, v3595);
        stdlib.assert(v3596, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
          msg: 'Registration limit reached',
          who: 'Admin'
          });
        const v3601 = stdlib.add(v2289, v3590);
        const v3602 = stdlib.le(v3601, stdlib.UInt_max);
        stdlib.assert(v3602, {
          at: './index.rsh:55:58:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v3755 = stdlib.sub(stdlib.UInt_max, v3601);
        const v3756 = stdlib.lt(v3590, v3755);
        stdlib.assert(v3756, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:142:13:application call to [unknown function] (defined at: ./index.rsh:142:13:function exp)'],
          msg: 'Registration limit reached',
          who: 'Admin'
          });
        const v3758 = null;
        await txn2.getOutput('register', 'v3758', ctc0, v3758);
        const v3767 = stdlib.sub(v3601, v2310);
        const v3768 = stdlib.ge(v3767, stdlib.checkedBigNumberify('./index.rsh:144:32:application', stdlib.UInt_max, '0'));
        stdlib.assert(v3768, {
          at: './index.rsh:144:32:application',
          fs: ['at ./index.rsh:142:13:application call to [unknown function] (defined at: ./index.rsh:142:13:function exp)'],
          msg: 'assume >= 0',
          who: 'Admin'
          });
        ;
        const v3771 = [v2312, false, false];
        await stdlib.mapSet(map0, v2558, v3771);
        const cv2283 = v2283;
        const cv2284 = true;
        const cv2285 = true;
        const cv2286 = v2560;
        const cv2289 = v3767;
        
        v2283 = cv2283;
        v2284 = cv2284;
        v2285 = cv2285;
        v2286 = cv2286;
        v2289 = cv2289;
        
        continue;
        break;
        }
      case 'shutDown0_157': {
        const v3812 = v2559[1];
        undefined /* setApiDetails */;
        const v3852 = stdlib.le(v2289, stdlib.UInt_max);
        stdlib.assert(v3852, {
          at: './index.rsh:55:58:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v4024 = stdlib.addressEq(v2558, v2275);
        stdlib.assert(v4024, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:77:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:13:application call to [unknown function] (defined at: ./index.rsh:81:13:function exp)'],
          msg: 'This address cannot perform that action',
          who: 'Admin'
          });
        const v4026 = v2285 ? false : true;
        stdlib.assert(v4026, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:13:application call to [unknown function] (defined at: ./index.rsh:81:13:function exp)'],
          msg: 'Event in progress',
          who: 'Admin'
          });
        const v4029 = stdlib.eq(v2289, stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4029, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:79:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:13:application call to [unknown function] (defined at: ./index.rsh:81:13:function exp)'],
          msg: 'Withdrawals still in progress',
          who: 'Admin'
          });
        const v4031 = null;
        await txn2.getOutput('shutDown', 'v4031', ctc0, v4031);
        const cv2283 = v2283;
        const cv2284 = false;
        const cv2285 = false;
        const cv2286 = v2560;
        const cv2289 = v2289;
        
        v2283 = cv2283;
        v2284 = cv2284;
        v2285 = cv2285;
        v2286 = cv2286;
        v2289 = cv2289;
        
        continue;
        break;
        }
      case 'verifyAttendance0_157': {
        const v4062 = v2559[1];
        undefined /* setApiDetails */;
        const v4102 = stdlib.le(v2289, stdlib.UInt_max);
        stdlib.assert(v4102, {
          at: './index.rsh:55:58:dot',
          fs: [],
          msg: 'assume <= UInt.max',
          who: 'Admin'
          });
        ;
        const v4289 = v4062[stdlib.checkedBigNumberify('./index.rsh:166:10:spread', stdlib.UInt_max, '0')];
        const v4290 = stdlib.addressEq(v2558, v2275);
        stdlib.assert(v4290, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:167:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
          msg: 'This address cannot perform that action',
          who: 'Admin'
          });
        const v4292 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4289), null);
        const v4293 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
        const v4294 = stdlib.fromSome(v4292, v4293);
        const v4295 = v4294[stdlib.checkedBigNumberify('./index.rsh:168:13:array', stdlib.UInt_max, '0')];
        const v4297 = v4294[stdlib.checkedBigNumberify('./index.rsh:168:13:array', stdlib.UInt_max, '2')];
        const v4298 = stdlib.gt(v4295, stdlib.checkedBigNumberify('./index.rsh:169:22:decimal', stdlib.UInt_max, '0'));
        stdlib.assert(v4298, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
          msg: 'No registration found for Address',
          who: 'Admin'
          });
        const v4300 = v4297 ? false : true;
        stdlib.assert(v4300, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
          msg: 'Attendance confirmed for participant',
          who: 'Admin'
          });
        const v4303 = null;
        await txn2.getOutput('verifyAttendance', 'v4303', ctc0, v4303);
        const v4310 = [v4295, true, true];
        await stdlib.mapSet(map0, v4289, v4310);
        const cv2283 = v2283;
        const cv2284 = true;
        const cv2285 = v2285;
        const cv2286 = v2560;
        const cv2289 = v2289;
        
        v2283 = cv2283;
        v2284 = cv2284;
        v2285 = cv2285;
        v2286 = cv2286;
        v2289 = cv2289;
        
        continue;
        break;
        }
      }
    
    }
  const v4344 = stdlib.sub(v2289, v2289);
  const v4345 = stdlib.ge(v4344, stdlib.checkedBigNumberify('./index.rsh:209:25:application', stdlib.UInt_max, '0'));
  stdlib.assert(v4345, {
    at: './index.rsh:209:25:application',
    fs: [],
    msg: 'assume >= 0',
    who: 'Admin'
    });
  ;
  return;
  
  
  };
export async function _checkIn3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _checkIn3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _checkIn3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc8 = stdlib.T_Struct([['adminFee', ctc1], ['fee', ctc1], ['title', ctc6], ['description', ctc7]]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc5]);
  const ctc13 = stdlib.T_Data({
    checkIn0_157: ctc9,
    claimStake0_157: ctc10,
    concludeEvent0_157: ctc9,
    createEvent0_157: ctc11,
    register0_157: ctc9,
    shutDown0_157: ctc9,
    verifyAttendance0_157: ctc12
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6]);
  const v2447 = ctc.selfAddress();
  const v2449 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:151:32:application call to [unknown function] (defined at: ./index.rsh:151:32:function exp)', 'at ./index.rsh:55:58:application call to "runcheckIn0_157" (defined at: ./index.rsh:151:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'in',
    who: 'checkIn'
    });
  stdlib.assert(v2285, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:152:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:151:32:application call to [unknown function] (defined at: ./index.rsh:151:32:function exp)', 'at ./index.rsh:55:58:application call to "runcheckIn0_157" (defined at: ./index.rsh:151:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'No active Event',
    who: 'checkIn'
    });
  const v2451 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2447), null);
  const v2452 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
  const v2453 = stdlib.fromSome(v2451, v2452);
  const v2454 = v2453[stdlib.checkedBigNumberify('./index.rsh:153:13:array', stdlib.UInt_max, '0')];
  const v2455 = v2453[stdlib.checkedBigNumberify('./index.rsh:153:13:array', stdlib.UInt_max, '1')];
  const v2457 = stdlib.gt(v2454, stdlib.checkedBigNumberify('./index.rsh:154:22:decimal', stdlib.UInt_max, '0'));
  const v2458 = stdlib.le(v2454, v2312);
  const v2459 = v2457 ? v2458 : false;
  stdlib.assert(v2459, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:151:32:application call to [unknown function] (defined at: ./index.rsh:151:32:function exp)', 'at ./index.rsh:55:58:application call to "runcheckIn0_157" (defined at: ./index.rsh:151:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'No registration found for Address',
    who: 'checkIn'
    });
  const v2461 = v2455 ? false : true;
  stdlib.assert(v2461, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:151:32:application call to [unknown function] (defined at: ./index.rsh:151:32:function exp)', 'at ./index.rsh:55:58:application call to "runcheckIn0_157" (defined at: ./index.rsh:151:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Address has attended this event',
    who: 'checkIn'
    });
  const v2466 = ['checkIn0_157', v2449];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313, v2466],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:151:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
      
      switch (v2559[0]) {
        case 'checkIn0_157': {
          const v2562 = v2559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "checkIn"
            });
          ;
          const v2608 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2558), null);
          const v2609 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
          const v2610 = stdlib.fromSome(v2608, v2609);
          const v2611 = v2610[stdlib.checkedBigNumberify('./index.rsh:153:13:array', stdlib.UInt_max, '0')];
          const v2613 = v2610[stdlib.checkedBigNumberify('./index.rsh:153:13:array', stdlib.UInt_max, '2')];
          const v2620 = null;
          const v2621 = await txn1.getOutput('checkIn', 'v2620', ctc0, v2620);
          
          const v2626 = [v2611, true, v2613];
          await stdlib.simMapSet(sim_r, 0, v2558, v2626);
          const v5725 = v2283;
          const v5727 = true;
          const v5729 = v2289;
          const v5730 = v2283.adminFee;
          const v5731 = v2283.fee;
          const v5732 = v2283.title;
          sim_r.isHalt = false;
          
          break;
          }
        case 'claimStake0_157': {
          const v2812 = v2559[1];
          
          break;
          }
        case 'concludeEvent0_157': {
          const v3062 = v2559[1];
          
          break;
          }
        case 'createEvent0_157': {
          const v3312 = v2559[1];
          
          break;
          }
        case 'register0_157': {
          const v3562 = v2559[1];
          
          break;
          }
        case 'shutDown0_157': {
          const v3812 = v2559[1];
          
          break;
          }
        case 'verifyAttendance0_157': {
          const v4062 = v2559[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
  switch (v2559[0]) {
    case 'checkIn0_157': {
      const v2562 = v2559[1];
      undefined /* setApiDetails */;
      const v2602 = stdlib.le(v2289, stdlib.UInt_max);
      stdlib.assert(v2602, {
        at: './index.rsh:55:58:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'checkIn'
        });
      ;
      stdlib.assert(v2285, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:152:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:13:application call to [unknown function] (defined at: ./index.rsh:158:13:function exp)'],
        msg: 'No active Event',
        who: 'checkIn'
        });
      const v2608 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2558), null);
      const v2609 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
      const v2610 = stdlib.fromSome(v2608, v2609);
      const v2611 = v2610[stdlib.checkedBigNumberify('./index.rsh:153:13:array', stdlib.UInt_max, '0')];
      const v2612 = v2610[stdlib.checkedBigNumberify('./index.rsh:153:13:array', stdlib.UInt_max, '1')];
      const v2613 = v2610[stdlib.checkedBigNumberify('./index.rsh:153:13:array', stdlib.UInt_max, '2')];
      const v2614 = stdlib.gt(v2611, stdlib.checkedBigNumberify('./index.rsh:154:22:decimal', stdlib.UInt_max, '0'));
      const v2615 = stdlib.le(v2611, v2312);
      const v2616 = v2614 ? v2615 : false;
      stdlib.assert(v2616, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:154:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:13:application call to [unknown function] (defined at: ./index.rsh:158:13:function exp)'],
        msg: 'No registration found for Address',
        who: 'checkIn'
        });
      const v2618 = v2612 ? false : true;
      stdlib.assert(v2618, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:155:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:158:13:application call to [unknown function] (defined at: ./index.rsh:158:13:function exp)'],
        msg: 'Address has attended this event',
        who: 'checkIn'
        });
      const v2620 = null;
      const v2621 = await txn1.getOutput('checkIn', 'v2620', ctc0, v2620);
      if (v1595) {
        stdlib.protect(ctc0, await interact.out(v2562, v2621), {
          at: './index.rsh:151:11:application',
          fs: ['at ./index.rsh:151:11:application call to [unknown function] (defined at: ./index.rsh:151:11:function exp)', 'at ./index.rsh:159:12:application call to "k" (defined at: ./index.rsh:158:13:function exp)', 'at ./index.rsh:158:13:application call to [unknown function] (defined at: ./index.rsh:158:13:function exp)'],
          msg: 'out',
          who: 'checkIn'
          });
        }
      else {
        }
      
      const v2626 = [v2611, true, v2613];
      await stdlib.mapSet(map0, v2558, v2626);
      const v5725 = v2283;
      const v5727 = true;
      const v5729 = v2289;
      const v5730 = v2283.adminFee;
      const v5731 = v2283.fee;
      const v5732 = v2283.title;
      return;
      
      break;
      }
    case 'claimStake0_157': {
      const v2812 = v2559[1];
      return;
      break;
      }
    case 'concludeEvent0_157': {
      const v3062 = v2559[1];
      return;
      break;
      }
    case 'createEvent0_157': {
      const v3312 = v2559[1];
      return;
      break;
      }
    case 'register0_157': {
      const v3562 = v2559[1];
      return;
      break;
      }
    case 'shutDown0_157': {
      const v3812 = v2559[1];
      return;
      break;
      }
    case 'verifyAttendance0_157': {
      const v4062 = v2559[1];
      return;
      break;
      }
    }
  
  
  };
export async function _claimStake3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _claimStake3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _claimStake3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc8 = stdlib.T_Struct([['adminFee', ctc1], ['fee', ctc1], ['title', ctc6], ['description', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc5]);
  const ctc13 = stdlib.T_Data({
    checkIn0_157: ctc10,
    claimStake0_157: ctc9,
    concludeEvent0_157: ctc10,
    createEvent0_157: ctc11,
    register0_157: ctc10,
    shutDown0_157: ctc10,
    verifyAttendance0_157: ctc12
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6]);
  const v2492 = ctc.selfAddress();
  const v2494 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:181:38:application call to [unknown function] (defined at: ./index.rsh:181:38:function exp)', 'at ./index.rsh:55:58:application call to "runclaimStake0_157" (defined at: ./index.rsh:181:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'in',
    who: 'claimStake'
    });
  const v2495 = v2494[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2497 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2492), null);
  const v2498 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
  const v2499 = stdlib.fromSome(v2497, v2498);
  const v2500 = v2499[stdlib.checkedBigNumberify('./index.rsh:182:13:array', stdlib.UInt_max, '0')];
  const v2501 = v2499[stdlib.checkedBigNumberify('./index.rsh:182:13:array', stdlib.UInt_max, '1')];
  const v2502 = v2499[stdlib.checkedBigNumberify('./index.rsh:182:13:array', stdlib.UInt_max, '2')];
  const v2503 = stdlib.gt(v2500, stdlib.checkedBigNumberify('./index.rsh:183:22:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2503, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:183:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:38:application call to [unknown function] (defined at: ./index.rsh:181:38:function exp)', 'at ./index.rsh:55:58:application call to "runclaimStake0_157" (defined at: ./index.rsh:181:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'No registration found for Address',
    who: 'claimStake'
    });
  const v2506 = stdlib.le(v2500, v2289);
  stdlib.assert(v2506, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:38:application call to [unknown function] (defined at: ./index.rsh:181:38:function exp)', 'at ./index.rsh:55:58:application call to "runclaimStake0_157" (defined at: ./index.rsh:181:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Insufficient balance',
    who: 'claimStake'
    });
  if (v2285) {
    stdlib.assert(v2502, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:186:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:38:application call to [unknown function] (defined at: ./index.rsh:181:38:function exp)', 'at ./index.rsh:55:58:application call to "runclaimStake0_157" (defined at: ./index.rsh:181:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
      msg: 'Your attendance was not verified',
      who: 'claimStake'
      });
    }
  else {
    const v2509 = v2501 ? v2502 : false;
    stdlib.assert(v2509, {
      at: 'reach standard library:57:5:application',
      fs: ['at ./index.rsh:188:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:38:application call to [unknown function] (defined at: ./index.rsh:181:38:function exp)', 'at ./index.rsh:55:58:application call to "runclaimStake0_157" (defined at: ./index.rsh:181:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
      msg: 'You did not attend the event',
      who: 'claimStake'
      });
    }
  const v2511 = stdlib.gt(v2495, stdlib.checkedBigNumberify('./index.rsh:190:19:decimal', stdlib.UInt_max, '0'));
  const v2512 = stdlib.le(v2495, v2500);
  const v2513 = v2511 ? v2512 : false;
  stdlib.assert(v2513, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:181:38:application call to [unknown function] (defined at: ./index.rsh:181:38:function exp)', 'at ./index.rsh:55:58:application call to "runclaimStake0_157" (defined at: ./index.rsh:181:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Invalid harvest amount',
    who: 'claimStake'
    });
  const v2522 = ['claimStake0_157', v2494];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313, v2522],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:181:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
      
      switch (v2559[0]) {
        case 'checkIn0_157': {
          const v2562 = v2559[1];
          
          break;
          }
        case 'claimStake0_157': {
          const v2812 = v2559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "claimStake"
            });
          ;
          const v2879 = v2812[stdlib.checkedBigNumberify('./index.rsh:181:10:spread', stdlib.UInt_max, '0')];
          const v2880 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2558), null);
          const v2881 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
          const v2882 = stdlib.fromSome(v2880, v2881);
          const v2883 = v2882[stdlib.checkedBigNumberify('./index.rsh:182:13:array', stdlib.UInt_max, '0')];
          const v2884 = v2882[stdlib.checkedBigNumberify('./index.rsh:182:13:array', stdlib.UInt_max, '1')];
          const v2885 = v2882[stdlib.checkedBigNumberify('./index.rsh:182:13:array', stdlib.UInt_max, '2')];
          const v2899 = stdlib.sub(v2883, v2879);
          const v2904 = stdlib.sub(v2289, v2879);
          sim_r.txns.push({
            kind: 'from',
            to: v2558,
            tok: undefined /* Nothing */
            });
          const v2908 = null;
          const v2909 = await txn1.getOutput('claimStake', 'v2908', ctc0, v2908);
          
          const v2915 = stdlib.eq(v2899, stdlib.checkedBigNumberify('./index.rsh:198:28:decimal', stdlib.UInt_max, '0'));
          if (v2915) {
            await stdlib.simMapSet(sim_r, 0, v2558, undefined /* Nothing */);
            const v5824 = v2283;
            const v5826 = v2285;
            const v5828 = v2904;
            const v5829 = v2283.adminFee;
            const v5830 = v2283.fee;
            const v5831 = v2283.title;
            sim_r.isHalt = false;
            }
          else {
            const v2917 = [v2899, v2884, v2885];
            await stdlib.simMapSet(sim_r, 0, v2558, v2917);
            const v5835 = v2283;
            const v5837 = v2285;
            const v5839 = v2904;
            const v5840 = v2283.adminFee;
            const v5841 = v2283.fee;
            const v5842 = v2283.title;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'concludeEvent0_157': {
          const v3062 = v2559[1];
          
          break;
          }
        case 'createEvent0_157': {
          const v3312 = v2559[1];
          
          break;
          }
        case 'register0_157': {
          const v3562 = v2559[1];
          
          break;
          }
        case 'shutDown0_157': {
          const v3812 = v2559[1];
          
          break;
          }
        case 'verifyAttendance0_157': {
          const v4062 = v2559[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
  switch (v2559[0]) {
    case 'checkIn0_157': {
      const v2562 = v2559[1];
      return;
      break;
      }
    case 'claimStake0_157': {
      const v2812 = v2559[1];
      undefined /* setApiDetails */;
      const v2852 = stdlib.le(v2289, stdlib.UInt_max);
      stdlib.assert(v2852, {
        at: './index.rsh:55:58:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'claimStake'
        });
      ;
      const v2879 = v2812[stdlib.checkedBigNumberify('./index.rsh:181:10:spread', stdlib.UInt_max, '0')];
      const v2880 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2558), null);
      const v2881 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
      const v2882 = stdlib.fromSome(v2880, v2881);
      const v2883 = v2882[stdlib.checkedBigNumberify('./index.rsh:182:13:array', stdlib.UInt_max, '0')];
      const v2884 = v2882[stdlib.checkedBigNumberify('./index.rsh:182:13:array', stdlib.UInt_max, '1')];
      const v2885 = v2882[stdlib.checkedBigNumberify('./index.rsh:182:13:array', stdlib.UInt_max, '2')];
      const v2886 = stdlib.gt(v2883, stdlib.checkedBigNumberify('./index.rsh:183:22:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v2886, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:183:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
        msg: 'No registration found for Address',
        who: 'claimStake'
        });
      const v2889 = stdlib.le(v2883, v2289);
      stdlib.assert(v2889, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:184:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
        msg: 'Insufficient balance',
        who: 'claimStake'
        });
      if (v2285) {
        stdlib.assert(v2885, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:186:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
          msg: 'Your attendance was not verified',
          who: 'claimStake'
          });
        }
      else {
        const v2892 = v2884 ? v2885 : false;
        stdlib.assert(v2892, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:188:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
          msg: 'You did not attend the event',
          who: 'claimStake'
          });
        }
      const v2894 = stdlib.gt(v2879, stdlib.checkedBigNumberify('./index.rsh:190:19:decimal', stdlib.UInt_max, '0'));
      const v2895 = stdlib.le(v2879, v2883);
      const v2896 = v2894 ? v2895 : false;
      stdlib.assert(v2896, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:190:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
        msg: 'Invalid harvest amount',
        who: 'claimStake'
        });
      const v2899 = stdlib.sub(v2883, v2879);
      const v2904 = stdlib.sub(v2289, v2879);
      const v2905 = stdlib.ge(v2904, stdlib.checkedBigNumberify('./index.rsh:195:27:application', stdlib.UInt_max, '0'));
      stdlib.assert(v2905, {
        at: './index.rsh:195:27:application',
        fs: ['at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
        msg: 'assume >= 0',
        who: 'claimStake'
        });
      ;
      const v2908 = null;
      const v2909 = await txn1.getOutput('claimStake', 'v2908', ctc0, v2908);
      if (v1595) {
        stdlib.protect(ctc0, await interact.out(v2812, v2909), {
          at: './index.rsh:181:11:application',
          fs: ['at ./index.rsh:181:11:application call to [unknown function] (defined at: ./index.rsh:181:11:function exp)', 'at ./index.rsh:196:12:application call to "k" (defined at: ./index.rsh:194:13:function exp)', 'at ./index.rsh:194:13:application call to [unknown function] (defined at: ./index.rsh:194:13:function exp)'],
          msg: 'out',
          who: 'claimStake'
          });
        }
      else {
        }
      
      const v2915 = stdlib.eq(v2899, stdlib.checkedBigNumberify('./index.rsh:198:28:decimal', stdlib.UInt_max, '0'));
      if (v2915) {
        await stdlib.mapSet(map0, v2558, undefined /* Nothing */);
        const v5824 = v2283;
        const v5826 = v2285;
        const v5828 = v2904;
        const v5829 = v2283.adminFee;
        const v5830 = v2283.fee;
        const v5831 = v2283.title;
        return;
        }
      else {
        const v2917 = [v2899, v2884, v2885];
        await stdlib.mapSet(map0, v2558, v2917);
        const v5835 = v2283;
        const v5837 = v2285;
        const v5839 = v2904;
        const v5840 = v2283.adminFee;
        const v5841 = v2283.fee;
        const v5842 = v2283.title;
        return;
        }
      break;
      }
    case 'concludeEvent0_157': {
      const v3062 = v2559[1];
      return;
      break;
      }
    case 'createEvent0_157': {
      const v3312 = v2559[1];
      return;
      break;
      }
    case 'register0_157': {
      const v3562 = v2559[1];
      return;
      break;
      }
    case 'shutDown0_157': {
      const v3812 = v2559[1];
      return;
      break;
      }
    case 'verifyAttendance0_157': {
      const v4062 = v2559[1];
      return;
      break;
      }
    }
  
  
  };
export async function _concludeEvent3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _concludeEvent3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _concludeEvent3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc8 = stdlib.T_Struct([['adminFee', ctc1], ['fee', ctc1], ['title', ctc6], ['description', ctc7]]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc5]);
  const ctc13 = stdlib.T_Data({
    checkIn0_157: ctc9,
    claimStake0_157: ctc10,
    concludeEvent0_157: ctc9,
    createEvent0_157: ctc11,
    register0_157: ctc9,
    shutDown0_157: ctc9,
    verifyAttendance0_157: ctc12
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6]);
  const v2401 = ctc.selfAddress();
  const v2403 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:117:38:application call to [unknown function] (defined at: ./index.rsh:117:38:function exp)', 'at ./index.rsh:55:58:application call to "runconcludeEvent0_157" (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'in',
    who: 'concludeEvent'
    });
  stdlib.assert(v2285, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:38:application call to [unknown function] (defined at: ./index.rsh:117:38:function exp)', 'at ./index.rsh:55:58:application call to "runconcludeEvent0_157" (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'No active Event',
    who: 'concludeEvent'
    });
  const v2405 = stdlib.addressEq(v2401, v2275);
  stdlib.assert(v2405, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:117:38:application call to [unknown function] (defined at: ./index.rsh:117:38:function exp)', 'at ./index.rsh:55:58:application call to "runconcludeEvent0_157" (defined at: ./index.rsh:117:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'This address cannot perform that action',
    who: 'concludeEvent'
    });
  const v2410 = ['concludeEvent0_157', v2403];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313, v2410],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:117:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
      
      switch (v2559[0]) {
        case 'checkIn0_157': {
          const v2562 = v2559[1];
          
          break;
          }
        case 'claimStake0_157': {
          const v2812 = v2559[1];
          
          break;
          }
        case 'concludeEvent0_157': {
          const v3062 = v2559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "concludeEvent"
            });
          ;
          const v3173 = null;
          const v3174 = await txn1.getOutput('concludeEvent', 'v3173', ctc0, v3173);
          
          null;
          const v5934 = v2282;
          const v5936 = false;
          const v5938 = v2289;
          const v5939 = v2282.adminFee;
          const v5940 = v2282.fee;
          const v5941 = v2282.title;
          sim_r.isHalt = false;
          
          break;
          }
        case 'createEvent0_157': {
          const v3312 = v2559[1];
          
          break;
          }
        case 'register0_157': {
          const v3562 = v2559[1];
          
          break;
          }
        case 'shutDown0_157': {
          const v3812 = v2559[1];
          
          break;
          }
        case 'verifyAttendance0_157': {
          const v4062 = v2559[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
  switch (v2559[0]) {
    case 'checkIn0_157': {
      const v2562 = v2559[1];
      return;
      break;
      }
    case 'claimStake0_157': {
      const v2812 = v2559[1];
      return;
      break;
      }
    case 'concludeEvent0_157': {
      const v3062 = v2559[1];
      undefined /* setApiDetails */;
      const v3102 = stdlib.le(v2289, stdlib.UInt_max);
      stdlib.assert(v3102, {
        at: './index.rsh:55:58:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'concludeEvent'
        });
      ;
      stdlib.assert(v2285, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:118:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
        msg: 'No active Event',
        who: 'concludeEvent'
        });
      const v3171 = stdlib.addressEq(v2558, v2275);
      stdlib.assert(v3171, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:119:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
        msg: 'This address cannot perform that action',
        who: 'concludeEvent'
        });
      const v3173 = null;
      const v3174 = await txn1.getOutput('concludeEvent', 'v3173', ctc0, v3173);
      if (v1595) {
        stdlib.protect(ctc0, await interact.out(v3062, v3174), {
          at: './index.rsh:117:11:application',
          fs: ['at ./index.rsh:117:11:application call to [unknown function] (defined at: ./index.rsh:117:11:function exp)', 'at ./index.rsh:123:12:application call to "k" (defined at: ./index.rsh:122:13:function exp)', 'at ./index.rsh:122:13:application call to [unknown function] (defined at: ./index.rsh:122:13:function exp)'],
          msg: 'out',
          who: 'concludeEvent'
          });
        }
      else {
        }
      
      null;
      const v5934 = v2282;
      const v5936 = false;
      const v5938 = v2289;
      const v5939 = v2282.adminFee;
      const v5940 = v2282.fee;
      const v5941 = v2282.title;
      return;
      
      break;
      }
    case 'createEvent0_157': {
      const v3312 = v2559[1];
      return;
      break;
      }
    case 'register0_157': {
      const v3562 = v2559[1];
      return;
      break;
      }
    case 'shutDown0_157': {
      const v3812 = v2559[1];
      return;
      break;
      }
    case 'verifyAttendance0_157': {
      const v4062 = v2559[1];
      return;
      break;
      }
    }
  
  
  };
export async function _createEvent3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _createEvent3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _createEvent3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc8 = stdlib.T_Struct([['adminFee', ctc1], ['fee', ctc1], ['title', ctc6], ['description', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc5]);
  const ctc13 = stdlib.T_Data({
    checkIn0_157: ctc10,
    claimStake0_157: ctc11,
    concludeEvent0_157: ctc10,
    createEvent0_157: ctc9,
    register0_157: ctc10,
    shutDown0_157: ctc10,
    verifyAttendance0_157: ctc12
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6]);
  const v2353 = ctc.selfAddress();
  const v2355 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:88:44:application call to [unknown function] (defined at: ./index.rsh:88:44:function exp)', 'at ./index.rsh:55:58:application call to "runcreateEvent0_157" (defined at: ./index.rsh:88:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'in',
    who: 'createEvent'
    });
  const v2356 = v2355[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2357 = v2356.adminFee;
  const v2358 = v2356.fee;
  const v2362 = v2285 ? false : true;
  stdlib.assert(v2362, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:44:application call to [unknown function] (defined at: ./index.rsh:88:44:function exp)', 'at ./index.rsh:55:58:application call to "runcreateEvent0_157" (defined at: ./index.rsh:88:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Event in progress',
    who: 'createEvent'
    });
  const v2364 = stdlib.addressEq(v2353, v2275);
  stdlib.assert(v2364, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:44:application call to [unknown function] (defined at: ./index.rsh:88:44:function exp)', 'at ./index.rsh:55:58:application call to "runcreateEvent0_157" (defined at: ./index.rsh:88:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'This address cannot perform that action',
    who: 'createEvent'
    });
  const v2371 = stdlib.gt(v2358, stdlib.checkedBigNumberify('./index.rsh:97:33:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2371, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:97:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:22:application call to "checkReasonable" (defined at: ./index.rsh:92:44:function exp)', 'at ./index.rsh:88:44:application call to [unknown function] (defined at: ./index.rsh:88:44:function exp)', 'at ./index.rsh:55:58:application call to "runcreateEvent0_157" (defined at: ./index.rsh:88:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Event fee cannot be 0',
    who: 'createEvent'
    });
  const v2373 = stdlib.lt(v2358, stdlib.UInt_max);
  stdlib.assert(v2373, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:98:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:22:application call to "checkReasonable" (defined at: ./index.rsh:92:44:function exp)', 'at ./index.rsh:88:44:application call to [unknown function] (defined at: ./index.rsh:88:44:function exp)', 'at ./index.rsh:55:58:application call to "runcreateEvent0_157" (defined at: ./index.rsh:88:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'That is an absurd fee',
    who: 'createEvent'
    });
  const v2376 = stdlib.lt(v2357, stdlib.UInt_max);
  stdlib.assert(v2376, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:98:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:102:22:application call to "checkReasonable" (defined at: ./index.rsh:92:44:function exp)', 'at ./index.rsh:88:44:application call to [unknown function] (defined at: ./index.rsh:88:44:function exp)', 'at ./index.rsh:55:58:application call to "runcreateEvent0_157" (defined at: ./index.rsh:88:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'That is an absurd Admin fee',
    who: 'createEvent'
    });
  const v2379 = stdlib.sub(stdlib.UInt_max, v2357);
  const v2380 = stdlib.lt(v2358, v2379);
  stdlib.assert(v2380, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:103:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:44:application call to [unknown function] (defined at: ./index.rsh:88:44:function exp)', 'at ./index.rsh:55:58:application call to "runcreateEvent0_157" (defined at: ./index.rsh:88:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Fee is too large',
    who: 'createEvent'
    });
  const v2384 = stdlib.add(v2358, v2357);
  const v2387 = stdlib.sub(stdlib.UInt_max, v2384);
  const v2388 = stdlib.lt(v2289, v2387);
  stdlib.assert(v2388, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:88:44:application call to [unknown function] (defined at: ./index.rsh:88:44:function exp)', 'at ./index.rsh:55:58:application call to "runcreateEvent0_157" (defined at: ./index.rsh:88:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'No one can join at this price',
    who: 'createEvent'
    });
  const v2399 = ['createEvent0_157', v2355];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313, v2399],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:88:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
      
      switch (v2559[0]) {
        case 'checkIn0_157': {
          const v2562 = v2559[1];
          
          break;
          }
        case 'claimStake0_157': {
          const v2812 = v2559[1];
          
          break;
          }
        case 'concludeEvent0_157': {
          const v3062 = v2559[1];
          
          break;
          }
        case 'createEvent0_157': {
          const v3312 = v2559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "createEvent"
            });
          ;
          const v3438 = v3312[stdlib.checkedBigNumberify('./index.rsh:88:10:spread', stdlib.UInt_max, '0')];
          const v3445 = v3438.title;
          const v3468 = null;
          const v3469 = await txn1.getOutput('createEvent', 'v3468', ctc0, v3468);
          
          null;
          const v6033 = v3438;
          const v6035 = true;
          const v6037 = v2289;
          sim_r.isHalt = false;
          
          break;
          }
        case 'register0_157': {
          const v3562 = v2559[1];
          
          break;
          }
        case 'shutDown0_157': {
          const v3812 = v2559[1];
          
          break;
          }
        case 'verifyAttendance0_157': {
          const v4062 = v2559[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
  switch (v2559[0]) {
    case 'checkIn0_157': {
      const v2562 = v2559[1];
      return;
      break;
      }
    case 'claimStake0_157': {
      const v2812 = v2559[1];
      return;
      break;
      }
    case 'concludeEvent0_157': {
      const v3062 = v2559[1];
      return;
      break;
      }
    case 'createEvent0_157': {
      const v3312 = v2559[1];
      undefined /* setApiDetails */;
      const v3352 = stdlib.le(v2289, stdlib.UInt_max);
      stdlib.assert(v3352, {
        at: './index.rsh:55:58:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'createEvent'
        });
      ;
      const v3438 = v3312[stdlib.checkedBigNumberify('./index.rsh:88:10:spread', stdlib.UInt_max, '0')];
      const v3439 = v2285 ? false : true;
      stdlib.assert(v3439, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:89:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'Event in progress',
        who: 'createEvent'
        });
      const v3441 = stdlib.addressEq(v2558, v2275);
      stdlib.assert(v3441, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:90:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'This address cannot perform that action',
        who: 'createEvent'
        });
      const v3443 = v3438.adminFee;
      const v3444 = v3438.fee;
      const v3445 = v3438.title;
      const v3448 = stdlib.gt(v3444, stdlib.checkedBigNumberify('./index.rsh:97:33:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3448, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:97:28:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:22:application call to "checkReasonable" (defined at: ./index.rsh:92:44:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'Event fee cannot be 0',
        who: 'createEvent'
        });
      const v3450 = stdlib.lt(v3444, stdlib.UInt_max);
      stdlib.assert(v3450, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:98:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:101:22:application call to "checkReasonable" (defined at: ./index.rsh:92:44:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'That is an absurd fee',
        who: 'createEvent'
        });
      const v3453 = stdlib.lt(v3443, stdlib.UInt_max);
      stdlib.assert(v3453, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:98:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:102:22:application call to "checkReasonable" (defined at: ./index.rsh:92:44:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'That is an absurd Admin fee',
        who: 'createEvent'
        });
      const v3456 = stdlib.sub(stdlib.UInt_max, v3443);
      const v3457 = stdlib.lt(v3444, v3456);
      stdlib.assert(v3457, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:103:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'Fee is too large',
        who: 'createEvent'
        });
      const v3461 = stdlib.add(v3444, v3443);
      const v3464 = stdlib.sub(stdlib.UInt_max, v3461);
      const v3465 = stdlib.lt(v2289, v3464);
      stdlib.assert(v3465, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:106:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
        msg: 'No one can join at this price',
        who: 'createEvent'
        });
      const v3468 = null;
      const v3469 = await txn1.getOutput('createEvent', 'v3468', ctc0, v3468);
      if (v1595) {
        stdlib.protect(ctc0, await interact.out(v3312, v3469), {
          at: './index.rsh:88:11:application',
          fs: ['at ./index.rsh:88:11:application call to [unknown function] (defined at: ./index.rsh:88:11:function exp)', 'at ./index.rsh:110:12:application call to "k" (defined at: ./index.rsh:109:13:function exp)', 'at ./index.rsh:109:13:application call to [unknown function] (defined at: ./index.rsh:109:13:function exp)'],
          msg: 'out',
          who: 'createEvent'
          });
        }
      else {
        }
      
      null;
      const v6033 = v3438;
      const v6035 = true;
      const v6037 = v2289;
      return;
      
      break;
      }
    case 'register0_157': {
      const v3562 = v2559[1];
      return;
      break;
      }
    case 'shutDown0_157': {
      const v3812 = v2559[1];
      return;
      break;
      }
    case 'verifyAttendance0_157': {
      const v4062 = v2559[1];
      return;
      break;
      }
    }
  
  
  };
export async function _register3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _register3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _register3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc8 = stdlib.T_Struct([['adminFee', ctc1], ['fee', ctc1], ['title', ctc6], ['description', ctc7]]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc5]);
  const ctc13 = stdlib.T_Data({
    checkIn0_157: ctc9,
    claimStake0_157: ctc10,
    concludeEvent0_157: ctc9,
    createEvent0_157: ctc11,
    register0_157: ctc9,
    shutDown0_157: ctc9,
    verifyAttendance0_157: ctc12
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6]);
  const v2412 = ctc.selfAddress();
  const v2414 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to "runregister0_157" (defined at: ./index.rsh:130:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'in',
    who: 'register'
    });
  stdlib.assert(v2285, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to "runregister0_157" (defined at: ./index.rsh:130:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'No active Event',
    who: 'register'
    });
  const v2416 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2412), null);
  const v2417 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
  const v2418 = stdlib.fromSome(v2416, v2417);
  const v2419 = v2418[stdlib.checkedBigNumberify('./index.rsh:132:13:array', stdlib.UInt_max, '0')];
  const v2422 = stdlib.lt(v2419, v2312);
  stdlib.assert(v2422, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:133:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to "runregister0_157" (defined at: ./index.rsh:130:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Address is registered for this Event',
    who: 'register'
    });
  const v2425 = stdlib.sub(v2312, v2419);
  const v2427 = stdlib.sub(stdlib.UInt_max, v2310);
  const v2428 = stdlib.lt(v2425, v2427);
  stdlib.assert(v2428, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:134:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to "runregister0_157" (defined at: ./index.rsh:130:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Event registration is at capacity',
    who: 'register'
    });
  const v2434 = stdlib.add(v2425, v2310);
  const v2435 = stdlib.gt(v2434, stdlib.checkedBigNumberify('./index.rsh:136:21:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2435, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:136:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to "runregister0_157" (defined at: ./index.rsh:130:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Invalid fee amount',
    who: 'register'
    });
  const v2439 = stdlib.sub(stdlib.UInt_max, v2289);
  const v2440 = stdlib.lt(v2434, v2439);
  stdlib.assert(v2440, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to "runregister0_157" (defined at: ./index.rsh:130:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Registration limit reached',
    who: 'register'
    });
  const v2445 = ['register0_157', v2414];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313, v2445],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [v2434, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
      
      switch (v2559[0]) {
        case 'checkIn0_157': {
          const v2562 = v2559[1];
          
          break;
          }
        case 'claimStake0_157': {
          const v2812 = v2559[1];
          
          break;
          }
        case 'concludeEvent0_157': {
          const v3062 = v2559[1];
          
          break;
          }
        case 'createEvent0_157': {
          const v3312 = v2559[1];
          
          break;
          }
        case 'register0_157': {
          const v3562 = v2559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "register"
            });
          const v3572 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v2558), null);
          const v3573 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
          const v3574 = stdlib.fromSome(v3572, v3573);
          const v3575 = v3574[stdlib.checkedBigNumberify('./index.rsh:132:13:array', stdlib.UInt_max, '0')];
          const v3581 = stdlib.sub(v2312, v3575);
          const v3590 = stdlib.add(v3581, v2310);
          const v3601 = stdlib.add(v2289, v3590);
          sim_r.txns.push({
            amt: v3590,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v3758 = null;
          const v3759 = await txn1.getOutput('register', 'v3758', ctc0, v3758);
          
          const v3767 = stdlib.sub(v3601, v2310);
          sim_r.txns.push({
            kind: 'from',
            to: v2275,
            tok: undefined /* Nothing */
            });
          const v3771 = [v2312, false, false];
          await stdlib.simMapSet(sim_r, 0, v2558, v3771);
          const v6132 = v2283;
          const v6134 = true;
          const v6136 = v3767;
          const v6137 = v2283.adminFee;
          const v6138 = v2283.fee;
          const v6139 = v2283.title;
          sim_r.isHalt = false;
          
          break;
          }
        case 'shutDown0_157': {
          const v3812 = v2559[1];
          
          break;
          }
        case 'verifyAttendance0_157': {
          const v4062 = v2559[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
  switch (v2559[0]) {
    case 'checkIn0_157': {
      const v2562 = v2559[1];
      return;
      break;
      }
    case 'claimStake0_157': {
      const v2812 = v2559[1];
      return;
      break;
      }
    case 'concludeEvent0_157': {
      const v3062 = v2559[1];
      return;
      break;
      }
    case 'createEvent0_157': {
      const v3312 = v2559[1];
      return;
      break;
      }
    case 'register0_157': {
      const v3562 = v2559[1];
      undefined /* setApiDetails */;
      stdlib.assert(v2285, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:131:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
        msg: 'No active Event',
        who: 'register'
        });
      const v3572 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2558), null);
      const v3573 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
      const v3574 = stdlib.fromSome(v3572, v3573);
      const v3575 = v3574[stdlib.checkedBigNumberify('./index.rsh:132:13:array', stdlib.UInt_max, '0')];
      const v3578 = stdlib.lt(v3575, v2312);
      stdlib.assert(v3578, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:133:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
        msg: 'Address is registered for this Event',
        who: 'register'
        });
      const v3581 = stdlib.sub(v2312, v3575);
      const v3583 = stdlib.sub(stdlib.UInt_max, v2310);
      const v3584 = stdlib.lt(v3581, v3583);
      stdlib.assert(v3584, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:134:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
        msg: 'Event registration is at capacity',
        who: 'register'
        });
      const v3590 = stdlib.add(v3581, v2310);
      const v3591 = stdlib.gt(v3590, stdlib.checkedBigNumberify('./index.rsh:136:21:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v3591, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:136:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
        msg: 'Invalid fee amount',
        who: 'register'
        });
      const v3595 = stdlib.sub(stdlib.UInt_max, v2289);
      const v3596 = stdlib.lt(v3590, v3595);
      stdlib.assert(v3596, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:130:33:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:130:33:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
        msg: 'Registration limit reached',
        who: 'register'
        });
      const v3601 = stdlib.add(v2289, v3590);
      const v3602 = stdlib.le(v3601, stdlib.UInt_max);
      stdlib.assert(v3602, {
        at: './index.rsh:55:58:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'register'
        });
      ;
      const v3755 = stdlib.sub(stdlib.UInt_max, v3601);
      const v3756 = stdlib.lt(v3590, v3755);
      stdlib.assert(v3756, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:137:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:142:13:application call to [unknown function] (defined at: ./index.rsh:142:13:function exp)'],
        msg: 'Registration limit reached',
        who: 'register'
        });
      const v3758 = null;
      const v3759 = await txn1.getOutput('register', 'v3758', ctc0, v3758);
      if (v1595) {
        stdlib.protect(ctc0, await interact.out(v3562, v3759), {
          at: './index.rsh:130:11:application',
          fs: ['at ./index.rsh:130:11:application call to [unknown function] (defined at: ./index.rsh:130:11:function exp)', 'at ./index.rsh:143:12:application call to "k" (defined at: ./index.rsh:142:13:function exp)', 'at ./index.rsh:142:13:application call to [unknown function] (defined at: ./index.rsh:142:13:function exp)'],
          msg: 'out',
          who: 'register'
          });
        }
      else {
        }
      
      const v3767 = stdlib.sub(v3601, v2310);
      const v3768 = stdlib.ge(v3767, stdlib.checkedBigNumberify('./index.rsh:144:32:application', stdlib.UInt_max, '0'));
      stdlib.assert(v3768, {
        at: './index.rsh:144:32:application',
        fs: ['at ./index.rsh:142:13:application call to [unknown function] (defined at: ./index.rsh:142:13:function exp)'],
        msg: 'assume >= 0',
        who: 'register'
        });
      ;
      const v3771 = [v2312, false, false];
      await stdlib.mapSet(map0, v2558, v3771);
      const v6132 = v2283;
      const v6134 = true;
      const v6136 = v3767;
      const v6137 = v2283.adminFee;
      const v6138 = v2283.fee;
      const v6139 = v2283.title;
      return;
      
      break;
      }
    case 'shutDown0_157': {
      const v3812 = v2559[1];
      return;
      break;
      }
    case 'verifyAttendance0_157': {
      const v4062 = v2559[1];
      return;
      break;
      }
    }
  
  
  };
export async function _shutDown3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _shutDown3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _shutDown3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc8 = stdlib.T_Struct([['adminFee', ctc1], ['fee', ctc1], ['title', ctc6], ['description', ctc7]]);
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Tuple([ctc8]);
  const ctc12 = stdlib.T_Tuple([ctc5]);
  const ctc13 = stdlib.T_Data({
    checkIn0_157: ctc9,
    claimStake0_157: ctc10,
    concludeEvent0_157: ctc9,
    createEvent0_157: ctc11,
    register0_157: ctc9,
    shutDown0_157: ctc9,
    verifyAttendance0_157: ctc12
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6]);
  const v2338 = ctc.selfAddress();
  const v2340 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:76:33:application call to [unknown function] (defined at: ./index.rsh:76:33:function exp)', 'at ./index.rsh:55:58:application call to "runshutDown0_157" (defined at: ./index.rsh:76:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'in',
    who: 'shutDown'
    });
  const v2341 = stdlib.addressEq(v2338, v2275);
  stdlib.assert(v2341, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:77:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:76:33:application call to [unknown function] (defined at: ./index.rsh:76:33:function exp)', 'at ./index.rsh:55:58:application call to "runshutDown0_157" (defined at: ./index.rsh:76:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'This address cannot perform that action',
    who: 'shutDown'
    });
  const v2343 = v2285 ? false : true;
  stdlib.assert(v2343, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:76:33:application call to [unknown function] (defined at: ./index.rsh:76:33:function exp)', 'at ./index.rsh:55:58:application call to "runshutDown0_157" (defined at: ./index.rsh:76:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Event in progress',
    who: 'shutDown'
    });
  const v2346 = stdlib.eq(v2289, stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2346, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:79:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:76:33:application call to [unknown function] (defined at: ./index.rsh:76:33:function exp)', 'at ./index.rsh:55:58:application call to "runshutDown0_157" (defined at: ./index.rsh:76:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Withdrawals still in progress',
    who: 'shutDown'
    });
  const v2351 = ['shutDown0_157', v2340];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313, v2351],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
      
      switch (v2559[0]) {
        case 'checkIn0_157': {
          const v2562 = v2559[1];
          
          break;
          }
        case 'claimStake0_157': {
          const v2812 = v2559[1];
          
          break;
          }
        case 'concludeEvent0_157': {
          const v3062 = v2559[1];
          
          break;
          }
        case 'createEvent0_157': {
          const v3312 = v2559[1];
          
          break;
          }
        case 'register0_157': {
          const v3562 = v2559[1];
          
          break;
          }
        case 'shutDown0_157': {
          const v3812 = v2559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "shutDown"
            });
          ;
          const v4031 = null;
          const v4032 = await txn1.getOutput('shutDown', 'v4031', ctc0, v4031);
          
          sim_r.txns.push({
            kind: 'from',
            to: v2275,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'verifyAttendance0_157': {
          const v4062 = v2559[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
  switch (v2559[0]) {
    case 'checkIn0_157': {
      const v2562 = v2559[1];
      return;
      break;
      }
    case 'claimStake0_157': {
      const v2812 = v2559[1];
      return;
      break;
      }
    case 'concludeEvent0_157': {
      const v3062 = v2559[1];
      return;
      break;
      }
    case 'createEvent0_157': {
      const v3312 = v2559[1];
      return;
      break;
      }
    case 'register0_157': {
      const v3562 = v2559[1];
      return;
      break;
      }
    case 'shutDown0_157': {
      const v3812 = v2559[1];
      undefined /* setApiDetails */;
      const v3852 = stdlib.le(v2289, stdlib.UInt_max);
      stdlib.assert(v3852, {
        at: './index.rsh:55:58:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'shutDown'
        });
      ;
      const v4024 = stdlib.addressEq(v2558, v2275);
      stdlib.assert(v4024, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:77:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:13:application call to [unknown function] (defined at: ./index.rsh:81:13:function exp)'],
        msg: 'This address cannot perform that action',
        who: 'shutDown'
        });
      const v4026 = v2285 ? false : true;
      stdlib.assert(v4026, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:78:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:13:application call to [unknown function] (defined at: ./index.rsh:81:13:function exp)'],
        msg: 'Event in progress',
        who: 'shutDown'
        });
      const v4029 = stdlib.eq(v2289, stdlib.checkedBigNumberify('./index.rsh:79:26:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4029, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:79:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:81:13:application call to [unknown function] (defined at: ./index.rsh:81:13:function exp)'],
        msg: 'Withdrawals still in progress',
        who: 'shutDown'
        });
      const v4031 = null;
      const v4032 = await txn1.getOutput('shutDown', 'v4031', ctc0, v4031);
      if (v1595) {
        stdlib.protect(ctc0, await interact.out(v3812, v4032), {
          at: './index.rsh:76:11:application',
          fs: ['at ./index.rsh:76:11:application call to [unknown function] (defined at: ./index.rsh:76:11:function exp)', 'at ./index.rsh:82:12:application call to "k" (defined at: ./index.rsh:81:13:function exp)', 'at ./index.rsh:81:13:application call to [unknown function] (defined at: ./index.rsh:81:13:function exp)'],
          msg: 'out',
          who: 'shutDown'
          });
        }
      else {
        }
      
      const v6240 = stdlib.sub(v2289, v2289);
      const v6241 = stdlib.ge(v6240, stdlib.checkedBigNumberify('./index.rsh:209:25:application', stdlib.UInt_max, '0'));
      stdlib.assert(v6241, {
        at: './index.rsh:209:25:application',
        fs: [],
        msg: 'assume >= 0',
        who: 'shutDown'
        });
      ;
      return;
      
      break;
      }
    case 'verifyAttendance0_157': {
      const v4062 = v2559[1];
      return;
      break;
      }
    }
  
  
  };
export async function _verifyAttendance3(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _verifyAttendance3 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _verifyAttendance3 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Tuple([ctc1, ctc2, ctc2]);
  const ctc4 = stdlib.T_Data({
    None: ctc0,
    Some: ctc3
    });
  const ctc5 = stdlib.T_Address;
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '128'));
  const ctc7 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '256'));
  const ctc8 = stdlib.T_Struct([['adminFee', ctc1], ['fee', ctc1], ['title', ctc6], ['description', ctc7]]);
  const ctc9 = stdlib.T_Tuple([ctc5]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Tuple([ctc8]);
  const ctc13 = stdlib.T_Data({
    checkIn0_157: ctc10,
    claimStake0_157: ctc11,
    concludeEvent0_157: ctc10,
    createEvent0_157: ctc12,
    register0_157: ctc10,
    shutDown0_157: ctc10,
    verifyAttendance0_157: ctc9
    });
  
  const map0_ctc = ctc4;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  
  const [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'), [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6]);
  const v2468 = ctc.selfAddress();
  const v2470 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:166:44:application call to [unknown function] (defined at: ./index.rsh:166:44:function exp)', 'at ./index.rsh:55:58:application call to "runverifyAttendance0_157" (defined at: ./index.rsh:166:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'in',
    who: 'verifyAttendance'
    });
  const v2471 = v2470[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v2473 = stdlib.addressEq(v2468, v2275);
  stdlib.assert(v2473, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:167:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:166:44:application call to [unknown function] (defined at: ./index.rsh:166:44:function exp)', 'at ./index.rsh:55:58:application call to "runverifyAttendance0_157" (defined at: ./index.rsh:166:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'This address cannot perform that action',
    who: 'verifyAttendance'
    });
  const v2475 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v2471), null);
  const v2476 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
  const v2477 = stdlib.fromSome(v2475, v2476);
  const v2478 = v2477[stdlib.checkedBigNumberify('./index.rsh:168:13:array', stdlib.UInt_max, '0')];
  const v2480 = v2477[stdlib.checkedBigNumberify('./index.rsh:168:13:array', stdlib.UInt_max, '2')];
  const v2481 = stdlib.gt(v2478, stdlib.checkedBigNumberify('./index.rsh:169:22:decimal', stdlib.UInt_max, '0'));
  stdlib.assert(v2481, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:166:44:application call to [unknown function] (defined at: ./index.rsh:166:44:function exp)', 'at ./index.rsh:55:58:application call to "runverifyAttendance0_157" (defined at: ./index.rsh:166:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'No registration found for Address',
    who: 'verifyAttendance'
    });
  const v2483 = v2480 ? false : true;
  stdlib.assert(v2483, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:166:44:application call to [unknown function] (defined at: ./index.rsh:166:44:function exp)', 'at ./index.rsh:55:58:application call to "runverifyAttendance0_157" (defined at: ./index.rsh:166:10:function exp)', 'at ./index.rsh:55:58:application call to [unknown function] (defined at: ./index.rsh:55:58:function exp)'],
    msg: 'Attendance confirmed for participant',
    who: 'verifyAttendance'
    });
  const v2490 = ['verifyAttendance0_157', v2470];
  
  const txn1 = await (ctc.sendrecv({
    args: [v2275, v2282, v2283, v2285, v2289, v2310, v2312, v2313, v2490],
    evt_cnt: 1,
    funcNum: 2,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc13],
    pay: [stdlib.checkedBigNumberify('./index.rsh:166:10:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      
      const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
      
      switch (v2559[0]) {
        case 'checkIn0_157': {
          const v2562 = v2559[1];
          
          break;
          }
        case 'claimStake0_157': {
          const v2812 = v2559[1];
          
          break;
          }
        case 'concludeEvent0_157': {
          const v3062 = v2559[1];
          
          break;
          }
        case 'createEvent0_157': {
          const v3312 = v2559[1];
          
          break;
          }
        case 'register0_157': {
          const v3562 = v2559[1];
          
          break;
          }
        case 'shutDown0_157': {
          const v3812 = v2559[1];
          
          break;
          }
        case 'verifyAttendance0_157': {
          const v4062 = v2559[1];
          sim_r.txns.push({
            kind: 'api',
            who: "verifyAttendance"
            });
          ;
          const v4289 = v4062[stdlib.checkedBigNumberify('./index.rsh:166:10:spread', stdlib.UInt_max, '0')];
          const v4292 = stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v4289), null);
          const v4293 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
          const v4294 = stdlib.fromSome(v4292, v4293);
          const v4295 = v4294[stdlib.checkedBigNumberify('./index.rsh:168:13:array', stdlib.UInt_max, '0')];
          const v4303 = null;
          const v4304 = await txn1.getOutput('verifyAttendance', 'v4303', ctc0, v4303);
          
          const v4310 = [v4295, true, true];
          await stdlib.simMapSet(sim_r, 0, v4289, v4310);
          const v6330 = v2283;
          const v6332 = v2285;
          const v6334 = v2289;
          const v6335 = v2283.adminFee;
          const v6336 = v2283.fee;
          const v6337 = v2283.title;
          sim_r.isHalt = false;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc8, ctc8, ctc2, ctc1, ctc1, ctc1, ctc6, ctc13],
    waitIfNotPresent: false
    }));
  const {data: [v2559], secs: v2561, time: v2560, didSend: v1595, from: v2558 } = txn1;
  switch (v2559[0]) {
    case 'checkIn0_157': {
      const v2562 = v2559[1];
      return;
      break;
      }
    case 'claimStake0_157': {
      const v2812 = v2559[1];
      return;
      break;
      }
    case 'concludeEvent0_157': {
      const v3062 = v2559[1];
      return;
      break;
      }
    case 'createEvent0_157': {
      const v3312 = v2559[1];
      return;
      break;
      }
    case 'register0_157': {
      const v3562 = v2559[1];
      return;
      break;
      }
    case 'shutDown0_157': {
      const v3812 = v2559[1];
      return;
      break;
      }
    case 'verifyAttendance0_157': {
      const v4062 = v2559[1];
      undefined /* setApiDetails */;
      const v4102 = stdlib.le(v2289, stdlib.UInt_max);
      stdlib.assert(v4102, {
        at: './index.rsh:55:58:dot',
        fs: [],
        msg: 'assume <= UInt.max',
        who: 'verifyAttendance'
        });
      ;
      const v4289 = v4062[stdlib.checkedBigNumberify('./index.rsh:166:10:spread', stdlib.UInt_max, '0')];
      const v4290 = stdlib.addressEq(v2558, v2275);
      stdlib.assert(v4290, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:167:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
        msg: 'This address cannot perform that action',
        who: 'verifyAttendance'
        });
      const v4292 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v4289), null);
      const v4293 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false, false];
      const v4294 = stdlib.fromSome(v4292, v4293);
      const v4295 = v4294[stdlib.checkedBigNumberify('./index.rsh:168:13:array', stdlib.UInt_max, '0')];
      const v4297 = v4294[stdlib.checkedBigNumberify('./index.rsh:168:13:array', stdlib.UInt_max, '2')];
      const v4298 = stdlib.gt(v4295, stdlib.checkedBigNumberify('./index.rsh:169:22:decimal', stdlib.UInt_max, '0'));
      stdlib.assert(v4298, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:169:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
        msg: 'No registration found for Address',
        who: 'verifyAttendance'
        });
      const v4300 = v4297 ? false : true;
      stdlib.assert(v4300, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:170:12:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
        msg: 'Attendance confirmed for participant',
        who: 'verifyAttendance'
        });
      const v4303 = null;
      const v4304 = await txn1.getOutput('verifyAttendance', 'v4303', ctc0, v4303);
      if (v1595) {
        stdlib.protect(ctc0, await interact.out(v4062, v4304), {
          at: './index.rsh:166:11:application',
          fs: ['at ./index.rsh:166:11:application call to [unknown function] (defined at: ./index.rsh:166:11:function exp)', 'at ./index.rsh:174:12:application call to "k" (defined at: ./index.rsh:173:13:function exp)', 'at ./index.rsh:173:13:application call to [unknown function] (defined at: ./index.rsh:173:13:function exp)'],
          msg: 'out',
          who: 'verifyAttendance'
          });
        }
      else {
        }
      
      const v4310 = [v4295, true, true];
      await stdlib.mapSet(map0, v4289, v4310);
      const v6330 = v2283;
      const v6332 = v2285;
      const v6334 = v2289;
      const v6335 = v2283.adminFee;
      const v6336 = v2283.fee;
      const v6337 = v2283.title;
      return;
      
      break;
      }
    }
  
  
  };
export async function checkIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for checkIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for checkIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _checkIn3(ctcTop, interact);}
  };
export async function claimStake(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for claimStake expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for claimStake expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _claimStake3(ctcTop, interact);}
  };
export async function concludeEvent(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for concludeEvent expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for concludeEvent expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _concludeEvent3(ctcTop, interact);}
  };
export async function createEvent(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for createEvent expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for createEvent expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _createEvent3(ctcTop, interact);}
  };
export async function register(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for register expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for register expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _register3(ctcTop, interact);}
  };
export async function shutDown(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for shutDown expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for shutDown expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _shutDown3(ctcTop, interact);}
  };
export async function verifyAttendance(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for verifyAttendance expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for verifyAttendance expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  stdlib.assert(step == 3, 'API called in the wrong state. Currently in state: ' + step + ', expected:  [3]');
  if (step == 3) {return _verifyAttendance3(ctcTop, interact);}
  };
const _ALGO = {
  ABI: {
    impure: [`checkIn()byte[0]`, `claimStake(uint64)byte[0]`, `concludeEvent()byte[0]`, `createEvent((uint64,uint64,byte[128],byte[256]))byte[0]`, `register()byte[0]`, `shutDown()byte[0]`, `verifyAttendance(address)byte[0]`],
    pure: [`info()(uint64,uint64,byte[128],byte[256])`, `isAttending(address)byte`, `stakeBalance(address)uint64`],
    sigs: [`checkIn()byte[0]`, `claimStake(uint64)byte[0]`, `concludeEvent()byte[0]`, `createEvent((uint64,uint64,byte[128],byte[256]))byte[0]`, `info()(uint64,uint64,byte[128],byte[256])`, `isAttending(address)byte`, `register()byte[0]`, `shutDown()byte[0]`, `stakeBalance(address)uint64`, `verifyAttendance(address)byte[0]`]
    },
  appApproval: `BiAXAAH///////////8BkAMDCn8ICwL8jIOcCNzK950OvJKYwA+YnfXcD4ui5tkJ0Qa9mITeA4/Y0ZsG3qypwgewA4qQl84CBQYmCQEAAAEBAQQBBQEGAQMBAgEHIjUAMRhBBr0pZEkiWzUBIQdbNQIxGSMSQQAKMQAoIQivZkIGiTYaABdJQQGIIjUEIzUGSSEKDEAAzEkhCwxAAEdJIQwMQAAqSSENDEAAESENEkQpNf8rNP9QJa9QQgFtIQwSRCk1/ycENP9QJa9QQgFbIQsSRDYaATX/JwU0/1CB8AKvUEIBRUkhDgxAABEhDhJENhoBNf8nBjT/UEIBLSEKEkQ0ASEEEkQoZCpkUCcHZFAnBmRQK2RQJwRkUCcFZFAnCGRQNQM2GgGIBhVJNf8iVUAABiI1/kIABiM1/kIAADT+IQWvNP9JNf1XAQo0/SJVTSJbNAMhD1sPEBZRBwg1B0IFt0khEAxAAHhJIREMQABfSSESDEAAJiESEkQ0ASEEEkQhBa82GgGIBbVJNf9XAQo0/yJVTVcACDUHQgV8IRESRDQBIQQSRChkKmRQJwdkUCcGZFArZFAnBGRQJwVkUCcIZFBJNQMhEyVYNQdCBUohEBJEKTX/Jwc0/1Alr1BCAEhJIRQMQAAVIRQSRDYaATX/KjT/UIGIA69QQgAsgbi252ASRCk1/yg0/1Alr1BCABg2GgIXNQQ2GgM2GgEXSSEJDEADwyEJEkQhBDQBEkQ0BEkiEkw0AhIRRChkKmRQJwdkUCcGZFArZFAnBGRQJwVkUCcIZFBJNQNJSkpJVwAgNf+BICVYNf4hEyVYNf2BwAYjWBc1/IHBBls1+4HJBls1+iEPWzX5STUFNfiABORlRIc0+FCwNPgiVUkhBAxAAcNJIRUMQACkSSEWDEAAayEWEkQ0+FcBIDX3NPskDkQ09zX2MQA0/xJEIQWvNPaIBG5JNfRXAQo09CJVTUk19SJbSTX0Ig1ENPVXCQEXFESACAAAAAAAABDPsCk1BzT2KCo09BYqUCpQUGY0/zT+NP0jNPwyBjT7QgMASDT7JA5EMQA0/xJENPwURDT7IhJEgAgAAAAAAAAPv7ApNQc0/zT+NP0iIjIGNPtCAs5JgQQMQACeSDT8RCEFrzEAiAPgSTX2VwEKNPYiVU0iW0k19zT5DEQ0+TT3CUk19iQ0+gkMRDT2NPoISTX1Ig1ENPUkNPsJDEQ0+zT1CEk19CQORDT1iAOqNPUkNPQJDESACAAAAAAAAA6usCk1BzT0NPoJSTXzIg9EsSKyATT6sggjshA0/7IHszEAKCo0+RYoUChQUGY0/zT+NP0jIzIGNPNCAilINPgjJVg19zT7JA5ENPc19jT8FEQxADT/EkQ09iJbNfU09iEHW0k19CINRDT0JAxENPUkDEQ09CQ09QkMRDT7JDT0NPUICQxEgAgAAAAAAAANjLApNQeABI5LxW009lcQgFCwNP80/jT2IyMyBjT7QgG2SSMMQAEbSSEJDEAAPEg0+yQORDT8RDEANP8SRIAIAAAAAAAADGWwKTUHgASRxpJFNAOB2QaBgAFYULA0/zT+SSMiMgY0+0IBbUg0+FcBCDX3NPskDkQ09xc19iEFrzEAiAJ4STX0VwEKNPQiVU1JNfUiWzX0NPVXCAEXNfM09VcJARc18jT0Ig1ENPQ0+w5ENPxBAAY08kRCAAY08zTyEEQ09iINNPY09A4QRDT0NPYJNfE0+zT2CUk18CIPRLEisgE09rIII7IQMQCyB7OACAAAAAAAAAtcsCk1BzTxIhJBABcxACghCK9mNP80/jT9IzT8MgY08EIAvDEAKCo08RY08xZRBwhQNPIWUQcIUFBmNP80/jT9IzT8MgY08EIAlUg0+yQORDT8RCEFrzEAiAGpSTX2VwEKNPYiVU1JNfciW0k19iINNPY0+Q4QRDT3VwgBFxREgAgAAAAAAAAKPLApNQcxACgqNPYWKlA091cJAVBQZjT/NP40/SMjMgY0+0IAMiISRIGgjQaIAVwiNAESRDQESSISTDQCEhFEgARfDav6sCWvNf8xADT/SSMiMgYiQgAANf81/jX9Nfw1+zX6Nfk0/EEAijT7Ils1+DT7IQdbNfc0+1cQgDX2NPk0+lA0+1A0/RZRBwhQNP8WUDT4FlA09xZQNPZQKEsBVwB/ZypLAVd/f2cnB0sBV/5/ZycGSwGB/QIhBlhnK0sBgfwDIQZYZycESwGB+wQhBlhnJwVLAYH6BSEGWGcnCEsBgfkGgWBYZ0ghBDUBMgY1AkIANjT/SQkiD0SxIrIBNP+yCCOyEDT5sgezQgAAMRkhFRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEJMTUSRCIxNhJEIzE3EkQiNQEiNQJC/65JMRhhQAAFSCEIr4koYok0AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 11,
  stateKeys: 8,
  stateSize: 985,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "Concluded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes32",
            "name": "elem0",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem1",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem2",
            "type": "bytes32"
          },
          {
            "internalType": "bytes32",
            "name": "elem3",
            "type": "bytes32"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "Created",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_checkIn0_157",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_claimStake0_157",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_concludeEvent0_157",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "adminFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "fee",
                            "type": "uint256"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              }
                            ],
                            "internalType": "struct T2",
                            "name": "title",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem5",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem6",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem7",
                                "type": "bytes32"
                              }
                            ],
                            "internalType": "struct T3",
                            "name": "description",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_createEvent0_157",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_register0_157",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_shutDown0_157",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_verifyAttendance0_157",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v2559",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2620",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v2908",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3173",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3468",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v3758",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4031",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v4303",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "elem0",
                "type": "uint256"
              },
              {
                "internalType": "bool",
                "name": "elem1",
                "type": "bool"
              },
              {
                "internalType": "bool",
                "name": "elem2",
                "type": "bool"
              }
            ],
            "internalType": "struct T0",
            "name": "_Some",
            "type": "tuple"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T15",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_checkIn0_157",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "_claimStake0_157",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_concludeEvent0_157",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "components": [
                          {
                            "internalType": "uint256",
                            "name": "adminFee",
                            "type": "uint256"
                          },
                          {
                            "internalType": "uint256",
                            "name": "fee",
                            "type": "uint256"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              }
                            ],
                            "internalType": "struct T2",
                            "name": "title",
                            "type": "tuple"
                          },
                          {
                            "components": [
                              {
                                "internalType": "bytes32",
                                "name": "elem0",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem1",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem2",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem3",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem4",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem5",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem6",
                                "type": "bytes32"
                              },
                              {
                                "internalType": "bytes32",
                                "name": "elem7",
                                "type": "bytes32"
                              }
                            ],
                            "internalType": "struct T3",
                            "name": "description",
                            "type": "tuple"
                          }
                        ],
                        "internalType": "struct T4",
                        "name": "elem0",
                        "type": "tuple"
                      }
                    ],
                    "internalType": "struct T13",
                    "name": "_createEvent0_157",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_register0_157",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_shutDown0_157",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "address payable",
                        "name": "elem0",
                        "type": "address"
                      }
                    ],
                    "internalType": "struct T14",
                    "name": "_verifyAttendance0_157",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T15",
                "name": "v2559",
                "type": "tuple"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "checkIn",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "claimStake",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "concludeEvent",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "adminFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T2",
            "name": "title",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem5",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem6",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem7",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T3",
            "name": "description",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "createEvent",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "info",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "adminFee",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "fee",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T2",
            "name": "title",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "elem0",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem1",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem2",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem3",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem5",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem6",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem7",
                "type": "bytes32"
              }
            ],
            "internalType": "struct T3",
            "name": "description",
            "type": "tuple"
          }
        ],
        "internalType": "struct T4",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v6342",
        "type": "address"
      }
    ],
    "name": "isAttending",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "register",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "shutDown",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "v6344",
        "type": "address"
      }
    ],
    "name": "stakeBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address payable",
        "name": "_a0",
        "type": "address"
      }
    ],
    "name": "verifyAttendance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200315a3803806200315a833981016040819052620000269162000787565b600080554360035562000038620002c8565b60408051338152835160208083019190915284015115158183015290517faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb9181900360600190a16200008d3415600a62000175565b805160009081905281516020908101829052825160409081018390528351606090810184905282850180518590528051840185905280518301859052805182018590528051608001859052805160a001859052805160c001859052805160e0018590528286018051869052805190940194909452845183519092019190915291519051909101526200011e620003c4565b805133905260408083018051835160209081019190915290518184018051919091528051600192019190915280516000920182905280514360609091015251608001526200016c816200019f565b5050506200096e565b816200019b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b806020015160200151156200025b57620001b8620003e8565b8151516001600160a01b031681528151602090810151818301528083018051516040808501919091528151810151151560608501528151608090810151908501528151515160a085015281515183015160c085015290515181015160e084015260036000554360015551620002309183910162000892565b604051602081830303815290604052600290805190602001906200025692919062000556565b505050565b620002696001600b62000175565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015620002ac573d6000803e3d6000fd5b5060008080556001819055620002c590600290620005e5565b50565b6040805160e081019091526000606082018181526080830182905260a0830182905260c083019190915281908152604080516101008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e08201529101908152602001620003bf604080516080808201835260008083526020808401829052845192830185528183528201819052818401819052606082015290918201908152604080516101008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e082015291015290565b905290565b6040518060400160405280620003d962000624565b8152602001620003bf620006c1565b60405180610100016040528060006001600160a01b0316815260200162000486604080516080808201835260008083526020808401829052845192830185528183528201819052818401819052606082015290918201908152604080516101008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e082015291015290565b81526020016200050d604080516080808201835260008083526020808401829052845192830185528183528201819052818401819052606082015290918201908152604080516101008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e082015291015290565b8152600060208083018290526040808401839052606080850184905260808086018590528251908101835284815292830184905290820183905281019190915260a09091015290565b828054620005649062000931565b90600052602060002090601f016020900481019282620005885760008555620005d3565b82601f10620005a357805160ff1916838001178555620005d3565b82800160010185558215620005d3579182015b82811115620005d3578251825591602001919060010190620005b6565b50620005e192915062000770565b5090565b508054620005f39062000931565b6000825580601f1062000604575050565b601f016020900490600052602060002090810190620002c5919062000770565b604051806040016040528060006001600160a01b03168152602001620003bf604080516080808201835260008083526020808401829052845192830185528183528201819052818401819052606082015290918201908152604080516101008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e082015291015290565b6040518060a001604052806200074e604080516080808201835260008083526020808401829052845192830185528183528201819052818401819052606082015290918201908152604080516101008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e082015291015290565b8152600060208201819052604082018190526060820181905260809091015290565b5b80821115620005e1576000815560010162000771565b6000604082840312156200079a57600080fd5b604080519081016001600160401b0381118282101715620007cb57634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620007e657600080fd5b60208201529392505050565b80518252602081015160208301526040810151620008346040840182805182526020810151602083015260408101516040830152606081015160608301525050565b506060810151805160c0840152602081015160e084015260408101516101008401526060810151610120840152608081015161014084015260a081015161016084015260c081015161018084015260e08101516101a0840152505050565b81516001600160a01b031681526020808301516104a0830191620008b990840182620007f2565b506040830151620008cf6101e0840182620007f2565b5060608381015115156103a084015260808401516103c084015260a08401516103e084015260c084015161040084015260e090930151805161042084015260208101516104408401526040810151610460840152909201516104809091015290565b600181811c908216806200094657607f821691505b602082108114156200096857634e487b7160e01b600052602260045260246000fd5b50919050565b6127dc806200097e6000396000f3fe6080604052600436106100e05760003560e01c80634e7c57a611610084578063a064bd5c11610056578063a064bd5c146101e7578063a5a083d914610207578063ab53f2c61461021a578063ef0f54bc1461023d57005b80634e7c57a614610197578063729be5c5146101b757806383230757146101ca578063890bb023146101df57005b80631e93b0f1116100bd5780631e93b0f114610116578063370158ea146101355780633bc5b7bf1461015757806344c7d6ef1461018457005b806310b9e583146100e9578063183ff085146101065780631aa3a0081461010e57005b366100e757005b005b6100f1610250565b60405190151581526020015b60405180910390f35b6100f1610280565b6100f16102ad565b34801561012257600080fd5b506003545b6040519081526020016100fd565b34801561014157600080fd5b5061014a6102dd565b6040516100fd9190611faf565b34801561016357600080fd5b50610177610172366004611fd3565b6103a9565b6040516100fd919061200d565b6100f1610192366004612058565b6103c0565b3480156101a357600080fd5b506101276101b2366004611fd3565b6103fb565b6100e76101c5366004612071565b610538565b3480156101d657600080fd5b50600154610127565b6100f161055c565b3480156101f357600080fd5b506100f1610202366004611fd3565b610582565b6100f1610215366004611fd3565b610703565b34801561022657600080fd5b5061022f610747565b6040516100fd92919061208a565b6100f161024b3660046122a6565b6107e4565b600061025a6119bf565b6020810151516005905261026c6119de565b610276828261081f565b60a0015192915050565b600061028a6119bf565b6020810151516000905261029c6119de565b6102a6828261081f565b5192915050565b60006102b76119bf565b602081015151600490526102c96119de565b6102d3828261081f565b6080015192915050565b6102e5611a1a565b6003600054141561039a576000600280546102ff906122c3565b80601f016020809104026020016040519081016040528092919081815260200182805461032b906122c3565b80156103785780601f1061034d57610100808354040283529160200191610378565b820191906000526020600020905b81548152906001019060200180831161035b57829003601f168201915b5050505050806020019051810190610390919061241b565b6040015192915050565b6103a660006007611795565b90565b6103b1611a98565b6103ba826117ba565b92915050565b60006103ca6119bf565b60208101805151600190525151604001518390526103e66119de565b6103f0828261081f565b602001519392505050565b60006003600054141561052757600060028054610417906122c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610443906122c3565b80156104905780601f1061046557610100808354040283529160200191610490565b820191906000526020600020905b81548152906001019060200180831161047357829003601f168201915b50505050508060200190518101906104a8919061241b565b90506104d160408051608081018252600060208201818152928201819052606082015290815290565b8051600090819052815160200181905281516040015260016104f2856117ba565b51600181111561050457610504611ff7565b1461051057805161051e565b610519846117ba565b604001515b51949350505050565b61053360006009611795565b919050565b6105406119de565b61055861055236849003840184612547565b8261081f565b5050565b60006105666119bf565b602081015151600290526105786119de565b610390828261081f565b6000600360005414156106f75760006002805461059e906122c3565b80601f01602080910402602001604051908101604052809291908181526020018280546105ca906122c3565b80156106175780601f106105ec57610100808354040283529160200191610617565b820191906000526020600020905b8154815290600101906020018083116105fa57829003601f168201915b505050505080602001905181019061062f919061241b565b9050610639611acb565b610642846117ba565b815260208082018051600090819052815190920182905251604001819052815151600181111561067457610674611ff7565b141561068657600060408201526106aa565b6001815151600181111561069c5761069c611ff7565b14156106aa57600160408201525b80604001516106ba5760006106ef565b60c0820151600182515160018111156106d5576106d5611ff7565b146106e45781602001516106eb565b8151604001515b5110155b949350505050565b61053360006008611795565b600061070d6119bf565b6020810180515160069052515160e001516001600160a01b03841690526107326119de565b61073c828261081f565b60c001519392505050565b60006060600054600280805461075c906122c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610788906122c3565b80156107d55780601f106107aa576101008083540402835291602001916107d5565b820191906000526020600020905b8154815290600101906020018083116107b857829003601f168201915b50505050509050915091509091565b60006107ee6119bf565b602081018051516003905251516080015183905261080a6119de565b610814828261081f565b606001519392505050565b61082f6003600054146039611795565b815161084a90158061084357508251600154145b603a611795565b60008080556002805461085c906122c3565b80601f0160208091040260200160405190810160405280929190818152602001828054610888906122c3565b80156108d55780601f106108aa576101008083540402835291602001916108d5565b820191906000526020600020905b8154815290600101906020018083116108b857829003601f168201915b50505050508060200190518101906108ed919061241b565b90506108f7611b0b565b7fd77ff342c5c64c5273a5faa77ae868ef76fb1ef80cc0ef7e1fce05db68bf005f3385604051610928929190612633565b60405180910390a1600060208501515151600681111561094a5761094a611ff7565b1415610b285761095c6001600c611795565b6109683415600d611795565b6109778260600151600e611795565b805160009081905281516020018190528151604001526001610998336117ba565b5160018111156109aa576109aa611ff7565b146109b65780516109c4565b6109bf336117ba565b604001515b60208201819052516109f0906109db5760006109e9565b60c083015160208301515111155b600f611795565b610a11816020015160200151610a07576001610a0a565b60005b6010611795565b604051600081527f903042ae145b3aea6de437db252806566b1f60067758954911036f970cb071cf9060200160405180910390a16000808452602082810180515160408086018051929092528151600190850181905292518101518251901515908201523385526004845293849020805460ff19168317815590518051928201929092559181015160029092018054919093015115156101000261ff00199215159290921661ffff1990911617179055610ac9611cc3565b825181516001600160a01b039091169052602080840151825182015260408085015182840180519190915280516001930183905280519091019190915280514360609091015260808085015191510152610b22816118a2565b5061178f565b6001602085015151516006811115610b4257610b42611ff7565b1415610e3457602084015151604001516060820152610b6360016011611795565b610b6f34156012611795565b60808101805160009081905281516020018190529051604001526001610b94336117ba565b516001811115610ba657610ba6611ff7565b14610bb5578060800151610bc3565b610bbe336117ba565b604001515b60a0820181905251610bd89015156013611795565b610bf282608001518260a001516000015111156014611795565b816060015115610c1457610c0f8160a00151604001516015611795565b610c3c565b610c3c8160a0015160200151610c2b576000610c35565b8160a00151604001515b6016611795565b606081015151610c6790610c51576000610c60565b60a08201515160608301515111155b6017611795565b60a0810151516060820151805190910360c083015260808301519051900360e0820152610c9660016018611795565b606081015151604051339180156108fc02916000818181858888f19350505050158015610cc7573d6000803e3d6000fd5b50604051600081527f57880294be9082a60300409fbd0ddb505de01069596adfb113eaa4ca49e9bf5c9060200160405180910390a16000602084015260c0810151610da057336000908152600460205260408120805461ffff199081168255600182019290925560020180549091169055610d40611cc3565b825181516001600160a01b039091169052602080840151825182015260408085015182840180519190915280516001930192909252606080860151835190151592019190915281514391015260e0830151905160800152610b22816118a2565b60c081015161010080830180519290925260a0830180516020908101518451901515908201529051604090810151845190151590820152336000908152600483528190208054600160ff199091168117825594518051958201959095559184015160029092018054949091015161ffff1990941691151561ff00191691909117921515909102919091179055610d40611cc3565b6002602085015151516006811115610e4e57610e4e611ff7565b1415610f6b57610e6060016019611795565b610e6c3415601a611795565b610e7b8260600151601b611795565b8151610e93906001600160a01b03163314601c611795565b604051600081527f249435be0efb9bff96fb6f3922bf41b07fa0e8da356b92996d7774927b0e47869060200160405180910390a1600060408085019190915260e083015190517f483a24ae24c82660ce9165c2137587c06d925e0e521df9251ae3b0ff1a60035191610f04916126e0565b60405180910390a1610f14611cc3565b825181516001600160a01b03909116905260208084018051835183015251818301805191909152805160019201919091528051600060409091015280514360609091015260808085015191510152610b22816118a2565b6003602085015151516006811115610f8557610f85611ff7565b141561114f5760208401515160800151610120820152610fa76001601d611795565b610fb33415601e611795565b610fd08260600151610fc6576001610fc9565b60005b601f611795565b8151610fe8906001600160a01b031633146020611795565b61012081015151602001516110009015156021611795565b61101c6000198261012001516000015160200151106022611795565b610120810151515161103390600019116023611795565b61012081015151805160209091015161104f9119116024611795565b61012081015151602081015190516110709101198360800151106025611795565b604051600081527fd6a6982659ce9312a5e733bde4e3c01a729f6d996ac4ffd9ef96264cebeb685f9060200160405180910390a1600060608401526101208101515160409081015190517f5cc6e9ecae263176abadbc34ed52763f1feaf2c6b57722534d7f6722496f8c3a916110e5916126e0565b60405180910390a16110f5611cc3565b825181516001600160a01b03909116905260208084015182518201526101208301515181830180519190915280516001920182905280516040019190915280514360609091015260808085015191510152610b22816118a2565b600460208501515151600681111561116957611169611ff7565b14156114435761117e82606001516026611795565b61014081018051600090819052815160200181905290516040015260c08201516111e69060016111ad336117ba565b5160018111156111bf576111bf611ff7565b146111cf578261014001516111dd565b6111d8336117ba565b604001515b51106027611795565b60c08201516112309060016111fa336117ba565b51600181111561120c5761120c611ff7565b1461121c5782610140015161122a565b611225336117ba565b604001515b51900390565b61016082015260a082015161124e9019826101600151106028611795565b61016081015160a083015101610180820181905261126f9015156029611795565b6080820151611287901982610180015110602a611795565b6080820151610180820151016101a08201526112a56001602b611795565b6112b78161018001513414602c611795565b6101a08101516112d0901982610180015110602d611795565b604051600081527f27aae3c9458fce71b0f71b15631f84de116a6b68b9fc6652ae8e7ce2acf7fb929060200160405180910390a1600060808401526101a081015160a083015190036101c082015261132a6001602e611795565b815160a08301516040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015611367573d6000803e3d6000fd5b5060c08201516101e08201805191909152805160006020918201819052825160409081018290523382526004835290819020805460ff19166001908117825593518051948201949094559183015160029092018054939091015115156101000261ff00199215159290921661ffff19909316929092171790556113e8611cc3565b825181516001600160a01b03909116905260208084015182518201526040808501518284018051919091528051600193018390528051909101919091528051436060909101526101c0830151905160800152610b22816118a2565b600560208501515151600681111561145d5761145d611ff7565b141561155e5761146f6001602f611795565b61147b34156030611795565b8151611493906001600160a01b031633146031611795565b6114b082606001516114a65760016114a9565b60005b6032611795565b6114c260008360800151146033611795565b604051600081527fea159df85fd34a509b41bc67bc96d18262c19d7862e2b0db7c05559511d2cdee9060200160405180910390a1600060a0840152611505611cc3565b825181516001600160a01b039091169052602080840151825182015260408085015182840180519190915280516000930183905280519091019190915280514360609091015260808085015191510152610b22816118a2565b600660208501515151600681111561157857611578611ff7565b141561178f5760208401515160e0015161020082015261159a60016034611795565b6115a634156035611795565b81516115be906001600160a01b031633146036611795565b6102208101805160009081905281516020018190529051604001526001610200820151516115eb906117ba565b5160018111156115fd576115fd611ff7565b1461160d57806102200151611622565b6102008101515161161d906117ba565b604001515b6102408201819052516116389015156037611795565b61165a81610240015160400151611650576001611653565b60005b6038611795565b604051600081527ed2fc5bde9aeb57d99bb2db9076ea1e77b0ad4601b118535c0aa4ef05dc0b729060200160405180910390a1600060c084018190526102408201515161026083018051919091528051600160209182018190528251604090810182905261020086018051516001600160a01b03908116875260048552828720805460ff19168517905594519051519094168552938490208351918101919091559082015160029091018054929093015161ffff1990921690151561ff0019161761010091151591909102179055611730611cc3565b825181516001600160a01b039091169052602080840151825182015260408085015182840180519190915280516001930192909252606080860151835190151592019190915281514391015260808085015191510152610b22816118a2565b50505050565b816105585760405163100960cb60e01b81526004810182905260240160405180910390fd5b6117c2611a98565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156117f1576117f1611ff7565b1415611893576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561183257611832611ff7565b600181111561184357611843611ff7565b8152815460ff610100918290048116151560208085019190915260408051606081018252600187015481526002909601548084161515928701929092529290041615158382015201529050919050565b60008082526020820152919050565b80602001516020015115611957576118b8611ce3565b8151516001600160a01b031681528151602090810151818301528083018051516040808501919091528151810151151560608501528151608090810151908501528151515160a085015281515183015160c085015290515181015160e08401526003600055436001555161192e9183910161270b565b60405160208183030381529060405260029080519060200190611952929190611d5d565b505050565b6119636001600b611795565b8051516020820151608001516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156119a5573d6000803e3d6000fd5b50600080805560018190556119bc90600290611de1565b50565b6040518060400160405280600081526020016119d9611e1b565b905290565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b604080516080808201835260008083526020808401829052845192830185528183528201819052818401819052606082015290918201908152604080516101008101825260008082526020828101829052928201819052606082018190526080820181905260a0820181905260c0820181905260e082015291015290565b60408051606080820183526000808352602080840182905284519283018552818352820181905281840152909182015290565b6040518060600160405280611ade611a98565b81526040805160608101825260008082526020828101829052928201529101908152600060209091015290565b604080516102e081018252600061028082018181526102a083018290526102c083018290528252825160608082018552828252602080830184905282860184905280850192909252845180820186528381528083018490528086018490528486015284518083018652838152818501528451808201865283815280830184905280860184905260808501528451808201865283815280830184905280860184905260a085015260c0840183905260e084018390528451908101855282815290810182905292830152906101008201908152602001611be7611e2e565b8152604080516060810182526000808252602082810182905292820152910190815260200160008152602001600081526020016000815260200160008152602001611c4b604080516060810182526000808252602082018190529181019190915290565b81526040805160208181019092526000815291019081526040805160608101825260008082526020828101829052928201529101908152604080516060810182526000808252602082810182905292820152910190815260408051606081018252600080825260208281018290529282015291015290565b6040518060400160405280611cd6611e41565b81526020016119d9611e64565b60405180610100016040528060006001600160a01b03168152602001611d07611a1a565b8152602001611d14611a1a565b8152600060208083018290526040808401839052606080850184905260808086018590528251908101835284815292830184905290820183905281019190915260a09091015290565b828054611d69906122c3565b90600052602060002090601f016020900481019282611d8b5760008555611dd1565b82601f10611da457805160ff1916838001178555611dd1565b82800160010185558215611dd1579182015b82811115611dd1578251825591602001919060010190611db6565b50611ddd929150611e99565b5090565b508054611ded906122c3565b6000825580601f10611dfd575050565b601f0160209004906000526020600020908101906119bc9190611e99565b60405180602001604052806119d9611eae565b60405180602001604052806119d9611a1a565b604051806040016040528060006001600160a01b031681526020016119d9611a1a565b6040518060a00160405280611e77611a1a565b8152600060208201819052604082018190526060820181905260809091015290565b5b80821115611ddd5760008155600101611e9a565b604080516101008101825260008082526020808301829052835190810184529081529091820190815260006020820152604001611ee9611e2e565b81526000602080830182905260408084018390528051918201905290815260609091015290565b80518252602081015160208301526040810151611f516040840182805182526020810151602083015260408101516040830152606081015160608301525050565b506060810151805160c0840152602081015160e084015260408101516101008401526060810151610120840152608081015161014084015260a081015161016084015260c081015161018084015260e08101516101a0840152505050565b6101c081016103ba8284611f10565b6001600160a01b03811681146119bc57600080fd5b600060208284031215611fe557600080fd5b8135611ff081611fbe565b9392505050565b634e487b7160e01b600052602160045260246000fd5b815160a08201906002811061202457612024611ff7565b8252602083810151151581840152604093840151805185850152908101511515606084015290920151151560809091015290565b60006020828403121561206a57600080fd5b5035919050565b60006102c0828403121561208457600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156120be578581018301518582016060015282016120a2565b818111156120d0576000606083870101525b50601f01601f191692909201606001949350505050565b604051610100810167ffffffffffffffff8111828210171561211957634e487b7160e01b600052604160045260246000fd5b60405290565b6040516080810167ffffffffffffffff8111828210171561211957634e487b7160e01b600052604160045260246000fd5b6040516020810167ffffffffffffffff8111828210171561211957634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561211957634e487b7160e01b600052604160045260246000fd5b600061010082840312156121c557600080fd5b6121cd6120e7565b9050813581526020820135602082015260408201356040820152606082013560608201526080820135608082015260a082013560a082015260c082013560c082015260e082013560e082015292915050565b60008183036101c081121561223357600080fd5b61223b61211f565b915082358252602083013560208301526080603f198201121561225d57600080fd5b5061226661211f565b6040838101358252606080850135602084015260808501358383015260a08501359083015282015261229b8360c084016121b2565b606082015292915050565b60006101c082840312156122b957600080fd5b611ff0838361221f565b600181811c908216806122d757607f821691505b6020821081141561208457634e487b7160e01b600052602260045260246000fd5b805161053381611fbe565b60006080828403121561231557600080fd5b61231d61211f565b90508151815260208201516020820152604082015160408201526060820151606082015292915050565b60008183036101c081121561235b57600080fd5b61236361211f565b915082518252602083015160208301526123808460408501612303565b60408301526101008060bf198301121561239957600080fd5b6123a16120e7565b915060c0840151825260e08401516020830152808401516040830152506101208301516060820152610140830151608082015261016083015160a082015261018083015160c08201526101a083015160e08201528060608301525092915050565b80151581146119bc57600080fd5b805161053381612402565b60006104a0828403121561242e57600080fd5b6124366120e7565b61243f836122f8565b815261244e8460208501612347565b6020820152612461846101e08501612347565b60408201526124736103a08401612410565b60608201526103c083015160808201526103e083015160a082015261040083015160c08201526124a7846104208501612303565b60e08201529392505050565b80356007811061053357600080fd5b803561053381612402565b6000602082840312156124df57600080fd5b6124e7612150565b9135825250919050565b60006101c0828403121561250457600080fd5b61250c612150565b9050612518838361221f565b815292915050565b60006020828403121561253257600080fd5b61253a612150565b9050813561251881611fbe565b60008183036102c081121561255b57600080fd5b612563612181565b833581526102a080601f198401121561257b57600080fd5b612583612150565b925061258d6120e7565b612599602087016124b3565b81526125a7604087016124c2565b60208201526125b987606088016124cd565b60408201526125ca608087016124c2565b60608201526125dc8760a088016124f1565b60808201526125ee61026087016124c2565b60a082015261260061028087016124c2565b60c082015261261187838801612520565b60e082015283525060208101919091529392505050565b610558828251611f10565b6001600160a01b038316815281516020808301919091528201515180516102e0830191906007811061266757612667611ff7565b6040840152602081015180151560608501525060408101518051608085015250606081015180151560a08501525060808101516126a760c0850182612628565b5060a0810151151561028084015260c081015115156102a084015260e00151516001600160a01b03166102c09092019190915292915050565b81518152602080830151908201526040808301519082015260608083015190820152608081016103ba565b81516001600160a01b031681526020808301516104a083019161273090840182611f10565b5060408301516127446101e0840182611f10565b5060608381015115156103a084015260808401516103c084015260a08401516103e084015260c084015161040084015260e09093015180516104208401526020810151610440840152604081015161046084015290920151610480909101529056fea26469706673582212203dcd51d4a5fbcc57d7f031ae9017cac724ba4a131c46d9bd3d4d1facfcc8b51e64736f6c634300080c0033`,
  BytecodeLen: 12634,
  Which: `oD`,
  version: 7,
  views: {
    info: `info`,
    isAttending: `isAttending`,
    stakeBalance: `stakeBalance`
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:210:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:55:58:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "checkIn": checkIn,
  "claimStake": claimStake,
  "concludeEvent": concludeEvent,
  "createEvent": createEvent,
  "register": register,
  "shutDown": shutDown,
  "verifyAttendance": verifyAttendance
  };
export const _APIs = {
  checkIn: checkIn,
  claimStake: claimStake,
  concludeEvent: concludeEvent,
  createEvent: createEvent,
  register: register,
  shutDown: shutDown,
  verifyAttendance: verifyAttendance
  };
