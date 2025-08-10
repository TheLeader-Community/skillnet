import { courses } from '@/app/data/courses'
import { CardCourse } from '../ui/CardCourse'

export default function SectionCourses() {

    return (
        <section>

            <section className=' grid md:grid-cols-2 lg:grid-cols-3 p-3 md:p-5 gap-5'>
                {
                    courses.map((el: Course, index) => (
                        <CardCourse key={index} course={el} />
                    ))
                }
                {/*  */}

            </section>
        </section>
    )
}

