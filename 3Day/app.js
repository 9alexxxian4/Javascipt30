const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
const suffix = this.dataset.sizing || '';
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));




//당신이 제공한 코드 조각은 웹 페이지에서 CSS 변수 (또는 사용자 정의 속성)를 조작하는 데 사용되는 JavaScript로 작성된 것으로 보입니다. 이 코드는 입력 값과 접미사에 기반하여 CSS 변수를 업데이트하는 handleUpdate() 함수를 정의하고, 입력 요소에 'change' 및 'mousemove' 이벤트가 발생할 때 handleUpdate() 함수를 호출하는 이벤트 리스너를 추가합니다.

//코드 각 부분의 작동 방식을 살펴보겠습니다:

//const inputs = document.querySelectorAll('.controls input');

//이 줄은 querySelectorAll() 메서드를 사용하여 클래스 이름이 'controls'인 모든 입력 요소를 선택하고 inputs 상수에 저장합니다.
//function handleUpdate() { ... }

//handleUpdate() 함수를 선언한 부분입니다. 이 함수 내부에서:
//const suffix = this.dataset.sizing || '';
//이 줄은 입력 요소에서 data-sizing 속성 값을 추출합니다. 속성이 없으면 빈 문자열로 기본 설정됩니다.
//document.documentElement.style.setProperty(...)
//이 줄은 setProperty() 메서드를 사용하여 CSS 변수를 설정합니다. 입력 요소의 이름과 값, 그리고 data-sizing 속성을 기반으로 CSS 변수의 값을 업데이트합니다.
//inputs.forEach(input => input.addEventListener('change', handleUpdate));

//이 줄은 각 입력 요소에 'change' 이벤트 리스너를 추가합니다. 'change' 이벤트가 발생하면 (일반적으로 입력 값이 변경되고 포커스가 잃어질 때) handleUpdate() 함수가 호출됩니다.
//inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

//이 줄은 각 입력 요소에 'mousemove' 이벤트 리스너를 추가합니다. 마우스가 입력 요소 위에서 움직일 때 handleUpdate() 함수가 호출되며, 입력 값에 따라 CSS 변수가 동적으로 업데이트됩니다.
//요약하면, 이 코드는 'controls' 클래스가 있는 입력 요소에 이벤트 리스너를 설정합니다. 이 입력 요소가 변경되거나 마우스가 이동할 때, handleUpdate() 함수가 호출되어 웹 페이지의 스타일링에 영향을 미치는 CSS 변수가 실시간으로 업데이트됩니다. 이 코드는 웹 페이지에서 인터랙티브하고 동적인 사용자 인터페이스를 만드는 일반적인 기술입니다.