////HOVER
$("[data-link]").on('mouseover', function() {
    var id = $(this).attr('data-link');
    var box = $(`[data-box=${id}]`).css('visibility', 'visible');
});
$("[data-link]").on('mouseout', function() {
    var id = $(this).attr('data-link');
    var box = $(`[data-box=${id}]`).css('visibility', 'hidden');
});

$("[data-link]").on('mouseover', function() {
    var id = $(this).attr('data-link');
    var box = $(`[data-box=${id}]`).css('display', 'block');
});
$("[data-link]").on('mouseout', function() {
    var id = $(this).attr('data-link');
    var box = $(`[data-box=${id}]`).css('display', 'none');
});




////SEASONS

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;

if (dd<=10) {
    dd='0'+dd
}

if (mm<10){
    mm='0'+mm
}



if(mm==2 && (dd>=4 && dd<=17)){
    document.documentElement.style.setProperty("--highlight", "var(--risshun");
    document.getElementById("season").innerHTML = '立春';
    document.getElementById("s-japanese").innerHTML = 'risshun';
    document.getElementById("s-korean").innerHTML = 'ipchun';
    document.getElementById("s-meaning").innerHTML = 'start of spring';
    document.getElementById("s-motif").innerHTML = 'plum blossoms';
    document.getElementById("s-next").innerHTML = 'february 18';

    document.getElementById("before").innerHTML = '大寒';
    document.getElementById("before").style.background = 'var(--daikan)';
    document.getElementById("now").innerHTML = '立春';
    document.getElementById("now").style.background = 'var(--risshun)';
    document.getElementById("next").innerHTML = '雨水';
    document.getElementById("next").style.background = 'var(--usui)';
}

if(mm==2 && (dd>=18) || mm==3 && (dd<=5)){
    document.documentElement.style.setProperty("--highlight", "var(--usui");
    document.getElementById("season").innerHTML = '雨水';
    document.getElementById("s-japanese").innerHTML = 'usui';
    document.getElementById("s-korean").innerHTML = 'usu';
    document.getElementById("s-meaning").innerHTML = 'rain water';
    document.getElementById("s-motif").innerHTML = 'spring showers';
    document.getElementById("s-next").innerHTML = 'march 6';

    document.getElementById("before").innerHTML = '立春';
    document.getElementById("before").style.background = 'var(--shosho)';
    document.getElementById("now").innerHTML = '雨水';
    document.getElementById("now").style.background = 'var(--hakuro)';
    document.getElementById("next").innerHTML = '啓蟄';
    document.getElementById("next").style.background = 'var(--keichitsu)';
}


if(mm==3 && (dd>=6 && dd<=20)){
    document.documentElement.style.setProperty("--highlight", "var(--risshun");
    document.getElementById("season").innerHTML = '啓蟄';
    document.getElementById("s-japanese").innerHTML = 'keichitsu';
    document.getElementById("s-korean").innerHTML = 'ipchun';
    document.getElementById("s-meaning").innerHTML = 'beginning of spring';
    document.getElementById("s-motif").innerHTML = 'plum blossoms';
    document.getElementById("s-next").innerHTML = 'march 21';
    /*finish names and before and after*/
}

if(mm==3 && (dd>=21) || mm==4 && (dd<=3)){
    document.documentElement.style.setProperty("--highlight", "var(--usui");
    document.getElementById("season").innerHTML = '春分';
    document.getElementById("s-japanese").innerHTML = 'usui';
    document.getElementById("s-korean").innerHTML = 'usu';
    document.getElementById("s-meaning").innerHTML = 'rain water';
    document.getElementById("s-motif").innerHTML = 'spring showers';
    document.getElementById("s-next").innerHTML = 'april 4';
}

if(mm==4 && (dd>=4 && dd<=20)){
    document.documentElement.style.setProperty("--highlight", "var(--risshun");
    document.getElementById("season").innerHTML = '清明';
    document.getElementById("s-japanese").innerHTML = 'risshun';
    document.getElementById("s-korean").innerHTML = 'ipchun';
    document.getElementById("s-meaning").innerHTML = 'beginning of spring';
    document.getElementById("s-motif").innerHTML = 'plum blossoms';
}

