const vtn = {
  intro_title: "Dữ liệu chung",
  periods: "Chu kỳ",
  period: "Giai đoạn",
  add_period: "Thêm giai đoạn",
  excel: "MS EXCEL",
  data_analysis: "Phân tích dữ liệu",
  new_period_name: "Giai đoạn mới",
  id: "ID",
  gender: "Giới tính",
  woman: "Phụ nữ",
  man: "Nam giới",
  birth_date: "Ngày sinh",
  fill_date: "Ngày điền",
  from: "Từ",
  till: "Đến",
  period_length: "Độ dài giai đoạn",
  period_years: "năm",
  period_months: "tháng",
  period_days: "ngày",
  weight: "Cân nặng (kg)",
  height: "Chiều cao (cm)",
  livingPlace: "Nơi sống",
  Riga: "Riga",
  town: "Thị trấn",
  rural: "Nông thôn",
  period_filled: "Đã điền",
  needed: "Tổng số cần thiết",
  changePeriodName: "Thay đổi tên giai đoạn",
  deletePeriod: "Xóa giai đoạn",
  workdays: "Ngày làm việc",
  weekends: "Cuối tuần",
  vacations: "Kỳ nghỉ",
  days_per_week: "Số ngày trong tuần",
  days_per_week_lowercase:"số ngày trong tuần",
  days_per_month: "Số ngày trong tháng",
  days_per_year: "Số ngày trong năm",
  weeks_per_year: "Số tuần trong năm",
  hours_per_day: "Số giờ trong ngày",
  hours_per_week: "Số giờ trong tuần",
  hours_per_month: "Số giờ trong tháng",
  minutes_per_day: "Số phút trong ngày",
  volume: "Số lượng",
  work: "Công việc",
  sleep: "Giấc ngủ",
  walk: "Đi bộ",
  sport: "Thể thao",
  self: "Chăm sóc bản thân",
  home: "Công việc gia đình",
  free: "Thời gian rảnh",
  select_period: "Chọn giai đoạn để cập nhật",
  ok: "Đồng ý",
  restore_period: "Khôi phục giai đoạn đã xóa",
  name: "Tên",
  type: "Loại ngày",
  addDayType: "Thêm loại ngày",
  changeDayTypeName: "Sửa tên loại ngày",
  deleteDayType: "Xóa loại ngày",
  weeks_in_year_from: "tuần trong năm (trên 52.18)",
  shortage: "thiếu",
  excess: "thừa",
  confirm_periodDelete: "Bạn có muốn xóa khoảng thời gian này?",
  confirm_dayTypeDelete: "Bạn có muốn xóa loại ngày này?",
  /*
  sub_adisana: "Đan len",
  sub_arkajam: "Đi bộ",
  sub_saulosanas: "Nằm nghỉ/ngắm nắng",
  sub_atputadaba: "Nghỉ dưỡng ngoài trời",
  sub_fiz_augsta: "Hoạt động thể chất mạnh, ví dụ như nhảy với dây nhảy",
  sub_brivais_augsta: "Hoạt động giải trí mạnh",
  sub_sadzive_augsta: "Hoạt động hằng ngày mạnh",
  sub_autosacikstes: "Đua xe",
  sub_autovadisana: "Lái xe ô tô",
  sub_badmintons: "Cầu lông",
  sub_basketbols: "Bóng rổ",
  sub_baznica: "Thăm nhà thờ",
  sub_biatlons: "Thể thao tổ hợp",
  sub_bmx: "Đạp xe BMX",
  sub_bokss: "Quyền Anh",
  sub_brauksanaarlaivu: "Lái thuyền",
  sub_brauksanaarvelo: "Đạp xe đạp",
  sub_brauksanapasazieris: "Đi xe như một hành khách",
  sub_burasana: "Lướt ván buồm",
  sub_bernuaprupe: "Chăm sóc trẻ em",
  sub_cina: "Võ thuật (judo, karate, kickboxing, taekwondo)",
  sub_datoralietosana: "Sử dụng máy tính / laptop",
  sub_garaza: "Các công việc khác trong nhà xe",
  sub_dejosanaballe: "Nhảy múa (tiệc tùng)",
  sub_diendusa: "Đi bộ đường dài",
  sub_dziedasana: "Hát",
  sub_uzkopsana: "Dọn dẹp nhà cửa",
  sub_darzkopiba: "Trồng trọt",
  sub_darzkopibavirs60: "Trồng trọt> 60 tuổi",
  sub_frisbijs: "Frisbee",
  sub_futbols: "Bóng đá",
  sub_galdaspeles: "Trò chơi bàn, cờ, bài",
  sub_galdateniss: "Bóng bàn",
  sub_gludinasana: "Ủi",
  sub_golfs: "Đánh gôn",
  sub_higiena: "Vệ sinh cá nhân",
  sub_hokejs: "Khúc côn cầu",
  sub_iepirksanas: "Mua sắm",
  sub_kalnuritenis: "Đạp xe địa hình",
  sub_kanoe: "Đi cào, chèo thuyền, kayak",
  sub_krikets: "Cricket",
  sub_kerlings: "Kerling",
  sub_lakross: "Lacrosse",
  sub_lasisana: "Đọc/viết",
  sub_makskeresana: "Câu cá (chung)",
  sub_mazgasanas: "Giặt giũ (đứng)",
  sub_medisana: "Săn bắn (chung)",
  sub_muzicesana: "Chơi nhạc (chung)",
  sub_majasdarbi: "Học tập làm việc nhà",
  sub_fiz_merena: "Hoạt động thể chất độ cao trung bình, chẳng hạn như tập thể dục, bowling, bóng chuyền",
  sub_muzikasinstrumenti: "Chơi nhạc cụ (chung)",
  sub_naktsmiegs: "Giấc ngủ đêm",
  sub_neformala: "Giáo dục phi chính thức",
  sub_neklasificeta: "Hoạt động thể chất cường độ thấp chưa phân loại",
  sub_orientesanas: "Thể thao định hướng",
  sub_pastaigaardzivnieku: "Đi bộ với thú cưng",
  sub_paukosana: "Quan sát chim",
  sub_peldebrass: "Bơi (Brass)",
  sub_peldekrauls: "Bơi (Krauls)",
  sub_peldesinhrona: "Bơi (Đồng bộ)",
  sub_peldeteurenis: "Bơi (Tây Ban Nha)",
  sub_peldemugura: "Bơi (Lộn ngược)",
  sub_pludmalesvolejbols: "Bóng chuyền bãi biển",
  sub_polo: "Polo",
  sub_raketbols: "Bóng rổ",
  sub_regbijs: "Môn bóng bầu dục",
  sub_rokasbumba: "Bóng tay",
  sub_sarunas: "Trò chuyện với bạn bè, người thân (tụ tập cùng nhau)",
  sub_skeitbords: "Trượt ván",
  sub_skriesanamaratons: "Chạy bộ (marathon)",
  sub_skriesanastadions: "Chạy bộ (trên sân vận động)",
  sub_skvoss: "Skvoš",
  sub_slepodistancu: "Trượt tuyết (dài)",
  sub_slepokalnu: "Trượt tuyết (trên núi)",
  sub_sportadejas: "Vũ điệu thể thao",
  sub_rinda: "Xếp hàng",
  sub_serfosana: "Lướt sóng",
  sub_televizija: "Xem truyền hình",
  sub_tenissdubultais: "Tennis (đánh đôi)",
  sub_tenissviens: "Tennis (đánh đơn)",
  sub_teatris: "Đi xem kịch/nhạc hội",
  sub_vecoaprupe: "Chăm sóc người cao tuổi",
  sub_velasmazgasana: "Giặt quần áo bằng tay",
  sub_brivais_videja: "Hoạt động tự do trung bình cường độ",
  sub_sadzive_videja: "Hoạt động sinh hoạt trung bình cường độ",
  sub_fiz_videja: "Hoạt động thể chất trung bình độ cao, ví dụ như khúc côn cầu, quần vợt, đạp xe địa hình",
  sub_vieglatletikaleksana: "Điền kinh (nhảy cao, nhảy xa, ném lao, nhảy rào)",
  sub_vieglatletikalode: "Điền kinh (ném tạ, ném đĩa, ném búa)",
  sub_vieglatletikaskersli: "Điền kinh (chạy vượt rào, chạy rào chắn)",
  sub_vindserfings: "Lướt ván buồm",
  sub_vingrosana: "Tập vũ đạo",
  sub_volejbols: "Bóng chuyền",
  sub_brivais_zema: "Hoạt động tự do thấp độ",
  sub_sadzive_zema: "Hoạt động sinh hoạt thấp độ",
  sub_zimesana: "Vẽ tranh",
  sub_atrslidosana: "Trượt tuyết",
  sub_estgatavosana: "Nấu ăn và dọn dẹp nhà bếp",
  sub_esana: "Ăn uống",
  sub_fiz_lotiaugsta: "Hoạt động thể chất rất cao, ví dụ như chạy bộ trên cầu thang",
  sub_sautrinas: "Bắn súng",
  sub_sosejasritenis: "Đạp xe đường trường",
  sub_susana: "May (máy may)",
  sub_udenspolo: "Bóng nước",
  sub_sport_1: "1. nhóm (ví dụ, bài tập tại nhà, yoga, bóng chuyền, bi-da)",
  sub_sport_2: "2. nhóm (ví dụ, chạy chậm, trượt tuyết từ trung bình đến mức độ nhẹ, nhảy dây)",
  sub_sport_3: "3. nhóm (ví dụ, thể dục nước, tập thể dục trong câu lạc bộ sức khỏe, bơi thư giãn)",
  sub_sport_4: "4. nhóm (ví dụ, đi xe đạp leo núi thi đấu, marathon)",
  sub_sport_5: "5. nhóm (ví dụ, chạy với tốc độ cao trên 18 km/h)",
  sub_free_1: "1. nhóm (ví dụ, đọc nằm nghỉ, xếp hàng đứng, ngồi)",
  sub_free_2: "2. nhóm (ví dụ, hái lá, hái trái cây, chăm sóc trẻ em)",
  sub_free_3: "3. nhóm (ví dụ, xúc tuyết, trồng cây, cắt cỏ)",
  sub_free_4: "4. nhóm (ví dụ, đi săn, chặt cây lớn bằng rìu, đào)",
  sub_free_5: "5. nhóm (ví dụ, săn thú lớn)",
  sub_work_1: "1. nhóm",
  sub_work_2: "2. nhóm",
  sub_work_3: "3. nhóm",
  sub_work_4: "4. nhóm",
  sub_work_5: "5. nhóm",
  cluster_1: "1. nhóm",
  cluster_2: "2. nhóm",
  cluster_3: "3. nhóm",
  cluster_4: "4. nhóm",
  cluster_5: "5. nhóm",
  */
  sub_free_000: "May, sửa chữa và bảo dưỡng vải",
  sub_free_001: "Xây dựng và sửa chữa đồ gỗ",
  sub_free_002: "Làm vườn, làm cảnh và chăm sóc cây cảnh trong nhà",
  sub_free_003: "Sửa chữa và bảo dưỡng phương tiện (tự thực hiện)",
  sub_free_004: "Chăm sóc và giúp đỡ trẻ em trong gia đình",
  sub_free_005: "Giáo dục",
  sub_free_006: "Mua sắm tiêu dùng",
  sub_free_007: "Sử dụng dịch vụ y tế",
  sub_free_008: "Sử dụng dịch vụ bảo trì, sửa chữa, trang trí, xây dựng tại nhà",
  sub_free_009: "Nghĩa vụ và tham gia công dân",
  sub_free_010: "Giao tiếp và giao tiếp với người khác",
  sub_free_011: "Thư giãn, suy nghĩ",
  sub_free_012: "Sử dụng thuốc lá và chất kích thích",
  sub_free_013: "Xem TV và phim (không phải tôn giáo)",
  sub_free_014: "Nghe radio",
  sub_free_015: "Nghe/phát nhạc (không phải radio)",
  sub_free_016: "Chơi trò chơi",
  sub_free_017: "Sử dụng máy tính giải trí (ngoại trừ trò chơi)",
  sub_free_018: "Nghệ thuật và nghệ thuật thủ công làm sở thích",
  sub_free_019: "Sưu tập như một sở thích",
  sub_free_020: "Sở thích, trừ nghệ thuật và thủ công và sưu tập",
  sub_free_021: "Đọc vì quan tâm cá nhân",
  sub_free_022: "Viết vì quan tâm cá nhân",
  sub_free_023: "Thư giãn và giải trí, khác, 1",
  sub_free_024: "Tham gia nghệ thuật biểu diễn",
  sub_free_025: "Tham gia viện bảo tàng",
  sub_free_026: "Tham gia xem phim",
  sub_free_027: "Tham gia các cơ sở đánh bạc",
  sub_free_028: "Giao tiếp, thư giãn và giải trí, khác",
  sub_free_029: "Nhảy múa",
  sub_free_030: "Đánh cá",
  sub_free_031: "Đi bộ đường dài",
  sub_free_032: "Săn bắn",
  sub_free_033: "Trượt patin",
  sub_free_034: "Tham gia sự kiện thể thao, khác",
  sub_free_035: "Tham gia các dịch vụ tôn giáo",
  sub_free_036: "Hoạt động tôn giáo và tâm linh, khác",
  sub_free_037: "Hoạt động tình nguyện",
  sub_free_038: "Đi bộ, đi bộ trong nhà",
  sub_free_039: "Đi bộ, 3.2 km/h, phẳng, bước chậm, bề mặt cứng",
  sub_free_040: "Thư giãn và giải trí, khác, 2",
  sub_free_041: "Thư giãn và giải trí, khác, 3",
  sub_sleep_000: "Ngủ",
  sub_work_000:"Quản lý (giám đốc, quản lý, giám sát)",
  sub_work_001:"Kinh doanh và Tài chính (kế toán, nhà phân tích kinh doanh, chuyên viên tài chính)",
  sub_work_002:"Công nghệ thông tin và Toán học (lập trình viên, nhà thiết kế web, nhà phân tích phần mềm)",
  sub_work_003:"Kiến trúc và Kỹ thuật (kiến trúc sư, kỹ sư)",
  sub_work_004:"Khoa học về đời sống, vật lý và xã hội (nhà sử học, nhà địa chất học, nhà tâm lý học, nhà nhân loại học)",
  sub_work_005:"Dịch vụ Cộng đồng và Xã hội (công nhân xã hội, nhân viên y tế công cộng)",
  sub_work_006:"Pháp lý (luật sư, thẩm phán)",
  sub_work_007:"Giáo dục, Đào tạo và Thư viện (giáo viên, thủ thư)",
  sub_work_008:"Nghệ thuật, Thiết kế, Giải trí, Thể thao, Truyền thông (nhà thiết kế nội thất, nhà vườn, nhà thiết kế thời trang, diễn viên, nhạc sĩ, nhà sản xuất, huấn luyện viên, nhiếp ảnh gia, chuyên viên quan hệ công chúng)",
  sub_work_009:"Nhân viên Y tế và Kỹ thuật (bác sĩ, nha sĩ, thợ nói chuyện, bác sĩ phẫu thuật)",
  sub_work_010:"Hỗ trợ Y tế",
  sub_work_011:"Dịch vụ Bảo vệ (lính cứu hỏa, cảnh sát viên)",
  sub_work_012:"Chế biến Thực phẩm và Dịch vụ Liên quan (đầu bếp, người phục vụ, người chờ bàn)",
  sub_work_013:"Vệ sinh và Bảo dưỡng Công trình và Đất đai (người gác cổng và người bảo dưỡng công trình, công nhân kiểm soát côn trùng)",
  sub_work_014:"Chăm sóc Cá nhân và Dịch vụ (thợ làm tóc, thẩm mỹ viên)",
  sub_work_015:"Bán hàng và Các nghề liên quan (thu ngân, người mẫu, nhân viên bảo hiểm)",
  sub_work_016:"Hỗ trợ Văn phòng và Hành chính (thư ký, nhân viên dịch vụ khách hàng)",
  sub_work_017:"Nông nghiệp, Đánh bắt cá và Lâm nghiệp (công nhân bảo vệ rừng và thiên nhiên, người đánh cá, công nhân nông nghiệp)",
  sub_work_018:"Xây dựng và Khai thác (thợ mộc, kiểm tra viên công trình, công nhân cách nhiệt, người lắp đặt trần, tường, sàn)",
  sub_work_019:"Lắp đặt, Bảo dưỡng và Sửa chữa (thợ và kỹ thuật viên dịch vụ ô tô, người lắp đặt và sửa chữa điện và điện tử, công nhân bảo dưỡng và sửa chữa chung)",
  sub_work_020:"Sản xuất (công nhân chế biến thực phẩm, công nhân máy kim loại và nhựa)",
  sub_work_021:"Vận tải và Vận chuyển Vật liệu (tài xế xe buýt, nhân viên điều hành, tài xế taxi)",
  sub_self_000: "Tự rửa, tự mặc và tự chải tóc",
  sub_self_001: "Ăn uống và uống",
  sub_walk_000: "Đi bộ làm việc, 4.8 km/h, trong văn phòng, tốc độ trung bình, không mang gì cả",
  sub_walk_001: "Đi bộ từ nhà đến xe hoặc xe bus, từ xe hoặc xe bus để đi đến nơi, từ xe hoặc xe bus đến nơi làm việc và ngược lại",
  sub_walk_002: "Lái xe ô tô hoặc xe tải nhẹ (không phải xe tải)",
  sub_walk_003: "Điều khiển trong ô tô hoặc xe tải",
  sub_walk_004: "Đi xe đạp, <16 km/h, giải trí, đi làm hoặc để thưởng thức",
  sub_home_000: "Lau chùi bên trong",
  sub_home_001: "Việc nhà, khác, 1",
  sub_home_002: "Chuẩn bị thức ăn và đồ uống",
  sub_home_003: "Lau chùi bếp và dọn dẹp đồ ăn",
  sub_home_004: "Bảo dưỡng bên trong, sửa chữa và trang trí, khác",
  sub_home_005: "Bảo dưỡng bên ngoài, sửa chữa và trang trí",
  sub_home_006: "Chăm sóc thú cưng và động vật, khác",
  sub_home_007: "Chăm sóc vật lý cho trẻ em trong gia đình",
  sub_home_008: "Chăm sóc vật lý cho người lớn trong gia đình",
  sub_home_009: "Chăm sóc và giúp đỡ những người không phải thành viên trong gia đình, khác",
  sub_home_010: "Sử dụng dịch vụ thú y",
  sub_home_011: "Việc nhà, khác, 2",
  sub_home_012: "Việc nhà, khác, 3",
  sub_sport_000: "Tập thể dục",
  sub_sport_001: "Chơi bóng chày",
  sub_sport_002: "Chơi bóng rổ",
  sub_sport_003: "Đi xe đạp",
  sub_sport_004: "Chơi bi-a",
  sub_sport_005: "Đi thuyền",
  sub_sport_006: "Bowling",
  sub_sport_007: "Leo núi, thám hiểm hang động",
  sub_sport_008: "Tham gia các môn thể thao ngựa",
  sub_sport_009: "Fencing",
  sub_sport_010: "Chơi bóng đá",
  sub_sport_011: "Chơi golf",
  sub_sport_012: "Tập thể dục",
  sub_sport_013: "Chơi khúc côn cầu",
  sub_sport_014: "Tham gia võ thuật",
  sub_sport_015: "Chơi các môn thể thao bóng vợt",
  sub_sport_016: "Tham gia cuộc thi rodeo",
  sub_sport_017: "Chơi rugby",
  sub_sport_018: "Chạy",
  sub_sport_019: "Trượt tuyết, trượt băng, đua xe trượt tuyết",
  sub_sport_020: "Chơi bóng đá",
  sub_sport_021: "Softball",
  sub_sport_022: "Du lịch đua/đua xe",
  sub_sport_023: "Chơi bóng chuyền",
  sub_sport_024: "Đi bộ",
  sub_sport_025: "Tham gia các môn thể thao dưới nước",
  sub_sport_026: "Nâng tạ/tập luyện sức mạnh",
  sub_sport_027: "Tập luyện, không xác định",
  sub_sport_028: "Đấu vật",
  sub_sport_029: "Tập yoga",
  sub_sport_030: "Chơi thể thao, khác, 1",
  sub_sport_031: "Thể thao, tập luyện và giải trí, khác, 1",
  sub_sport_032: "Thể thao, tập luyện và giải trí, khác, 2",
  sub_sport_033: "Thể thao, tập luyện và giải trí, khác, 3",
  sub_sport_034: "Chơi thể thao, khác, 2",
  sub_sport_035: "Chơi thể thao, khác, 3",
  comment: "Bình luận",
  from_these_filled: ", trong số đó đã được điền",
  total_in_period: "Tổng trong khoảng thời gian",
  hours_per_day_lowercase: "giờ mỗi ngày",
  subcategory: "Tiểu mục",
  hint: "Gợi ý",
  loadExcel: "Tải từ MS Excel",
  generateExcel: "Lưu dưới dạng MS Excel",
  generateReview: "Tạo báo cáo",
  weight_plain: "Cân nặng",
  height_plain: "Chiều cao",
  duration: "Thời lượng",
  days_per_week_short: "Số ngày trong tuần",
  days_per_month_short: "Số ngày trong tháng",
  days_per_year_short: "Số ngày trong năm",
  weeks_per_year_short: "Số tuần trong năm",
  hours_per_day_short: "Số giờ trong ngày",
  hours_per_week_short: "Số giờ trong tuần",
  hours_per_month_short: "Số giờ trong tháng",
  minutes_per_day_short: "Số phút trong ngày",
  activity: "Hoạt động",
  subActivity: "Hoạt động phụ",
  calories: "Calo",
  total: "Tổng",
  days_uppercase: "Ngày",
  day_type_nr: "Số loại ngày",
  harris_benedict: "Revised Harris-Benedict (1984) phương trình",
  mifflin: "Mifflin St Jeor (1990) phương trình",
  analyze: "Phân tích",
  cals_per_week: "Calo trong tuần",
  mets_per_week: "METs trong tuần",
  recalculate: "Tính lại",
  append_interval: "Thêm khoảng thời gian",
  statistics: "Thống kê",
  deleteInterval: "Xóa khoảng thời gian",
  deleteSubcategory: "Xóa phụ loại",
  default: "(mặc định)",
  duplicateSubcategory: "Nhân đôi tiểu mục sang loại ngày tiếp theo",
  about:"Về chương trình",
  selfEval: "Tự đánh giá hoạt động thể chất"
};

