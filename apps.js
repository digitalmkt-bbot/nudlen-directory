/* =========================================================
   Andaman Hub — รายการระบบทั้งหมด
   เพิ่ม/แก้ระบบได้ที่ไฟล์นี้ที่เดียว ทั้งหน้าแรกและหน้าแอปทั้งหมดจะอัปเดตตาม
   cat ต้องตรงกับ id ใน CATS
   ========================================================= */
window.HUB_CATS = [
  { id: 'approve', name: 'อนุมัติ & ค่าใช้จ่าย' },
  { id: 'booking', name: 'การจอง & การขาย' },
  { id: 'office',  name: 'งานออฟฟิศ' },
  { id: 'report',  name: 'รายงาน & การตลาด' }
];

/* ไอคอน (viewBox 0 0 64 64) — class="nb" = ไม่ผสมสีซ้อน */
var I = {
  memo: '<rect x="10" y="8" width="28" height="40" rx="6" fill="#7FD1D6"/><rect x="24" y="16" width="30" height="40" rx="6" fill="#FFB27F"/><rect class="nb" x="31" y="28" width="16" height="4" rx="2" fill="#0B2545"/><rect class="nb" x="31" y="37" width="10" height="4" rx="2" fill="#0B2545"/>',
  prpo: '<rect x="22" y="8" width="20" height="22" rx="4" fill="#38BDF8"/><path d="M8 24h48l-6 30H14z" fill="#F26A21"/><circle class="nb" cx="24" cy="40" r="3" fill="#fff"/><circle class="nb" cx="40" cy="40" r="3" fill="#fff"/>',
  voucher: '<path d="M14 6h30v50l-5-4-5 4-5-4-5 4-5-4-5 4z" fill="#F26A21"/><circle cx="44" cy="42" r="13" fill="#FFB27F"/><rect class="nb" x="20" y="16" width="16" height="4" rx="2" fill="#fff"/><rect class="nb" x="20" y="25" width="10" height="4" rx="2" fill="#fff"/>',
  payLA: '<circle cx="28" cy="32" r="20" fill="#7FD1D6"/><path d="M20 33l10 10 24-26" fill="none" stroke="#F26A21" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>',
  payAS: '<circle cx="28" cy="32" r="20" fill="#FFB27F"/><path d="M20 33l10 10 24-26" fill="none" stroke="#0E7C86" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>',
  beasy: '<path transform="rotate(12 32 32)" d="M10 22h44v7a4 4 0 0 0 0 8v7H10v-7a4 4 0 0 0 0-8z" fill="#F26A21"/><path transform="rotate(-12 32 32)" d="M10 22h44v7a4 4 0 0 0 0 8v7H10v-7a4 4 0 0 0 0-8z" fill="#38BDF8"/>',
  cs: '<path d="M10 56a22 18 0 0 1 44 0z" fill="#7FD1D6"/><circle cx="32" cy="26" r="13" fill="#F26A21"/>',
  rsvn: '<rect x="8" y="20" width="26" height="36" rx="5" fill="#0B2545"/><rect x="26" y="8" width="30" height="48" rx="5" fill="#38BDF8"/><rect class="nb" x="35" y="18" width="6" height="6" rx="1.5" fill="#fff"/><rect class="nb" x="45" y="18" width="6" height="6" rx="1.5" fill="#fff"/><rect class="nb" x="35" y="30" width="6" height="6" rx="1.5" fill="#fff"/><rect class="nb" x="45" y="30" width="6" height="6" rx="1.5" fill="#fff"/>',
  agent: '<rect x="6" y="14" width="40" height="30" rx="6" fill="#FFB27F"/><circle cx="44" cy="44" r="14" fill="#7FD1D6"/><circle class="nb" cx="20" cy="27" r="5" fill="#0B2545"/><path class="nb" d="M37 49l5-6 4 3 6-8" fill="none" stroke="#0B2545" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>',
  office: '<rect x="8" y="12" width="38" height="38" rx="7" fill="#7FD1D6"/><rect x="8" y="12" width="38" height="11" rx="5" fill="#0E7C86"/><circle cx="44" cy="44" r="13" fill="#F26A21"/><path class="nb" d="M44 37v8h6" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>',
  docs: '<path d="M6 16a4 4 0 0 1 4-4h14l6 6h24a4 4 0 0 1 4 4v28a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z" fill="#FFB27F"/><rect transform="rotate(-10 32 30)" x="18" y="10" width="26" height="32" rx="4" fill="#38BDF8"/><path d="M6 30h52v20a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z" fill="#F26A21"/>',
  report: '<circle cx="24" cy="26" r="16" fill="#7FD1D6"/><rect x="22" y="34" width="10" height="20" rx="3" fill="#0B2545"/><rect x="34" y="24" width="10" height="30" rx="3" fill="#F26A21"/><rect x="46" y="12" width="10" height="42" rx="3" fill="#FFB27F"/>',
  mkt: '<path d="M8 26l34-16v44L8 38z" fill="#F26A21"/><rect x="6" y="24" width="14" height="16" rx="4" fill="#0B2545"/><path d="M14 40l6 14h8l-4-14z" fill="#38BDF8"/><path class="nb" d="M49 22a12 12 0 0 1 0 20" fill="none" stroke="#38BDF8" stroke-width="5" stroke-linecap="round"/>'
};