if(mm==4 && (dd>=21) || mm==5 && (dd<=5)){
    document.documentElement.style.setProperty("--highlight", "var(--usui");
    document.getElementById("season").innerHTML = '穀雨';
    document.getElementById("s-japanese").innerHTML = 'usui';
    document.getElementById("s-korean").innerHTML = 'usu';
    document.getElementById("s-meaning").innerHTML = 'rain water';
    document.getElementById("s-motif").innerHTML = 'spring showers';
    document.getElementById("s-next").innerHTML = 'may 5';
}

if(mm==5 && (dd>=6 && dd<=20)){
    document.documentElement.style.setProperty("--highlight", "var(--risshun");
    document.getElementById("season").innerHTML = '立夏';
    document.getElementById("s-japanese").innerHTML = 'risshun';
    document.getElementById("s-korean").innerHTML = 'ipchun';
    document.getElementById("s-meaning").innerHTML = 'beginning of spring';
    document.getElementById("s-motif").innerHTML = 'plum blossoms';
    document.getElementById("s-next").innerHTML = 'may 21';
}

if(mm==5 && (dd>=21) || mm==6 && (dd<=5)){
    document.documentElement.style.setProperty("--highlight", "var(--shouman");
    document.getElementById("season").innerHTML = '小満';
    document.getElementById("s-japanese").innerHTML = 'shouman';
    document.getElementById("s-korean").innerHTML = 'soman';
    document.getElementById("s-meaning").innerHTML = 'grain buds';
    document.getElementById("s-motif").innerHTML = 'sprouting rice';
    document.getElementById("s-next").innerHTML = 'june 6';
}

if(mm==6 && (dd>=6 && dd<=20)){
    document.documentElement.style.setProperty("--highlight", "var(--boushu");
    document.getElementById("season").innerHTML = '芒種';
    document.getElementById("s-japanese").innerHTML = 'boushu';
    document.getElementById("s-korean").innerHTML = 'mangjong';
    document.getElementById("s-meaning").innerHTML = 'grain in ear';
    document.getElementById("s-motif").innerHTML = 'drying rice husks';
    document.getElementById("s-next").innerHTML = 'june 21';

    document.getElementById("before").innerHTML = '小満';
    document.getElementById("before").style.background = 'var(--shouman)';
    document.getElementById("now").innerHTML = '芒種';
    document.getElementById("now").style.background = 'var(--boushu)';
    document.getElementById("next").innerHTML = '夏至';
    document.getElementById("next").style.background = 'var(--geshi)';
}

if(mm==6 && (dd>=21) || mm==7 && (dd<=6)){
    document.documentElement.style.setProperty("--highlight", "var(--geshi");
    document.getElementById("season").innerHTML = '夏至';
    document.getElementById("s-japanese").innerHTML = 'geshi';
    document.getElementById("s-korean").innerHTML = 'haji';
    document.getElementById("s-meaning").innerHTML = 'summer solstice';
    document.getElementById("s-motif").innerHTML = 'summer foliage';
    document.getElementById("s-next").innerHTML = 'july 7';

    document.getElementById("before").innerHTML = '芒種';
    document.getElementById("before").style.background = 'var(--boushu)';
    document.getElementById("now").innerHTML = '夏至';
    document.getElementById("now").style.background = 'var(--geshi)';
    document.getElementById("next").innerHTML = '小暑';
    document.getElementById("next").style.background = 'var(--shousho)';
    
}

if(mm==7 && (dd>=7 && dd<=22)){
    document.documentElement.style.setProperty("--highlight", "var(--shousho");
    document.getElementById("season").innerHTML = '小暑';
    document.getElementById("s-japanese").innerHTML = 'shousho';
    document.getElementById("s-korean").innerHTML = 'soseo';
    document.getElementById("s-meaning").innerHTML = 'minor heat';
    document.getElementById("s-motif").innerHTML = 'a swelling sun';
    document.getElementById("s-next").innerHTML = 'july 23';

    document.getElementById("before").innerHTML = '夏至';
    document.getElementById("before").style.background = 'var(--geshi)';
    document.getElementById("now").innerHTML = '小暑';
    document.getElementById("now").style.background = 'var(--shousho)';
    document.getElementById("next").innerHTML = '大暑';
    document.getElementById("next").style.background = 'var(--taisho)';
}

