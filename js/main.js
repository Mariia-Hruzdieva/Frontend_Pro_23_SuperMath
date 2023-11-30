class SuperMath {
    check(obj) {
        this.x = obj.X;
        this.y = obj.Y;
        this.znak = obj.znak;

        const alert =
            `Чи хочете ви зробити дію znak з { X: ${obj['X']}, Y: ${obj['Y']},` +
            `znak: ${obj['znak']} } (Якщо ні, то можна буде ввести нові дані далі)`;

        if (!confirm(alert)) {
            this.input();
            return;
        }

        if (!['+', '-', '*', '/', '%'].includes(obj['znak'].trim())) {
            alert("Неправильний знак. Можна використовувати лише + - * / %");
            return;
        }

        else if (isNaN(obj['X']) || isNaN(obj['Y'])) {
            alert('Одне із значень не є числом.');
            return;
        }

        this.calculate();
    }

    calculate() {
        switch (this.znak) {
            case '+':
                alert(this.x + this.y);
                break;
            case '-':
                alert(this.x - this.y);
                break;
            case '*':
                alert(this.x * this.y);
                break;
            case '/':
                if (this.y !== 0) {
                    alert(this.x / this.y);
                } else {
                    alert("Ділення на нуль неможливе.");
                }
                break;
            case '%':
                alert(this.x % this.y);
                break;
            default: alert("Неправильний знак. Можна використовувати лише + - * / %");
        }
    }

    input() {
        this.x = +(prompt("Введіть значення X:"));
        this.y = +(prompt("Введіть значення Y:"));
        this.znak = prompt("Введіть операцію (+, -, /, *, %):");

        this.calculate();
    }
}

const result = new SuperMath();
let obj = { X: 7, Y: 2, znak: "*" };
result.check(obj);