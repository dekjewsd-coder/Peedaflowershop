import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-600">พี่ดา (ดอกไม้สด)</h1>
          <nav className="space-x-6 hidden md:block font-medium">
            <a href="#home" className="hover:text-pink-500 transition">หน้าแรก</a>
            <a href="#products" className="hover:text-pink-500 transition">รายละเอียดสินค้า</a>
            <a href="#about" className="hover:text-pink-500 transition">เกี่ยวกับเรา</a>
            <a href="#contact" className="hover:text-pink-500 transition">ติดต่อ</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="max-w-6xl mx-auto px-4 py-12 md:py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-700 mb-4">ยินดีต้อนรับสู่ร้านดอกไม้ พี่ดา</h2>
        <p className="text-lg text-gray-600 mb-8">ดอกไม้สดใหม่ จัดช่อสวยงาม สำหรับทุกโอกาสพิเศษของคุณ</p>
        <img 
          src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
          alt="ร้านดอกไม้" 
          className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-md" 
        />
      </section>

      {/* Products Section */}
      <section id="products" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-pink-600 mb-10">ตัวอย่างสินค้าของเรา</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-pink-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img src="https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="ช่อกุหลาบแดง" className="w-full h-64 object-cover" />
              <div className="p-5">
                <h4 className="text-xl font-semibold mb-2">ช่อกุหลาบพรีเมียม</h4>
                <p className="text-gray-600">ช่อกุหลาบสีแดงสด คัดเกรดอย่างดี เหมาะสำหรับวันพิเศษต่างๆ จัดแต่งอย่างสวยงาม</p>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-pink-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img src="https://images.unsplash.com/photo-1562690868-60bbe7293e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="ดอกทิวลิป" className="w-full h-64 object-cover" />
              <div className="p-5">
                <h4 className="text-xl font-semibold mb-2">ช่อทิวลิปหลากสี</h4>
                <p className="text-gray-600">ทิวลิปนำเข้า สดใส น่ารัก มอบความสดชื่นและรอยยิ้มให้ผู้รับในทุกๆ วัน</p>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-pink-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300">
              <img src="https://images.unsplash.com/photo-1591886897148-9366dfdfc29e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="ดอกทานตะวัน" className="w-full h-64 object-cover" />
              <div className="p-5">
                <h4 className="text-xl font-semibold mb-2">ช่อทานตะวัน</h4>
                <p className="text-gray-600">สื่อถึงความร่าเริงและกำลังใจ เหมาะสำหรับแสดงความยินดีในทุกโอกาส</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-3xl font-bold text-center text-pink-600 mb-8">เกี่ยวกับเรา</h3>
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed">
            ร้านดอกไม้ <strong>พี่ดา (ดอกไม้สด)</strong> เราคัดสรรดอกไม้สดใหม่ทุกวัน ด้วยความใส่ใจในทุกรายละเอียด 
            ไม่ว่าจะเป็นช่อดอกไม้ แจกัน หรือกระเช้าดอกไม้ เราพร้อมจัดให้สวยงามตรงใจคุณ 
            เพื่อเป็นตัวแทนส่งมอบความรู้สึกดีๆ และความประทับใจให้กับคนที่คุณรัก
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white py-16 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-pink-600 mb-8">ช่องทางติดต่อ</h3>
          <div className="text-lg text-gray-700 mb-10 space-y-3 bg-pink-50 p-6 rounded-xl inline-block text-left shadow-sm">
            <p><strong>📍 ที่ตั้งร้าน:</strong> 27 ถนนชัย-เพชรมงคล ตำบลบ่อยาง อำเภอเมืองสงขลา จังหวัดสงขลา 90000</p>
            <p><strong>📞 โทรศัพท์:</strong> 065-7722161</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-4">
            {/* Line Button - Pastel Green */}
            <a href="#" className="flex items-center justify-center gap-3 bg-green-100 hover:bg-green-200 text-green-800 px-8 py-4 rounded-full font-semibold text-lg transition duration-300 shadow-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M24 10.304c0-5.369-5.383-9.738-12-9.738-6.616 0-12 4.369-12 9.738 0 4.814 4.269 8.846 10.036 9.608.391.084.922.258 1.057.592.122.298.079.76.038 1.077l-.164 1.02c-.045.297-.24 1.458 1.277.82 1.518-.639 8.193-4.834 10.536-8.136C23.633 13.921 24 12.181 24 10.304z"/></svg>
              สั่งซื้อผ่าน LINE
            </a>
            
            {/* Grab Button - Pastel Teal */}
            <a href="#" className="flex items-center justify-center gap-3 bg-teal-100 hover:bg-teal-200 text-teal-800 px-8 py-4 rounded-full font-semibold text-lg transition duration-300 shadow-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>
              สั่งซื้อผ่าน Grab
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} ร้านดอกไม้ พี่ดา (ดอกไม้สด). All rights reserved.</p>
      </footer>
    </div>
  );
}
