import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="space-y-4">
        <div className="flex justify-center text-xl">Profile</div>
        <div className="flex justify-center">
          <div className="flex justify-center text-xl">About Site</div>
            ここはShinda1111のポートフォリオサイトです<br/>
            これまでに手がけた制作物、身につけたスキルをまとめています。<br/>
          <br/>
        </div>
        <div className="flex justify-center text-xl">About me</div>
        <div className="flex justify-center">
             北海道出身の公務員。大学で情報工学を学んだ後、公務員として就職。<br/>
             その後、IT業界に再び興味を持ち、日々「世界を動かすIT技術とは何か」<br/>
             「今のITにはどのような技術が必要か」を考えながら研鑽を積んでいます<br/>
        </div>
        <div className="flex justify-center text-xl">Works</div>
        <div className="flex justify-center">
          出がけた二つの製作物について紹介します。<br/>
          この製作物は多くの会社にとって役立てられる技術が詰まっていると考えています。<br/>
        </div>
        <div className="flex justify-center text-xl">
          SDFアップスケーリング式動画サイト制作技術「Jinico」<br/>
          <br/>
        </div>
        <div className="flex justify-center">
          SDF(Signed Distance Field)を用いたリアルタイムのアップスケーリング技術です。<br/>
          この技術を使用することでHD動画のサイズを1/3に圧縮した上で同じ体験ができるという物です。<br/>
          この二つの画像をご覧いただきますと、多少の誤差はあれど、ほぼ圧縮前と変わらない品質を保っていることが分かります。<br/>
          人によっては陰影や境界線などのディティールがよりはっきり見えて圧縮後の方が綺麗に見えるという人もいるかもしれません。<br/>
          欠点としてはリアルタイムのアップスケーリングであるため、GPUに3Dのゲームをプレイする程度の負荷がかかることです。<br/>
        </div>  
        <div className="flex justify-center w-2/3  mx-auto gap-1">
          <div>
            <img className="" src="images/not_upscale.png"></img>
            <div className="flex justify-center text-xl bg-blue-500 rounded-full">
              圧縮前
            </div>
          </div>
          <div>
            <img className="" src="images/upscale.png"></img>
            <div className="flex justify-center text-xl bg-blue-500 rounded-full">
              圧縮後
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          Jinicoによる動画再生のサンプルページ<br/>
          ※GPUに3Dゲームをプレイする程度の負荷がかかりますのでご注意ください<br/>
        </div>
        <div className="flex justify-center">
          Jinicoによってどれだけのサーバー代金が説焼きできるかを示すページ<br/>
          (AWS(Amazon Web Services)とGCP(Google Cloud Platform)から計算)<br/>
        </div>
        <div className="flex text-xl justify-center">
          「Jinico」の使用技術
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex justify-center items-center text-lg bg-blue-500 rounded-full">
              WebGL
            </div>
            <div>
                アップスケーリングにはシェーディング言語を扱える3D APIが必要です。<br/>
                今回はウェブにおいて標準化されているWebGLを使用しました。<br/>
                将来的にはWebGPUの使用も視野に入ると考えています。<br/>
            </div>            
            <div className="flex justify-center items-center text-lg bg-blue-500 rounded-full">
              SDF(Signed Distance Field)
            </div>
            <div>
              「物体が境界線からどれだけ離れているか」を示す値を計算して用いるというもので<br/>
              主にフォントレンダリングに使用されます。<br/>
              この技術を動画のアップスケーリングに応用しました。<br/>
              参考文献としては以下のQiitaの記事があります。<br/>
              https://qiita.com/7CIT/items/fe33b9b341b9918b6c3d
            </div>
          </div>
        </div>
        <div className="flex justify-center text-xl">
          Jinico専用エンコードサーバー 「Encode Jinico」
        </div>
        <div className="flex justify-center">
          「Jinico」では動画のアルファ値(透過情報)にSDFの値を入れておくという特殊な形式の動画が必要になります。<br/>
          そこで、専用のエンコードサーバーをDocker上で作成しました。<br/>
          通常のビットマップ画像からSDFを生成するアルゴリズムにはGPUと相性が良いJump Flooding Algoorythmを使用、<br/>
          GPUのAPIはサーバーで動かす際の相性を考え、VulkanではなくAWSなどで使用実績があるnVidiaのCUDAを使用しています。<br/> 
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

/*
       */
