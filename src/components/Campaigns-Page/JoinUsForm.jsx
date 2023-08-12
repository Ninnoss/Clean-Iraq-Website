import { useState } from 'react';
import Button from '../Button';

const JoinUsForm = () => {
  const cities = [
    'بغداد',
    'نينوى',
    'البصرة',
    'القادسية',
    'اربيل',
    'النجف',
    'بابل',
    'الانبار',
    'ذي قار',
    'كركوك',
    'ميسان',
    'السليمانية',
    'دهوك',
    'صلاح الدين',
    'كربلاء',
    'ديالى',
    'المثنى',
    'واسط',
  ];

  const initialFormData = {
    name: '',
    age: '',
    number: '',
    sex: '',
    telegramId: '',
    occupation: '',
    governorate: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data:', formData);
    setFormData(initialFormData); // Clear the form fields
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-9/12 sm:w-7/12 md:w-6/12 lg:w-4/12  text-Body-L">
      <div className="w-full py-2">
        <label htmlFor="name">الاسم</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="الاسم الثلاثي"
          value={formData.name}
          onChange={handleChange}
          className="form-inputs"
        />
      </div>

      <div className="w-full py-2">
        <label htmlFor="age">العمر</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="العمر"
          min={10}
          value={formData.age}
          onChange={handleChange}
          className="form-inputs"
        />
      </div>

      <div className="w-full py-2">
        <label htmlFor="number">رقم الهاتف</label>
        <input
          type="number"
          id="number"
          name="number"
          placeholder="07xx-xxx-xxxx"
          value={formData.number}
          onChange={handleChange}
          className="form-inputs"
        />
      </div>

      <div className="w-full py-2">
        <label htmlFor="sex">الجنس</label>
        <div>
          <label className="ml-3">
            <input
              className="ml-2"
              style={{ accentColor: '#ce8116' }}
              type="radio"
              value="male"
              id="sex"
              name="sex"
              checked={formData.sex === 'male'}
              onChange={handleChange}
            />
            ذكر
          </label>
          <label className="mr-3">
            <input
              className="ml-2"
              style={{ accentColor: '#ce8116' }}
              type="radio"
              value="female"
              id="sex"
              name="sex"
              checked={formData.sex === 'female'}
              onChange={handleChange}
            />
            انثى
          </label>
        </div>
      </div>

      <div className="w-full py-2">
        <label htmlFor="telegram-id">معرف التيليگرام</label>
        <input
          type="text"
          id="telegram-id"
          name="telegramId"
          placeholder="@المعرف"
          value={formData.telegramId}
          onChange={handleChange}
          className="form-inputs"
        />
      </div>

      <div className="w-full py-2">
        <label htmlFor="occupation">المهنة</label>
        <select
          value={formData.occupation}
          onChange={handleChange}
          name="occupation"
          id="occupation"
          className="form-inputs">
          <option
            className=""
            value="">
            المهنة
          </option>
          <option
            className=""
            value="student">
            طالب
          </option>
          <option
            className=""
            value="free-businees">
            كاسب
          </option>
          <option
            className=""
            value="employee">
            موظف (قطاع خاص او حكومي)
          </option>
        </select>
      </div>

      <div className="w-full py-2">
        <label htmlFor="governorate">المحافظة</label>
        <p className=" text-Body-S">المحافظة الي راح تشارك بتنظيفها هذا الاسبوع (مو شرط نفسها محافظة السكن)</p>
        <select
          id="governorate"
          name="governorate"
          value={formData.governorate}
          onChange={handleChange}
          className="form-inputs">
          <option value="">المحافظة</option>
          {cities.map((city, index) => (
            <option
              key={index}
              value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full text-center py-6">
        <p className=" py-2 text-Subtitile-M font-bold">املي هذه الاستمارة حتى تحصل على الباركود الخاص بيك وتستخدمه بكل تجمعات سفراء النظافة.</p>
        <p className=" py-2 text-Subtitile-M">
          ملاحظة: اذا ما تحب تشاركنا معلوماتك، ممكن تحضر بدون ما تملي الاستمارة، بس ما راح تحصل على اي وحدة من مطبوعات الحملة (مثلا تيشيرت، مطارة مي، ميدالية،
          وغيرها)
        </p>
      </div>
      <Button
        role="link"
        aria-label="Join us"
        className="mt-10 block mx-auto px-3 py-1 lg:px-6 tracking-wider lg:py-2 text-Button-M font-medium">
        أنضم الينا
      </Button>
    </form>
  );
};

export default JoinUsForm;
