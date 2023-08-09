import Button from "../Button";

const Form = () => {
    return <form className="text-center">
        <div>
            <label htmlFor="name">الاسم</label>
            <input 
                type="text" 
                id="name"
                name="name"
                placeholder="الاسم الثلاثي"
                //value={formData.name}
                //onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="age">العمر</label>
            <input 
                type="number" 
                id="age"
                name="age"
                placeholder="العمر"
                //value={formData.name}
                //onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="number">رقم الهاتف</label>
            <input 
                type="number" 
                id="number"
                name="number"
                placeholder="07xx-xxx-xxxx"
                //value={formData.name}
                //onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="sex">الجنس</label>
            <label>
                <input
                type="radio"
                value="male"
                id="sex"
                name="male"
                checked
                //checked={selectedOption === 'option1'}
                //onChange={handleOptionChange}
                />
                ذكر
            </label>
            <label>
                <input
                type="radio"
                value="female"
                id="sex"
                name="female"
                //checked={selectedOption === 'option1'}
                //onChange={handleOptionChange}
                />
                انثى
            </label>
        </div>
        <div>
            <label htmlFor="telegram-id">معرف التيليگرام</label>
            <input 
                type="text" 
                id="telegram-id"
                name="telegram-id"
                placeholder="@المعرف"
                //value={formData.name}
                //onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor="Occupation">المهنة</label>
            <select >
                <option value="">المهنة</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
        <div>
            <label htmlFor="goverment">المحافظة</label>
            <p>(مو شرط نفسها محافظة السكن)المحافظة الي راح تشارك بتنظيفها هذا الاسبوع</p>
            <select >
                <option value="">المحافظة</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
        <div>
            <p>املي هذه الاستمارة حتى تحصل على الباركود الخاص بيك وتستخدمه بكل تجمعات سفراء النظافة.</p>
            <p>ملاحظة: اذا ما تحب تشاركنا معلوماتك، ممكن تحضر بدون ما تملي الاستمارة، بس ما راح تحصل على اي وحدة من مطبوعات الحملة (مثلا تيشيرت، مطارة مي، ميدالية، وغيرها)</p>
        </div>

        <Button children={'انضم الينا'}/>
    </form>;
  };
  
  export default Form;