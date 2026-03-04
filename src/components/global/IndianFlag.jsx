// Indian flag.

function IndianFlag() {
    const slices = Array.from({ length: 50 });

    return (
        <div className="flag">
      {slices.map((_, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${i * 0.04}s`,
            backgroundPosition: `${-i * 2}px 0`
          }}
        />
      ))}
    </div>
    );
}

export default IndianFlag;