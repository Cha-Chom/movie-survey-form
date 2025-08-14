export default function Summary({ data, onRestart }) {
    return (
      <div>
        <h2>ข้อมูลที่ส่ง:</h2>
        <p>ชื่อ: {data.name}</p>
        <p>อีเมล: {data.email}</p>
        <p>ภาพยนตร์ที่เลือก: {data.selectedMovie}</p>
        <p>ความคิดเห็น: {data.comment || "-"}</p>
        <button onClick={onRestart}>เริ่มทำแบบสำรวจใหม่</button>
      </div>
    );
  }
  