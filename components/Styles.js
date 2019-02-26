export const TableStyles = () => (
  <style jsx>{`
.table {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Open Sans, sans-serif;
}

.bg {
  z-index: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: url("https://upload.wikimedia.org/wikipedia/commons/3/33/Blackjack21.jpg");
  background-size: cover;
  background-position: center;
}

.bg:after {
  z-index: 0;
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #f7faff;
}

.content {
  z-index: 100;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding-bottom: 65px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-family: Open Sans, sans-serif;
}

h1 {
  margin: 0;
}

.section-title {
  font-size: 16px;
  width: 90%;
  padding: 0;
}

.score-number {
  color: #faab1a;
}

p {
  color: #000;
  text-align: left;
  margin: 0;
}

.message {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center; 
  text-align: center;  
}

.total-wrapper {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.scores {
  height: 40px;
  margin: 0 auto;
  font-size: 14px;
  width: 90%;
  color: #000;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
}

@media (max-width: 500px) {
  .total {
    position: absolute;
    top: 10px;
    right: 10px;
    height: 30px;
    width: 60px;
    font-size: 12px;
  }
}

.winner {
  color: #000;
  animation-name: fade;
  animation-iteration-count: 1;
  animation-duration: 2s;
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
`}
  </style>
);