window.HUB_APPS = [
  { short: 'Memo',               name: 'Memo',               cat: 'approve', icon: I.memo,    desc: 'บันทึกเรื่องทั่วไป ขออนุมัติได้หลายประเภท',    url: 'https://memo.loveandaman.com',                 home: true },
  { short: 'ขอซื้อ / สั่งซื้อ',    name: 'ขอซื้อ / สั่งซื้อ',     cat: 'approve', icon: I.prpo,    desc: 'PR/PO และติดตามสถานะอนุมัติ',              url: 'https://prpo.loveandaman.com',                 home: true },
  { short: 'Voucher',            name: 'Voucher',            cat: 'approve', icon: I.voucher, desc: 'ออกและอนุมัติใบสำคัญจ่าย',                  url: 'https://voucher.loveandaman.com',              home: true },
  { short: 'อนุมัติจ่าย · LA',     name: 'อนุมัติจ่าย · LA',      cat: 'approve', icon: I.payLA,   desc: 'อนุมัติคำขอใช้จ่าย Love Andaman',            url: 'https://approve.loveandaman.com',              home: true },
  { short: 'อนุมัติจ่าย · AS',     name: 'อนุมัติจ่าย · AS',      cat: 'approve', icon: I.payAS,   desc: 'อนุมัติคำขอใช้จ่าย Andaman Sunday',          url: 'https://approve.andamansunday.com',            home: true },
  { short: 'Beasy Booking',      name: 'Beasy Booking',      cat: 'booking', icon: I.beasy,   desc: 'Booking Counter — Andaman Sunday',          url: 'https://beasybooking.com',                     home: true },
  { short: 'CS / B2C',           name: 'CS / B2C',           cat: 'booking', icon: I.cs,      desc: 'จองและวอชเชอร์สำหรับลูกค้าทั่วไป',             url: 'https://cs.loveandaman.com',                   home: true },
  { short: 'RSVN / B2B',         name: 'RSVN / B2B',         cat: 'booking', icon: I.rsvn,    desc: 'สำรองที่นั่งและงานคู่ค้า B2B',                url: 'https://rsvn.loveandaman.com',                 home: true },
  { short: 'Sales Agent',        name: 'Sales Agent',        cat: 'booking', icon: I.agent,   desc: 'ติดตามและอัปเดตสถานะ Agent',                url: 'https://saleagent.beasybooking.com',           home: true },
  { short: 'จองรถ / ห้องประชุม',  name: 'จองรถ / ห้องประชุม',   cat: 'office',  icon: I.office,  desc: 'Office Booking สำหรับใช้รถและห้องประชุม',      url: 'https://officebooking.loveandaman.com',        home: true },
  { short: 'เอกสาร',             name: 'เอกสาร',             cat: 'office',  icon: I.docs,    desc: 'จัดเก็บและควบคุมเอกสารสำคัญของบริษัท',          url: 'https://app-production-43c5.up.railway.app',   home: true },
  { short: 'Online Report',      name: 'Online Report',      cat: 'report',  icon: I.report,  desc: 'รายงานออนไลน์ · TripBoard สรุปข้อมูลทริป',     url: 'https://onlinereport.loveandaman.com',         home: true },
  { short: 'Digital Marketing',  name: 'Digital Marketing',  cat: 'report',  icon: I.mkt,     desc: 'ติดตามแคมเปญและวัดผลแบบเรียลไทม์',            url: 'https://digitalmkt-bbot.github.io',            home: false }
];

window.hubIcon = function (svg) {
  return '<svg viewBox="0 0 64 64" aria-hidden="true">' + svg + '</svg>';
};
window.hubEsc = function (s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
  });
};
