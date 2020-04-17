import React, { Component } from 'react';
import {Map, MapvglLayer, MapvglView} from '../../../src';

var data = [{"geometry":{"type":"Point","coordinates":[116.84037246524984,39.824588422242826]},"count":2.0423924061051713},{"geometry":{"type":"Point","coordinates":[121.16373269573734,28.907202585313065]},"count":7.34255379550703},{"geometry":{"type":"Point","coordinates":[112.4213181018664,29.125553983295717]},"count":0.5826470656070248},{"geometry":{"type":"Point","coordinates":[108.52219188481017,28.006706406073217]},"count":28.386668894740634},{"geometry":{"type":"Point","coordinates":[115.96733752322879,31.211306591330036]},"count":10.144652179697722},{"geometry":{"type":"Point","coordinates":[107.54990381051348,23.56109118761129]},"count":17.592234389760314},{"geometry":{"type":"Point","coordinates":[107.88052008658457,27.689159328332877]},"count":21.026930316877703},{"geometry":{"type":"Point","coordinates":[111.7658619294828,21.96726494129865]},"count":12.640232984944678},{"geometry":{"type":"Point","coordinates":[117.87872384854728,40.90811913350248]},"count":27.963688132486478},{"geometry":{"type":"Point","coordinates":[115.04443579056296,41.42222128109316]},"count":18.668306481689378},{"geometry":{"type":"Point","coordinates":[114.25359562281935,28.430758523430487]},"count":8.670338724992266},{"geometry":{"type":"Point","coordinates":[111.22893479985798,40.26336332877484]},"count":17.499467788591428},{"geometry":{"type":"Point","coordinates":[120.5564291707386,30.571261955739704]},"count":15.000405685638823},{"geometry":{"type":"Point","coordinates":[118.67767170332193,35.811941682023864]},"count":24.138849623568387},{"geometry":{"type":"Point","coordinates":[120.78381309312861,30.04087277439784]},"count":10.256586642729884},{"geometry":{"type":"Point","coordinates":[103.29744794180867,35.47528644472298]},"count":16.750428371826445},{"geometry":{"type":"Point","coordinates":[117.51940126557317,41.60699697509493]},"count":19.05469359570956},{"geometry":{"type":"Point","coordinates":[113.95622294216582,29.695501840449534]},"count":12.561456457181295},{"geometry":{"type":"Point","coordinates":[120.4576310638214,33.23048206948621]},"count":7.771776167714936},{"geometry":{"type":"Point","coordinates":[117.51592953301764,39.042528857539345]},"count":28.722351446101516},{"geometry":{"type":"Point","coordinates":[118.61526519764494,31.70053542418416]},"count":13.67655347131976},{"geometry":{"type":"Point","coordinates":[117.47056062617023,27.25072319329828]},"count":12.98799918859899},{"geometry":{"type":"Point","coordinates":[114.94416949170007,26.506485990338504]},"count":23.93795134435401},{"geometry":{"type":"Point","coordinates":[103.37133651515691,30.988051815389753]},"count":6.7159077407971886},{"geometry":{"type":"Point","coordinates":[118.76115993915718,31.175279643947754]},"count":27.653504894973217},{"geometry":{"type":"Point","coordinates":[120.55759831685265,27.560596870496706]},"count":19.10720115568525},{"geometry":{"type":"Point","coordinates":[103.65740539894546,29.95207290136402]},"count":8.201097720003718},{"geometry":{"type":"Point","coordinates":[114.3430676155657,34.40047670651415]},"count":12.936391341128937},{"geometry":{"type":"Point","coordinates":[109.85354639191686,24.010247696186436]},"count":19.060634726670163},{"geometry":{"type":"Point","coordinates":[122.90608127514159,41.66527786980983]},"count":9.506550605165394},{"geometry":{"type":"Point","coordinates":[105.41352059658796,28.68063012427701]},"count":11.831813169803842},{"geometry":{"type":"Point","coordinates":[117.05403602680654,28.40023220227303]},"count":1.6729924423705533},{"geometry":{"type":"Point","coordinates":[112.7370888111185,38.887500487377146]},"count":28.233923345741275},{"geometry":{"type":"Point","coordinates":[120.49771973240148,31.095297249550576]},"count":17.97158813239641},{"geometry":{"type":"Point","coordinates":[101.38063633059474,34.99449511769456]},"count":29.94360768693182},{"geometry":{"type":"Point","coordinates":[115.65132902904276,39.83240637536335]},"count":12.312188245683364},{"geometry":{"type":"Point","coordinates":[100.61167605141546,37.032873569929535]},"count":28.209376787749026},{"geometry":{"type":"Point","coordinates":[115.64943598654358,30.61332029575927]},"count":18.260078282387592},{"geometry":{"type":"Point","coordinates":[87.03468222534585,45.43294573099284]},"count":5.941201700600813},{"geometry":{"type":"Point","coordinates":[121.63720040191927,30.884161878148753]},"count":17.664620645770864},{"geometry":{"type":"Point","coordinates":[113.45713944669993,39.33182852855332]},"count":27.434382030341663},{"geometry":{"type":"Point","coordinates":[92.48068345648643,30.079302222472812]},"count":29.969162676219906},{"geometry":{"type":"Point","coordinates":[125.96266577833381,44.43927821672185]},"count":15.809369293744503},{"geometry":{"type":"Point","coordinates":[86.13604605258973,42.96263476487675]},"count":14.78111827832571},{"geometry":{"type":"Point","coordinates":[89.34127759074771,27.996800845856434]},"count":5.2037998538588255},{"geometry":{"type":"Point","coordinates":[118.10179842156171,26.36274310014929]},"count":12.465187129811959},{"geometry":{"type":"Point","coordinates":[113.45442099134132,34.27194872939779]},"count":5.736782833966519},{"geometry":{"type":"Point","coordinates":[92.80063301169113,31.33906968157374]},"count":19.151634283618883},{"geometry":{"type":"Point","coordinates":[109.03797551421626,18.022652716464684]},"count":25.73142521398262},{"geometry":{"type":"Point","coordinates":[116.91512115828652,39.30945026906569]},"count":16.858470819140084},{"geometry":{"type":"Point","coordinates":[104.9144596485294,39.19936075305161]},"count":14.256684755878782},{"geometry":{"type":"Point","coordinates":[101.5061190901202,26.830509610885475]},"count":18.990922668244675},{"geometry":{"type":"Point","coordinates":[105.52042699330974,29.60303790950288]},"count":15.026787129838059},{"geometry":{"type":"Point","coordinates":[125.81452503908159,44.38994493970162]},"count":25.563661703900287},{"geometry":{"type":"Point","coordinates":[120.83840050593243,28.914539277226485]},"count":1.4272729012579544},{"geometry":{"type":"Point","coordinates":[113.43044664237537,29.61709887942292]},"count":18.047934728056354},{"geometry":{"type":"Point","coordinates":[110.04053021704048,19.899277834149046]},"count":11.870114626314399},{"geometry":{"type":"Point","coordinates":[112.35638791084301,29.17427861558368]},"count":29.302507014908493},{"geometry":{"type":"Point","coordinates":[106.15483848614585,28.954904329895236]},"count":29.40680261219302},{"geometry":{"type":"Point","coordinates":[103.83475706614581,28.70525619615372]},"count":16.434177275284867},{"geometry":{"type":"Point","coordinates":[117.09695863955673,37.41612230843758]},"count":22.98947047907783},{"geometry":{"type":"Point","coordinates":[113.74115225074044,38.88010815516477]},"count":23.636543885879384},{"geometry":{"type":"Point","coordinates":[119.80097840329276,29.893499555914815]},"count":22.64035736938856},{"geometry":{"type":"Point","coordinates":[114.8566037497242,39.42020460083276]},"count":2.1915863010988623},{"geometry":{"type":"Point","coordinates":[115.43202291102392,36.42262920160839]},"count":20.27841981313716},{"geometry":{"type":"Point","coordinates":[114.06853713086717,39.79141219870512]},"count":25.252253350867356},{"geometry":{"type":"Point","coordinates":[102.6619434367121,31.95021641324351]},"count":25.149794329265593},{"geometry":{"type":"Point","coordinates":[101.92782888667935,36.675518951332705]},"count":12.04630302760824},{"geometry":{"type":"Point","coordinates":[89.96952705703097,30.71520958636703]},"count":15.377129475327457},{"geometry":{"type":"Point","coordinates":[108.08294509408994,34.97256174376419]},"count":25.059913096927108},{"geometry":{"type":"Point","coordinates":[106.16344710368396,27.2516737111275]},"count":23.982354909539666},{"geometry":{"type":"Point","coordinates":[114.49227213730772,27.386578738684243]},"count":15.880832079606066},{"geometry":{"type":"Point","coordinates":[117.4982840500457,41.25909855109184]},"count":11.529890895715036},{"geometry":{"type":"Point","coordinates":[120.08992822041526,31.927222459878433]},"count":3.882585489669186},{"geometry":{"type":"Point","coordinates":[111.78225999021599,20.490200878680238]},"count":27.245278663541065},{"geometry":{"type":"Point","coordinates":[114.52789733495229,39.7426724657217]},"count":14.314339827350295},{"geometry":{"type":"Point","coordinates":[118.55642411356564,31.61507665293799]},"count":24.750919702192583},{"geometry":{"type":"Point","coordinates":[115.28693579339681,40.56821685700238]},"count":24.682502734321005},{"geometry":{"type":"Point","coordinates":[121.78178336346284,29.44619459755594]},"count":22.963566644055472},{"geometry":{"type":"Point","coordinates":[107.85222774267245,35.999471530909894]},"count":0.43319175797320586},{"geometry":{"type":"Point","coordinates":[105.31872203704754,35.321848140235176]},"count":19.71756737658527},{"geometry":{"type":"Point","coordinates":[117.85348496331673,28.238539578090787]},"count":25.30133596589784},{"geometry":{"type":"Point","coordinates":[90.42826519704215,31.024392737283762]},"count":26.7439819373556},{"geometry":{"type":"Point","coordinates":[106.63269113314666,26.743907771836042]},"count":6.269044617835635},{"geometry":{"type":"Point","coordinates":[112.82249328891776,36.13845307557686]},"count":18.89762268269601},{"geometry":{"type":"Point","coordinates":[115.85821647195148,28.657932923306564]},"count":28.005548857801188},{"geometry":{"type":"Point","coordinates":[114.64712702332986,38.40293398383902]},"count":13.303543501028223},{"geometry":{"type":"Point","coordinates":[102.52819568846932,32.39917998604665]},"count":15.398470531945783},{"geometry":{"type":"Point","coordinates":[112.52746423147937,38.58693675934652]},"count":15.877210618233363},{"geometry":{"type":"Point","coordinates":[117.84138873363914,30.61995999608809]},"count":4.8728698026372586},{"geometry":{"type":"Point","coordinates":[111.13150997650034,37.8660725318195]},"count":19.92189535729664},{"geometry":{"type":"Point","coordinates":[118.55193144236735,24.811119353563946]},"count":5.010989512940467},{"geometry":{"type":"Point","coordinates":[105.81037552448883,30.61301523362487]},"count":22.522861965218645},{"geometry":{"type":"Point","coordinates":[112.51341324716005,29.455491305923253]},"count":4.399413901197571},{"geometry":{"type":"Point","coordinates":[88.42828502209224,44.085546621342566]},"count":22.410134799909173},{"geometry":{"type":"Point","coordinates":[114.35345093741842,34.46607943180159]},"count":3.241866149823227},{"geometry":{"type":"Point","coordinates":[115.89649513533944,38.23205647731108]},"count":5.220270781619685},{"geometry":{"type":"Point","coordinates":[120.0745188907378,32.27628320374036]},"count":24.28471447780814},{"geometry":{"type":"Point","coordinates":[105.32778245594848,26.351773694615034]},"count":5.7422947294826},{"geometry":{"type":"Point","coordinates":[114.1115674751645,36.68696782585681]},"count":3.4655293443049073}];