if(mm==7 && (dd>=23) || mm==8 && (dd<=7)){
    document.documentElement.style.setProperty("--highlight", "var(--taisho");
    document.getElementById("season").innerHTML = '大暑';
    document.getElementById("s-japanese").innerHTML = 'taisho';
    document.getElementById("s-korean").innerHTML = 'daeseo';
    document.getElementById("s-meaning").innerHTML = 'great heat';
    document.getElementById("s-motif").innerHTML = 'burning red sun';
    document.getElementById("s-next").innerHTML = 'august 8';

    document.getElementById("before").innerHTML = '小暑';
    document.getElementById("before").style.background = 'var(--shousho)';
    document.getElementById("now").innerHTML = '大暑';
    document.getElementById("now").style.background = 'var(--taisho)';
    document.getElementById("next").innerHTML = '立秋';
    document.getElementById("next").style.background = 'var(--risshuu)';
}

if(mm==8 && (dd>=8 && dd<=22)){
    document.documentElement.style.setProperty("--highlight", "var(--risshuu");
    document.getElementById("season").innerHTML = '立秋';
    document.getElementById("s-japanese").innerHTML = 'risshuu';
    document.getElementById("s-korean").innerHTML = 'ipchu';
    document.getElementById("s-meaning").innerHTML = 'start of autumn';
    document.getElementById("s-motif").innerHTML = 'dulling foliage';
    document.getElementById("s-next").innerHTML = 'august 23';

    document.getElementById("before").innerHTML = '大暑';
    document.getElementById("before").style.background = 'var(--taisho)';
    document.getElementById("now").innerHTML = '立秋';
    document.getElementById("now").style.background = 'var(--risshuu)';
    document.getElementById("next").innerHTML = '処暑';
    document.getElementById("next").style.background = 'var(--shosho)';
}

if(mm==8 && (dd>=23) || mm==9 && (dd<=7)){
    document.documentElement.style.setProperty("--highlight", "var(--shosho");
    document.getElementById("season").innerHTML = '処暑';
    document.getElementById("s-japanese").innerHTML = 'shosho';
    document.getElementById("s-korean").innerHTML = 'cheoseo';
    document.getElementById("s-meaning").innerHTML = 'fading heat';
    document.getElementById("s-motif").innerHTML = 'a tired sun';
    document.getElementById("s-next").innerHTML = 'september 8';

    document.getElementById("before").innerHTML = '立秋';
    document.getElementById("before").style.background = 'var(--risshuu)';
    document.getElementById("now").innerHTML = '処暑';
    document.getElementById("now").style.background = 'var(--shosho)';
    document.getElementById("next").innerHTML = '白露';
    document.getElementById("next").style.background = 'var(--hakuro)';
}

if(mm==9 && (dd>=8 && dd<=22)){
    document.documentElement.style.setProperty("--highlight", "var(--hakuro");
    document.getElementById("season").innerHTML = '白露';
    document.getElementById("s-japanese").innerHTML = 'hakuro';
    document.getElementById("s-korean").innerHTML = 'baengno';
    document.getElementById("s-meaning").innerHTML = 'white dew';
    document.getElementById("s-motif").innerHTML = 'the harvest moon';
    document.getElementById("s-next").innerHTML = 'september 23';

    document.getElementById("before").innerHTML = '処暑';
    document.getElementById("before").style.background = 'var(--shosho)';
    document.getElementById("now").innerHTML = '白露';
    document.getElementById("now").style.background = 'var(--hakuro)';
    document.getElementById("next").innerHTML = '秋分';
    document.getElementById("next").style.background = 'var(--shuubun)';
}

