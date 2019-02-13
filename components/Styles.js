export const TableStyles = () => (
  <style jsx>{`
.title {
  position: absolute;    
  color: #fff;
  font-family: Lobster, cursive;
  text-shadow: 0 4px 8px rgba(0,0,0,0.2);
  transition: all 400ms;
  text-align: center;
}

.title-center {
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 120px;
}

@media (max-width: 500px) {
  .title-center {
    top: 40%;
    font-size: 30px;    
  }
}

.title-left {      
  top: 20px;
  left: 20px;
  font-size: 40px;
  transition: all 400ms;
}

@media (max-width: 500px) {
  .title-left {
    top: 10px;
    left: 10px;
    font-size: 30px;
    transition: all 400ms;     
  }
}

h1 {
  margin: 0;
}

.table {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: #484848;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Open Sans, sans-serif;
}

.cards {
  display: flex;
  align-items: center;
  height: 25%;
  perspective: 800px;
  width: 50%;
  transition: min-width 400ms;
 
}

.cards::-webkit-scrollbar { 
  display: none; 
}

.card-slider {
  display: flex;
  width: 400%;
}

@media (max-width: 500px) {
  .cards {
    width: 95%;
    overflow-X: scroll;
    overflow-Y: visible;
  }
}

.message {
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center; 
  text-align: center;  
}

.total-wrapper {
  height: 20%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.total {
  height: 40px;
  margin: 0 auto;
  width: 80px;
  border: #FF0266 1px solid;
  color: #FFF;
  font-weight: 700;
  display: flex;
  justify-content: center;
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
  color: #fff;
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