var line = [{"geometry":{"type":"LineString","coordinates":[[12901348.900557848,3315495.532729716],[13950002.602443708,5419815.421387334]]}},{"geometry":{"type":"LineString","coordinates":[[12613487.146162324,2629614.0690294304],[12430108.663427897,4958853.075365567]]}},{"geometry":{"type":"LineString","coordinates":[[13740624.94872697,5103604.945473762],[12576940.893638892,3255530.721421438]]}},{"geometry":{"type":"LineString","coordinates":[[12901348.900557848,3315495.532729716],[11328876.411135158,4363410.261469277]]}},{"geometry":{"type":"LineString","coordinates":[[13047989.989808297,4715083.249167222],[13027301.482620519,4369219.665948335]]}},{"geometry":{"type":"LineString","coordinates":[[12430108.663427897,4958853.075365567],[12613487.146162324,2629614.0690294304]]}},{"geometry":{"type":"LineString","coordinates":[[12576940.893638892,3255530.721421438],[12748678.567342905,4559762.982230695]]}},{"geometry":{"type":"LineString","coordinates":[[12282102.336883307,2260885.286042749],[11822979.803655697,4623825.05020458]]}},{"geometry":{"type":"LineString","coordinates":[[12748678.567342905,4559762.982230695],[14099625.97609186,5713172.63112198]]}},{"geometry":{"type":"LineString","coordinates":[[13740624.94872697,5103604.945473762],[9747795.93881917,5410897.456443372]]}},{"geometry":{"type":"LineString","coordinates":[[13283923.97807458,2985985.9675510116],[13382905.223721737,3515188.078258027]]}},{"geometry":{"type":"LineString","coordinates":[[11584914.24842466,3569251.033154428],[13027301.482620519,4369219.665948335]]}},{"geometry":{"type":"LineString","coordinates":[[10142639.67157913,3438908.472209953],[11822979.803655697,4623825.05020458]]}},{"geometry":{"type":"LineString","coordinates":[[11822979.803655697,4623825.05020458],[11584914.24842466,3569251.033154428]]}},{"geometry":{"type":"LineString","coordinates":[[13027301.482620519,4369219.665948335],[12128735.358919675,4041877.2076312164]]}},{"geometry":{"type":"LineString","coordinates":[[13740624.94872697,5103604.945473762],[12282102.336883307,2260885.286042749]]}},{"geometry":{"type":"LineString","coordinates":[[12748678.567342905,4559762.982230695],[12128735.358919675,4041877.2076312164]]}},{"geometry":{"type":"LineString","coordinates":[[13222458.584578294,3747938.357863917],[12957244.915783314,4828090.363053201]]}},{"geometry":{"type":"LineString","coordinates":[[12128735.358919675,4041877.2076312164],[12529241.195746645,4537450.1967129605]]}},{"geometry":{"type":"LineString","coordinates":[[11584914.24842466,3569251.033154428],[13524118.205932114,3642780.390592491]]}},{"geometry":{"type":"LineString","coordinates":[[11822979.803655697,4623825.05020458],[13055992.38979377,3723091.2139707133]]}},{"geometry":{"type":"LineString","coordinates":[[13027301.482620519,4369219.665948335],[13524118.205932114,3642780.390592491]]}},{"geometry":{"type":"LineString","coordinates":[[12651558.156713184,4106269.3475192836],[13283923.97807458,2985985.9675510116]]}},{"geometry":{"type":"LineString","coordinates":[[12529241.195746645,4537450.1967129605],[11859065.078506857,3423884.167777399]]}},{"geometry":{"type":"LineString","coordinates":[[12128735.358919675,4041877.2076312164],[11328876.411135158,4363410.261469277]]}},{"geometry":{"type":"LineString","coordinates":[[11859065.078506857,3423884.167777399],[12651558.156713184,4106269.3475192836]]}},{"geometry":{"type":"LineString","coordinates":[[14099625.97609186,5713172.63112198],[12651558.156713184,4106269.3475192836]]}},{"geometry":{"type":"LineString","coordinates":[[12128735.358919675,4041877.2076312164],[12128735.358919675,4041877.2076312164]]}},{"geometry":{"type":"LineString","coordinates":[[13222458.584578294,3747938.357863917],[12748678.567342905,4559762.982230695]]}},{"geometry":{"type":"LineString","coordinates":[[12576940.893638892,3255530.721421438],[12901348.900557848,3315495.532729716]]}},{"geometry":{"type":"LineString","coordinates":[[12055724.119441263,2591922.368331568],[12651558.156713184,4106269.3475192836]]}},{"geometry":{"type":"LineString","coordinates":[[12725759.638569435,3556525.6701219343],[13950002.602443708,5419815.421387334]]}},{"geometry":{"type":"LineString","coordinates":[[11328876.411135158,4363410.261469277],[11557683.20093771,4284074.410245049]]}},{"geometry":{"type":"LineString","coordinates":[[14099625.97609186,5713172.63112198],[12128735.358919675,4041877.2076312164]]}},{"geometry":{"type":"LineString","coordinates":[[12651558.156713184,4106269.3475192836],[12128735.358919675,4041877.2076312164]]}},{"geometry":{"type":"LineString","coordinates":[[13524118.205932114,3642780.390592491],[12901348.900557848,3315495.532729716]]}},{"geometry":{"type":"LineString","coordinates":[[12576940.893638892,3255530.721421438],[11822979.803655697,4623825.05020458]]}},{"geometry":{"type":"LineString","coordinates":[[9747795.93881917,5410897.456443372],[12282102.336883307,2260885.286042749]]}},{"geometry":{"type":"LineString","coordinates":[[12613487.146162324,2629614.0690294304],[13382905.223721737,3515188.078258027]]}},{"geometry":{"type":"LineString","coordinates":[[11557683.20093771,4284074.410245049],[12576940.893638892,3255530.721421438]]}},{"geometry":{"type":"LineString","coordinates":[[13027301.482620519,4369219.665948335],[11328876.411135158,4363410.261469277]]}},{"geometry":{"type":"LineString","coordinates":[[12957244.915783314,4828090.363053201],[13524118.205932114,3642780.390592491]]}},{"geometry":{"type":"LineString","coordinates":[[12055724.119441263,2591922.368331568],[12128735.358919675,4041877.2076312164]]}},{"geometry":{"type":"LineString","coordinates":[[12055724.119441263,2591922.368331568],[12576940.893638892,3255530.721421438]]}},{"geometry":{"type":"LineString","coordinates":[[9747795.93881917,5410897.456443372],[13524118.205932114,3642780.390592491]]}},{"geometry":{"type":"LineString","coordinates":[[13524118.205932114,3642780.390592491],[12282102.336883307,2260885.286042749]]}},{"geometry":{"type":"LineString","coordinates":[[13283923.97807458,2985985.9675510116],[12282102.336883307,2260885.286042749]]}},{"geometry":{"type":"LineString","coordinates":[[13740624.94872697,5103604.945473762],[11878940.49929364,3057983.069452509]]}},{"geometry":{"type":"LineString","coordinates":[[11434261.49455086,2863528.339217073],[11557683.20093771,4284074.410245049]]}},{"geometry":{"type":"LineString","coordinates":[[13047989.989808297,4715083.249167222],[12128735.358919675,4041877.2076312164]]}}];

export default class App extends Component {
    render() {
        return <div>
            <Map
                center={{lng: 105.403119, lat: 38.028658}}
                zoom='5'
                mapStyle={{style: 'midnight'}}
            >
                <MapvglView>
                    <MapvglLayer
                        type="PointLayer"
                        data={data}
                        options={{
                            blend: 'lighter',
                            size: 20,
                            color: 'rgba(255, 255, 50, 0.8)'
                        }}
                    />
                </MapvglView>
            </Map>
            <Map
                center={{lng: 105.403119, lat: 38.028658}}
                zoom='5'
                mapStyle={{style: 'midnight'}}
            >
                <MapvglView effects={['bloom']}>
                    <MapvglLayer
                        type="LineLayer"
                        data={line}
                        options={{
                            blend: 'lighter',
                            width: 10,
                            color: 'rgb(255, 153, 0, 0.6)'
                        }}
                    />
                </MapvglView>
            </Map>
        </div>
    }
}

