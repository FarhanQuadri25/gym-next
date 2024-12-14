import styles from "./style.module.scss";

export default function Index() {
  return (
    <section id="about" className="min-h-screen mt-[20rem]">
      <h1 className="text-4xl text-center font-general font-bold p-[30px] text-indigo-700">
        About Us
      </h1>
      <div className="flex justify-center min-h-screen items-center">
        <div className={styles.container}>
          <div className={`${styles.topLeft} text-white`}>
            <p className="font-general font-bold text-justify lg:text-2xl">
              نحن مركز أبطال الغربية نهتم بالرياضة بشكل عام. نريد أن يتمتع
              المشتركون بجسم رشيق ومظهر جذاب، وأن يحصلوا على بعض الراحة من
              القلق. نحن في المركز نعمل على إعادة تحسين الصحة العامة واللياقة
              البدنية والعقلية. ونساعد أيضًا في التخلص من التوتر والتعب وتحسين
              النوم وبناء الثقة بالنفس والشعور بالسعادة.
            </p>
          </div>
          <div className={`${styles.bottomRight} text-white`}>
            <p className="font-general font-bold text-justify lg:text-2xl">
              We are the Western Champions Center, which cares about sports in
              general. We want our members to have a fit body and an attractive
              appearance, and to get some relief from anxiety. At the center, we
              work to improve overall health, physical and mental fitness. We
              also help in getting rid of stress and fatigue, improving sleep,
              building self-confidence and feeling happy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
