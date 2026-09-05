function Home() {
    return (
        <>
            <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        .hero{
          min-height:100vh;
          background:#050816;
          position:relative;
          overflow:hidden;

          display:flex;
          align-items:center;
          justify-content:space-between;

          padding:0 8%;
        }

        /* Stars */

        .hero::before{
          content:"";
          position:absolute;
          inset:0;

          background-image:
            radial-gradient(#00ffff 1px, transparent 1px),
            radial-gradient(#8b5cf6 1px, transparent 1px);

          background-size:60px 60px;
          background-position:0 0,30px 30px;

          opacity:.4;
        }

        .left{
          width:50%;
          position:relative;
          z-index:2;
        }

        .tag{
          color:#2dd4bf;
          font-size:14px;
          letter-spacing:2px;
          margin-bottom:30px;
        }

        h1{
          font-size:60px;
          line-height:1.05;
          color:white;
          margin-bottom:20px;
        }

        .gradient{
          background:linear-gradient(
            90deg,
            #38bdf8,
            #8b5cf6
          );

          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .role{
          font-size:18px;
          color:#cbd5e1;
          margin-bottom:25px;
        }

        .desc{
          color:#94a3b8;
          font-size:18px;
          max-width:600px;
          line-height:1.8;
        }

        .buttons{
          display:flex;
          gap:20px;
          margin-top:40px;
        }

        .btn{
          padding:16px 35px;
          border-radius:50px;
          cursor:pointer;
          font-size:16px;
          border:none;
        }

        .primary{
          background:linear-gradient(
            90deg,
            #4f46e5,
            #8b5cf6
          );

          color:white;
        }

        .secondary{
          background:rgba(255,255,255,.05);
          border:1px solid rgba(255,255,255,.1);
          color:white;
        }

        .stats{
          display:flex;
          gap:60px;
          margin-top:70px;
        }

        .stat h2{
          font-size:40px;
          color:white;
        }

        .stat p{
          color:#64748b;
        }

        /* RIGHT SIDE */

        .right{
          width:50%;
          height:100vh;
          position:relative;

          display:flex;
          align-items:center;
          justify-content:center;
        }

        .orb{
          width:420px;
          height:420px;
          position:relative;

          animation:spin 25s linear infinite;
        }

        .ring{
          position:absolute;
          inset:0;

          border:2px solid #8b5cf6;
          border-radius:50%;
        }

        .ring:nth-child(2){
          transform:rotateX(70deg);
          border-color:#00ffff;
        }

        .ring:nth-child(3){
          transform:rotateY(70deg);
          border-color:#9333ea;
        }

        .ring:nth-child(4){
          transform:rotate(45deg);
        }

        @keyframes spin{
          from{
            transform:rotate(0deg);
          }
          to{
            transform:rotate(360deg);
          }
        }

        .code{
          position:absolute;

          background:rgba(255,255,255,.05);
          backdrop-filter:blur(15px);

          border:1px solid rgba(255,255,255,.1);

          padding:14px 20px;
          border-radius:14px;

          color:#cbd5e1;
          font-family:monospace;
        }

        .c1{
          top:180px;
          left:40px;
        }

        .c2{
          right:50px;
          top:260px;
        }

        .c3{
          left:30px;
          bottom:220px;
        }

        .profile{
          position:absolute;
          bottom:100px;

          background:rgba(255,255,255,.05);
          backdrop-filter:blur(15px);

          border:1px solid rgba(255,255,255,.1);

          width:340px;

          padding:25px;
          border-radius:20px;
        }

        .profile h3{
          color:white;
          margin-bottom:10px;
        }

        .profile p{
          color:#94a3b8;
        }

      `}</style>

            <section className="hero">

                <div className="left">

                    <div className="tag">
                        ● AVAILABLE FOR OPPORTUNITIES
                    </div>

                    <h1>
                        Hi, I'm <span className="gradient">Pritam</span>
                        <br />
                        <span className="gradient">Kumar Das</span>
                    </h1>

                    <div className="role">
                        PHP Developer • Java Learner • AI Enthusiast
                    </div>

                    <p className="desc">
                        Building projects, learning new technologies and sharing
                        useful resources with the developer community.
                    </p>

                    <div className="buttons">
                        <button className="btn primary">
                            View Projects
                        </button>

                        <button className="btn secondary">
                            Download Resume
                        </button>

                        <button className="btn secondary">
                            Contact Me
                        </button>
                    </div>

                    <div className="stats">
                        <div className="stat">
                            <h2>5+</h2>
                            <p>Projects</p>
                        </div>

                        <div className="stat">
                            <h2>10+</h2>
                            <p>Tutorials</p>
                        </div>

                        <div className="stat">
                            <h2>20+</h2>
                            <p>Resources</p>
                        </div>
                    </div>

                </div>

                <div className="right">

                    <div className="code c1">
                        const app = () =&gt; {'{ }'}
                    </div>

                    <div className="code c2">
                        System.out.println("Hi");
                    </div>

                    <div className="code c3">
                        POST /api/users
                    </div>

                    <div className="orb">
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                        <div className="ring"></div>
                    </div>

                    <div className="profile">
                        <h3>Pritam Kumar Das</h3>
                        <p>Java • MERN Developer</p>
                    </div>

                </div>

            </section>
        </>
    );
}

export default Home;