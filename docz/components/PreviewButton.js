import React, {useEffect, useRef, useState} from 'react';

import Button from './../../src/components/Button';
import PropTypes from 'prop-types';

// this component previews the underlying component.  There can only be one instance of a preview at a given moment in time.
function PreviewButton({children, label}) {
  const ref = useRef();
  const [key, setKey] = useState(0);

  useEffect(clearNodes, []);

  function clearNodes() {
    Array.from(
      document.getElementsByClassName('preview-button-content'),
    ).forEach(contentNode => {
      contentNode.style.display = 'none';
    });
  }

  return (
    <div key={key}>
      <Button
        label={label}
        onClick={() => {
          clearNodes();
          ref.current.style.display = 'block';
          setKey(key + 1);
        }}
      />
      <div className="preview-button-content" ref={ref}>
        {children}
      </div>
    </div>
  );
}

PreviewButton.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
};

export default PreviewButton;
