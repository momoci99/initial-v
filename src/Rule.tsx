import "./assets/styles/Rule.scoped.css";

type RuleContents = {
  title: string;
  text: string;
};

function Rule() {
  return (
    <div className="Rule">
      <h2 className="rule--title">안전한 드라이빙을 추구합니다.</h2>
      <div className="rule__container">
        <RuleDescription
          title="차량의 상태 점검"
          text="활동 전 반드시 차량의 상태를 먼저 알아야 합니다. 타이어, 브레이크 패드, 엔진 오일, 냉각수 상태를 체크합니다."
        ></RuleDescription>
        <RuleDescription
          title="자만 금물"
          text="도로위는 언제 어디서 어떤 일이 일어날 지 모릅니다. 그러니 항상 자신의 운전실력 중 80% 만 발휘합니다."
        ></RuleDescription>
        <RuleDescription
          title="다른 사람에게 피해를 주지 않을 것"
          text="본인의 즐거움을 위해 다른 사람에게 피해를 주어서는 안됩니다. 다른사람에게 피해를 주는 과도한 배기음, 추월을 금지합니다."
        ></RuleDescription>
        <RuleDescription
          title="기상 상황에 예의 주시"
          text="기온이 너무 높거나, 기온이 너무 낮거나, 비, 눈이 오는 날과 같이 안전에 영향을 주는 기상에는 활동 하지 않습니다."
        ></RuleDescription>
      </div>
    </div>
  );
}

function RuleDescription(props: RuleContents) {
  return (
    <article className="RuleDescription">
      <p className="rule-description--title">{props.title}</p>
      <p className="rule-description--text">{props.text}</p>
    </article>
  );
}

export default Rule;
