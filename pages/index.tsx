import Head from "next/head";

export default () => {
  return [
    <Head>
      <title>Scrumy Cards</title>
    </Head>,
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flex: 1
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <img src="/assets/img/logo.svg" style={{ width: 200 }} />
        <text style={{ fontWeight: "bold", fontSize: "xx-large", margin: 20 }}>
          Coming Soon!
        </text>
      </div>
    </div>
  ];
};
