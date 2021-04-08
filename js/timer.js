class CountdownTimer {
  constructor(selector, targetDate) {
    this.element = document.querySelector(selector);
    this.targetDate = targetDate - Date.now();
  }

  getSeconds() {
    const sec = Math.floor((this.targetDate % (1000 * 60)) / 1000);
return transformValues(sec);  
}

  getMinutes() {
    const min = Math.floor((this.targetDate % (1000 * 60 * 60)) / (1000 * 60));
    return transformValues(min);  
}

  getHours() {
    const hours = Math.floor(
      (this.targetDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    return transformValues(hours);
  }

  getDays() {
    const days = Math.floor(this.targetDate / (1000 * 60 * 60 * 24));
    return transformValues(days);  
}

  render() {
    this.element.innerHTML = `<div class="field">
    <span class="value" data-value="days">${this.getDays().padStart(2, "0")}:</span>
    <span class="label">Days</span>
  </div>

  <div class="field">
    <span class="value" data-value="hours">${this.getHours().padStart(2, "0")}:</span>
    <span class="label">Hours</span>
  </div>

  <div class="field">
    <span class="value" data-value="mins">${this.getMinutes().padStart(2, "0")}:</span>
    <span class="label">Minutes</span>
  </div>

  <div class="field">
    <span class="value" data-value="secs"> ${this.getSeconds().padStart(2, "0")}</span>
    <span class="label">Seconds</span>
  </div>`;
  }

  init() {
    const interval = setInterval(() => {
      this.targetDate -= 1000;

      if (this.targetDate <= 0) {
        this.targetDate = 0;
        clearInterval(interval);
      }

      this.render();
    }, 1000);
  }
}

function transformValues(value){
    return String(value).padStart(2, '0');
}

export default CountdownTimer;


