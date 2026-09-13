"use client";
import { useMemo, useState } from "react";

const BrandIcon = () => (<BrandIcon />);

export default function Home() {
  const [weight, setWeight] = useState("65");
  const [height, setHeight] = useState("170");
  const [age, setAge] = useState("28");
  const [gender, setGender] = useState("ชาย");
  const bmi = useMemo(() => {
    const n = Number(weight) / (Number(height) / 100) ** 2;
    return Number.isFinite(n) && n > 0 ? n : 0;
  }, [weight, height]);
  const category =
    bmi < 18.5
      ? "น้ำหนักน้อย"
      : bmi < 23
        ? "ปกติ"
        : bmi < 25
          ? "น้ำหนักเกิน"
          : bmi < 30
            ? "อ้วนระดับ 1"
            : "อ้วนระดับ 2";
  const tip =
    bmi < 18.5
      ? "ลองเพิ่มอาหารที่มีโปรตีนและพลังงานดี พร้อมดูแลมื้ออาหารให้สม่ำเสมอ"
      : bmi < 23
        ? "ยอดเยี่ยม! รักษาสมดุลด้วยการเคลื่อนไหวและพักผ่อนให้เพียงพอ"
        : "ค่อย ๆ ปรับมื้ออาหารและเพิ่มการออกกำลังกายแบบพอดีอย่างต่อเนื่อง";
  return (
    <main className="shell">
      <div className="wrap">
        <nav className="topbar">
          <div className="brand">
            <svg className="brand-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M12 20s-6.5-3.8-8.2-7.4C2.4 9.6 4.1 6 7.5 6c2 0 3.3 1.1 4.5 2.7C13.2 7.1 14.5 6 16.5 6c3.4 0 5.1 3.6 3.7 6.6C18.5 16.2 12 20 12 20Z"/><path d="M12 10v4M10 12h4"/></svg>
            <span>BODYWISE</span>
          </div>
          <span className="toplink">สุขภาพดี เริ่มจากความเข้าใจตัวเอง</span>
        </nav>
        <section className="hero">
          <div className="eyebrow">Health calculator / 01</div>
          <h1>
            เข้าใจร่างกาย
            <br />
            ในตัวเลขเดียว
          </h1>
          <p>
            คำนวณดัชนีมวลกายตามเกณฑ์ WHO สำหรับเอเชีย
            พร้อมคำแนะนำเบื้องต้นที่อ่านง่ายและนำไปใช้ได้จริง
          </p>
        </section>
        <div className="grid">
          <section className="card">
            <h2>ข้อมูลของคุณ</h2>
            <div className="form-grid">
              <label className="field">
                <span className="label">
                  น้ำหนัก <small>(กิโลกรัม)</small>
                </span>
                <input
                  className="input"
                  type="number"
                  min="1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                />
              </label>
              <label className="field">
                <span className="label">
                  ส่วนสูง <small>(เซนติเมตร)</small>
                </span>
                <input
                  className="input"
                  type="number"
                  min="1"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </label>
              <label className="field">
                <span className="label">
                  อายุ <small>(ไม่บังคับ)</small>
                </span>
                <input
                  className="input"
                  type="number"
                  min="1"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </label>
              <label className="field">
                <span className="label">เพศ</span>
                <select
                  className="select"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option>ชาย</option>
                  <option>หญิง</option>
                </select>
              </label>
            </div>
            <button className="button" style={{ marginTop: 22, width: "100%" }}>
              คำนวณ BMI <span>→</span>
            </button>
            <p className="note">
              * BMI เป็นข้อมูลประกอบ ไม่ใช่การวินิจฉัยทางการแพทย์
            </p>
          </section>
          <section className="card result">
            <div className="result-main">
              <div className="result-label">ผลลัพธ์ของคุณ</div>
              <div className="big-number">
                {bmi ? bmi.toFixed(2) : "—"} <span className="unit">BMI</span>
              </div>
              {bmi > 0 && <span className="badge">{category}</span>}
            </div>
            <div className="tip">
              {bmi > 0 ? tip : "กรอกน้ำหนักและส่วนสูงเพื่อดูผลลัพธ์"}
            </div>
            <div className="range">
              <span />
              <span />
              <span />
              <span />
            </div>
          </section>
        </div>
        <div className="footer">
          เกณฑ์อ้างอิง: WHO Asian BMI classification · {gender} · อายุ{" "}
          {age || "—"} ปี
        </div>
      </div>
    </main>
  );
}