if(mm==9 && (dd>=23) || mm==10 && (dd<=7)){
    document.documentElement.style.setProperty("--highlight", "var(--shuubun");
    document.getElementById("season").innerHTML = '秋分';
    document.getElementById("s-japanese").innerHTML = 'shuubun';
    document.getElementById("s-korean").innerHTML = 'chubun';
    document.getElementById("s-meaning").innerHTML = 'autumn equinox';
    document.getElementById("s-motif").innerHTML = 'the leaves turn';
    document.getElementById("s-next").innerHTML = 'october 8';

    document.getElementById("before").innerHTML = '白露';
    document.getElementById("before").style.background = 'var(--hakuro)';
    document.getElementById("now").innerHTML = '秋分';
    document.getElementById("now").style.background = 'var(--shuubun)';
    document.getElementById("next").innerHTML = '寒露';
    document.getElementById("next").style.background = 'var(--kanro)';
}

if(mm==10 && (dd>=8 && dd<=22)){
    document.documentElement.style.setProperty("--highlight", "var(--kanro");
    document.getElementById("season").innerHTML = '寒露';
    document.getElementById("s-japanese").innerHTML = 'kanro';
    document.getElementById("s-korean").innerHTML = 'hallo';
    document.getElementById("s-meaning").innerHTML = 'cold dew';
    document.getElementById("s-motif").innerHTML = 'dew on leaves';
    document.getElementById("s-next").innerHTML = 'october 22';

    document.getElementById("before").innerHTML = '秋分';
    document.getElementById("before").style.background = 'var(--shuubun)';
    document.getElementById("now").innerHTML = '寒露';
    document.getElementById("now").style.background = 'var(--kanro)';
    document.getElementById("next").innerHTML = '霜降';
    document.getElementById("next").style.background = 'var(--soukou)';
}

if(mm==10 && (dd>=22) || mm==11 && (dd<=6)){
    document.documentElement.style.setProperty("--highlight", "var(--soukou");
    document.getElementById("season").innerHTML = '霜降';
    document.getElementById("s-japanese").innerHTML = 'soukou';
    document.getElementById("s-korean").innerHTML = 'sanggang';
    document.getElementById("s-meaning").innerHTML = 'frost descends';
    document.getElementById("s-motif").innerHTML = 'ripe persimmons';
    document.getElementById("s-next").innerHTML = 'november 11';

    document.getElementById("before").innerHTML = '寒露';
    document.getElementById("before").style.background = 'var(--kanro)';
    document.getElementById("now").innerHTML = '霜降';
    document.getElementById("now").style.background = 'var(--soukou)';
    document.getElementById("next").innerHTML = '立冬';
    document.getElementById("next").style.background = 'var(--rittou)';
}

if(mm==11 && (dd>=7 && dd<=21)){
    document.documentElement.style.setProperty("--highlight", "var(--rittou");
    document.getElementById("season").innerHTML = '立冬';
    document.getElementById("s-japanese").innerHTML = 'rittou';
    document.getElementById("s-korean").innerHTML = 'ipdong';
    document.getElementById("s-meaning").innerHTML = 'start of winter';
    document.getElementById("s-motif").innerHTML = 'camelias bloom';
    document.getElementById("s-next").innerHTML = 'november 22';

    document.getElementById("before").innerHTML = '霜降';
    document.getElementById("before").style.background = 'var(--soukou)';
    document.getElementById("now").innerHTML = '立冬';
    document.getElementById("now").style.background = 'var(--rittou)';
    document.getElementById("next").innerHTML = '小雪';
    document.getElementById("next").style.background = 'var(--shousetsu)';
}

if(mm==11 && (dd>=22) || mm==12 && (dd<=6)){
    document.documentElement.style.setProperty("--highlight", "var(--shousetsu");
    document.getElementById("season").innerHTML = '小雪';
    document.getElementById("s-japanese").innerHTML = 'shousetsu';
    document.getElementById("s-korean").innerHTML = 'soseol';
    document.getElementById("s-meaning").innerHTML = 'light snow';
    document.getElementById("s-motif").innerHTML = 'ripening oranges';
    document.getElementById("s-next").innerHTML = 'december 6';

    document.getElementById("before").innerHTML = '立冬';
    document.getElementById("before").style.background = 'var(--rittou)';
    document.getElementById("now").innerHTML = '小雪';
    document.getElementById("now").style.background = 'var(--shousetsu)';
    document.getElementById("next").innerHTML = '大雪';
    document.getElementById("next").style.background = 'var(--taisetsu)';
}

