import Button from "../Button";

const Form = () => {
  return (
    <form className="flex flex-col items-center px-72 py-12 text-Body-L">
      <div className="w-full py-2">
        <label htmlFor="name">الاسم</label>
        <input
          className="bg-gray-100 px-4 py-3 my-2 border-solid border-gray-300 border-b w-full "
          type="text"
          id="name"
          name="name"
          placeholder="الاسم الثلاثي"
          //value={formData.name}
          //onChange={handleChange}
        />
      </div>
      <div className="w-full py-2">
        <label htmlFor="age">العمر</label>
        <input
          className="bg-gray-100 px-4 py-3 my-2 border-solid border-gray-300 border-b w-full "
          type="number"
          id="age"
          name="age"
          placeholder="العمر"
          //value={formData.name}
          //onChange={handleChange}
        />
      </div>
      <div className="w-full py-2">
        <label htmlFor="number">رقم الهاتف</label>
        <input
          className="bg-gray-100 px-4 py-3 my-2 border-solid border-gray-300 border-b w-full "
          type="number"
          id="number"
          name="number"
          placeholder="07xx-xxx-xxxx"
          //value={formData.name}
          //onChange={handleChange}
        />
      </div>
      <div className="w-full py-2">
        <label htmlFor="sex">الجنس</label>
        <div>
          <label className="ml-3">
            <input
              className="ml-2"
              style={{ "accent-color": "#ce8116" }}
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
          <label className="mr-3">
            <input
              className="ml-2"
              style={{ "accent-color": "#ce8116" }}
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
      </div>
      <div className="w-full py-2">
        <label htmlFor="telegram-id">معرف التيليگرام</label>
        <input
          className="bg-gray-100 px-4 py-3 my-2 border-solid border-gray-300 border-b w-full "
          type="text"
          id="telegram-id"
          name="telegram-id"
          placeholder="@المعرف"
          //value={formData.name}
          //onChange={handleChange}
        />
      </div>
      <div className="w-full py-2">
        <label htmlFor="Occupation">المهنة</label>
        <select className="bg-gray-100 px-4 py-3 my-2 border-solid border-gray-300 border-b w-full ">
          <option value="">المهنة</option>
          <option value="student">طالب</option>
          <option value="free-businees">كاسب</option>
          <option value="employee">موظف (قطاع خاص او حكومي)</option>
        </select>
      </div>
      <div className="w-full py-2">
        <label htmlFor="goverment">المحافظة</label>
        <p className=" text-Body-S">
          المحافظة الي راح تشارك بتنظيفها هذا الاسبوع (مو شرط نفسها محافظة
          السكن)
        </p>
        <select className="bg-gray-100 px-4 py-3 my-2 border-solid border-gray-300 border-b w-full ">
          <option value="">المحافظة</option>
          <option value="بغداد">بغداد</option>
          <option value="نينوى">نينوى</option>
          <option value="البصرة">البصرة</option>
          <option value="القادسية">القادسية</option>
          <option value="اربيل">اربيل</option>
          <option value="النجف">النجف</option>
          <option value="بابل">بابل</option>
          <option value="الانبار">الانبار</option>
          <option value="ذي قار">ذي قار</option>
          <option value="كركوك">كركوك</option>
          <option value="ميسان">ميسان</option>
          <option value="السليمانية">السليمانية</option>
          <option value="دهوك">دهوك</option>
          <option value="صلاح الدين">صلاح الدين</option>
          <option value="كربلاء">كربلاء</option>
          <option value="ديالى">ديالى</option>
          <option value="المثنى">المثنى</option>
          <option value="واسط">واسط</option>
        </select>
      </div>
      <div className="w-full text-center">
        <p className=" py-2 text-Subtitile-M font-bold">
          املي هذه الاستمارة حتى تحصل على الباركود الخاص بيك وتستخدمه بكل تجمعات
          سفراء النظافة.
        </p>
        <p className=" py-2 text-Subtitile-M font-bold">
          ملاحظة: اذا ما تحب تشاركنا معلوماتك، ممكن تحضر بدون ما تملي الاستمارة،
          بس ما راح تحصل على اي وحدة من مطبوعات الحملة (مثلا تيشيرت، مطارة مي،
          ميدالية، وغيرها)
        </p>
      </div>

      <Button children={"انضم الينا"} />
    </form>
  );
};

export default Form;
