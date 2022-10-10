module.exports = function(app)
{
     app.get('/hr_list', (req,res) => {
        const static_dir = '/static/'
        const chart_dir = '/chart2'

        const data = {}
        data['fname0'] = chart_dir + '/' + '월별 입사자수.png'
        data['fname1'] = chart_dir + '/' + '월별 퇴사자수.png'
        data['fname2'] = chart_dir + '/' + '월별 입사자수 .vs. 퇴사자수.png'
        data['fname3'] = chart_dir + '/' + '부서별 입사자수 .vs. 퇴사자수.png'
        data['fname4'] = chart_dir + '/' + '직급별 입사자수,퇴사자수.png'
        data['fname5'] = chart_dir + '/' + '부서별 바로 퇴사자수.png'
        data['fname6'] = chart_dir + '/' + '전체 입사자수 .vs. 퇴사자수.png'
        data['fname7'] = chart_dir + '/' + '직급별 바로 퇴사자수.png'

        res.render('hr_list.html', { data : data });
     });
}