if(mm==12 && (dd>=6 && dd<=21)){
    document.documentElement.style.setProperty("--highlight", "var(--taisetsu");
    document.getElementById("season").innerHTML = '大雪';
    document.getElementById("s-japanese").innerHTML = 'taisetsu';
    document.getElementById("s-korean").innerHTML = 'daeseol';
    document.getElementById("s-meaning").innerHTML = 'heavy snow';
    document.getElementById("s-motif").innerHTML = 'snow falls';
    document.getElementById("s-next").innerHTML = 'december 22';

    document.getElementById("before").innerHTML = '小雪';
    document.getElementById("before").style.background = 'var(--shousetsu)';
    document.getElementById("now").innerHTML = '大雪';
    document.getElementById("now").style.background = 'var(--taisetsu)';
    document.getElementById("next").innerHTML = '冬至';
    document.getElementById("next").style.background = 'var(--touji)';
}

if(mm==12 && (dd>=22) || mm==1 && (dd<=5)){
    document.documentElement.style.setProperty("--highlight", "var(--touji");
    document.getElementById("season").innerHTML = '冬至';
    document.getElementById("s-japanese").innerHTML = 'touji';
    document.getElementById("s-korean").innerHTML = 'dongji';
    document.getElementById("s-meaning").innerHTML = 'winter solstice';
    document.getElementById("s-motif").innerHTML = 'ripening yuzu';
    document.getElementById("s-next").innerHTML = 'january 6';

    document.getElementById("before").innerHTML = '大雪';
    document.getElementById("before").style.background = 'var(--taisetsu)';
    document.getElementById("now").innerHTML = '冬至';
    document.getElementById("now").style.background = 'var(--touji)';
    document.getElementById("next").innerHTML = '小寒';
    document.getElementById("next").style.background = 'var(--shoukan)';
}

if(mm==1 && (dd>=6 && dd<=19)){
    document.documentElement.style.setProperty("--highlight", "var(--shoukan");
    document.getElementById("season").innerHTML = '小寒';
    document.getElementById("s-japanese").innerHTML = 'shoukan';
    document.getElementById("s-korean").innerHTML = 'sohan';
    document.getElementById("s-meaning").innerHTML = 'minor cold';
    document.getElementById("s-motif").innerHTML = 'the face of a pheasant';
    document.getElementById("s-next").innerHTML = 'january 21';

    document.getElementById("before").innerHTML = '冬至';
    document.getElementById("before").style.background = 'var(--touji)';
    document.getElementById("now").innerHTML = '小寒';
    document.getElementById("now").style.background = 'var(--shoukan)';
    document.getElementById("next").innerHTML = '大寒';
    document.getElementById("next").style.background = 'var(--daikan)';
}

if(mm==1 && (dd>=21) || mm==2 && (dd<=3)){
    document.documentElement.style.setProperty("--highlight", "var(--daikan");
    document.getElementById("season").innerHTML = '大寒';
    document.getElementById("s-japanese").innerHTML = 'daikan';
    document.getElementById("s-korean").innerHTML = 'daehan';
    document.getElementById("s-meaning").innerHTML = 'severe cold';
    document.getElementById("s-motif").innerHTML = 'ornamental cabbage';
    document.getElementById("s-next").innerHTML = 'february 4';

    document.getElementById("before").innerHTML = '小寒';
    document.getElementById("before").style.background = 'var(--shoukan)';
    document.getElementById("now").innerHTML = '大寒';
    document.getElementById("now").style.background = 'var(--daikan)';
    document.getElementById("next").innerHTML = '立春';
    document.getElementById("next").style.background = 'var(--risshun)';
}