const aboutText_vtn=`
<h1>Chương trình "Bộ máy tính Hoạt động suốt đời"</h1>
<h2>Phiên bản v4.1</h2>
<ol>
<li>Nếu khi đọc dữ liệu từ Excel, gặp một danh mục con không tồn tại trong phiên bản công cụ này, tên của nó sẽ được đặt trong dấu ngoặc vuông để làm rõ.</li>
</ol>
<h2>Phiên bản v4</h2>
<ol>
<li>Bốn phân loại con đã được nhân ba:</li>
  <ol style="list-style-type: lower-alpha; padding-bottom: 0;">
    <li>Thư giãn và giải trí, n.e.c.</li>
    <li>Công việc nhà, n.e.c.</li>
    <li>Thể thao, tập thể dục và giải trí, n.e.c.</li>
    <li>Chơi thể thao, n.e.c.</li>
  </ol>
<li>Đã tạo ra một phiên bản đơn giản hóa của việc triển khai công cụ - hiện nó có sẵn trong chế độ kiểm tra tại https://theoreman.github.io/CalcReloaded</li>
</ol>
<h2>Phiên bản v3.1</h2>
<ol>
<li>Đối với tất cả các phân loại công việc, ví dụ về các nghề nghiệp cụ thể được đặt trong dấu ngoặc đơn.</li>
<li>Từ "khác" đã bị xóa khỏi tiêu đề của một số danh mục phụ về thời gian rảnh rỗi và hộ gia đình.</li>
<li>Nó được thiết kế sao cho nút "Về chương trình" luôn ở góc dưới bên phải khi cuộn màn hình.</li>
</ol>
<h2>Phiên bản v3.0</h2>
<ol>
  <li>Thêm một nút "Về chương trình" nơi bạn có thể xem tất cả các thay đổi phiên bản lịch sử.</li>
  <li>Thể loại con mới được giới thiệu cho tất cả các danh mục.</li>
  <li>Thêm hỗ trợ ngôn ngữ Ukraina.</li>
  <li>Sửa lỗi trong quá trình nhập từ MS Excel: đơn vị của siêu danh mục không được thay đổi thành "Giờ mỗi ngày".</li>
  <li>Sửa lỗi khi xóa các danh mục con: khi xóa danh mục con cuối cùng, các trường nhập liệu của danh mục cha không được kích hoạt lại.</li>
</ol>
<h2>Phiên bản v2.0</h2>
<ol>
  <li>Cải thiện giao diện của nút và các ô nhập liệu.</li>
  <li>Phương trình Mifflin St Jeor được đặt làm mặc định, và từ "mặc định" được thêm vào trong dấu ngoặc đơn.</li>
  <li>Thêm tùy chọn sao chép các mục con cho loại ngày tiếp theo bằng cách nhấp vào biểu tượng có mũi tên màu xanh. Trong trường hợp này, mục con trong loại ngày tiếp theo được làm nổi bật màu đỏ để dễ dàng nhận biết rằng nó đã được thêm tự động và có thể cần chú ý để sửa lỗi.</li>
  <li>Thêm kiểm tra để đảm bảo rằng nhiều mục con cùng tên không được thêm vào một loại (thủ công hoặc bằng cách sao chép [xem điểm 3]).</li>
  <li>Thêm một ô nhập liệu mới "Tự đánh giá hoạt động thể chất" cho mỗi khoảng thời gian, cũng được xuất ra Excel và nhập lại vào công cụ.</li>
</ol>
<h2>Phiên bản v1.0</h2>
<ol>
  <li>Thiết kế mới với tất cả mọi thứ ở một nơi.</li>
  <li>Hỗ trợ đa ngôn ngữ.</li>
  <li>Tổ chức lại cấu trúc của các danh mục và mục con - hiện tại mỗi loại ngày có thể có bộ danh mục riêng, và mỗi danh mục có thể có bộ mục con riêng.</li>
  <li>Có khả năng xóa các khoảng thời gian và khôi phục lại những khoảng thời gian đã xóa.</li>
  <li>Có khả năng thêm và xóa các loại ngày (ngày làm việc và ngày nghỉ).</li>
  <li>Có khả năng xóa các mục con.</li>
  <li>Tái thiết kế phần phân tích dữ liệu để thuận tiện hơn trong việc tính toán lại (tự động), thực hiện nhiều hành động - mở phần này, nhấn nút "Tính toán lại", thay đổi phương trình hoặc loại giá trị, vv.</li>
  <li>Trong phần phân tích dữ liệu, thêm khả năng tạo ra các khoảng thời gian tùy ý, được lưu lại ngay cả khi tính toán lại dữ liệu. Cũng thêm tùy chọn xóa các khoảng thời gian đã tạo.</li>
  <li>Các khoảng thời gian phân tích dữ liệu tạo ra trong bảng xuất ra Excel sẽ được xuất cùng với tất cả dữ liệu khoảng thời gian.</li>
  <li>Việc nhập Excel chỉ hoạt động cho các tệp xuất khẩu với phiên bản mới này CalcReloaded v1.0. Có thể sau này chúng tôi sẽ thực hiện (nếu cần thiết) nhập khẩu cho các tệp cũ cũng.</li>
  <li>Lưu ý quan trọng - khi nhập một tệp Excel (nút "Tải từ MS Excel"), máy tính phải được đặt vào cùng ngôn ngữ như ngôn ngữ được sử dụng để xuất tệp đã nhập (sau khi nhập, tất nhiên, ngôn ngữ có thể thay đổi tự do).</li>
</ol>
<br>
`
