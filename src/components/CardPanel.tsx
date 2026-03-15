'use client'

import { useReducer } from "react";
import Card from "@/components/Card";

// 1. เพิ่ม Action Type 'REMOVE_RATING' เข้ามา
type RatingAction = 
  | { type: 'UPDATE_RATING'; venueName: string; rating: number | null }
  | { type: 'REMOVE_RATING'; venueName: string }; // ใช้สำหรับลบข้อมูล

const ratingReducer = (state: Map<string, number | null>, action: RatingAction) => {
  switch (action.type) {
    case 'UPDATE_RATING':
      const newStateUpdate = new Map(state);
      newStateUpdate.set(action.venueName, action.rating);
      return newStateUpdate;
    case 'REMOVE_RATING':
      // 2. เมื่อมีการลบ ให้สร้าง Map ใหม่ และใช้คำสั่ง delete ลบชื่อสถานที่นั้นออก
      const newStateRemove = new Map(state);
      newStateRemove.delete(action.venueName);
      return newStateRemove;
    default:
      return state;
  }
};

export default function CardPanel() {
  const initialRatings = new Map<string, number | null>([
    ['The Bloom Pavilion', 0],
    ['Spark Space', 0],
    ['The Grand Table', 0],
  ]);

  const [ratingMap, dispatch] = useReducer(ratingReducer, initialRatings);

  const handleRatingChange = (venueName: string, rating: number | null) => {
    dispatch({ type: 'UPDATE_RATING', venueName, rating });
  };

  // ฟังก์ชันสำหรับคลิกที่ List เพื่อลบข้อมูล
  const handleRemoveRating = (venueName: string) => {
    dispatch({ type: 'REMOVE_RATING', venueName });
  };

  return (
    <div>
      <div style={{
        margin: "20px", display: "flex", flexDirection: "row",
        alignContent: "space-around", justifyContent: "space-around",
        flexWrap: "wrap"
      }}>
        <Card 
          venueName='The Bloom Pavilion' 
          imgSrc='/img/bloom.jpg'
          onRatingChange={handleRatingChange}
        />
        <Card 
          venueName='Spark Space' 
          imgSrc='/img/sparkspace.jpg'
          onRatingChange={handleRatingChange}
        />
        <Card 
          venueName='The Grand Table' 
          imgSrc='/img/grandtable.jpg'
          onRatingChange={handleRatingChange}
        />
      </div>

      {/* --- ส่วนแสดงรายการสถานที่จัดงานพร้อม Rating ด้านล่าง --- */}
      <div className="mt-8 p-6 max-w-3xl mx-auto bg-gray-50 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Venue Ratings {ratingMap.size}</h3>
        
        <div className="flex flex-col gap-3">
          {/* ใช้ Array.from เพื่อแปลง Map เป็น Array ให้สามารถ map() ได้ */}
          {Array.from(ratingMap.entries()).map(([venue, rating]) => (
            <div 
              key={venue}
              data-testid={venue} // ตั้งค่า data-testid เป็นชื่อสถานที่ตามโจทย์
              className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer hover:bg-red-50 hover:border-red-300 transition-all"
              onClick={() => handleRemoveRating(venue)} // เมื่อคลิกให้ลบข้อมูลนี้ออกจาก Map
            >
              <span className="font-semibold text-gray-700">{venue}</span>
              <span className="bg-sky-100 text-sky-800 px-3 py-1 rounded-full font-medium">
                Rating: {rating}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}