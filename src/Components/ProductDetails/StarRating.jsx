import React from "react";

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating); // পূর্ণ ⭐ সংখ্যা
  const halfStar = rating % 1 >= 0.5;  // অর্ধেক ⭐ থাকবে কিনা
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
      {/* পূর্ণ ⭐ */}
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <span key={`full-${i}`} style={{ color: "gold", fontSize: "20px" }}>
            ★
          </span>
        ))}

      {/* অর্ধেক ⭐ */}
      {halfStar && (
        <span style={{ color: "gold", fontSize: "20px" }}>☆</span>
      )}

      {/* ফাঁকা ⭐ */}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <span key={`empty-${i}`} style={{ color: "#ccc", fontSize: "20px" }}>
            ★
          </span>
        ))}

      {/* Numeric Rating */}
      <span style={{ marginLeft: "8px", color: "#444" }}>{rating}</span>
    </div>
  );
};

// ব্যবহার উদাহরণ
export default StarRating