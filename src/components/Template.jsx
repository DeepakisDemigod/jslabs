import React, { Suspense, lazy } from 'react';
import './Template.css';
const SandpackProvider = lazy(() =>
  import('@codesandbox/sandpack-react').then(module => ({
    default: module.SandpackProvider
  }))
);
const SandpackThemeProvider = lazy(() =>
  import('@codesandbox/sandpack-react').then(module => ({
    default: module.SandpackThemeProvider
  }))
);
const SandpackPreview = lazy(() =>
  import('@codesandbox/sandpack-react').then(module => ({
    default: module.SandpackPreview
  }))
);
const SandpackCodeEditor = lazy(() =>
  import('@codesandbox/sandpack-react').then(module => ({
    default: module.SandpackCodeEditor
  }))
);
const SandpackStack = lazy(() =>
  import('@codesandbox/sandpack-react').then(module => ({
    default: module.SandpackStack
  }))
);
const SandpackLayout = lazy(() =>
  import('@codesandbox/sandpack-react').then(module => ({
    default: module.SandpackLayout
  }))
);
const SandpackConsole = lazy(() =>
  import('@codesandbox/sandpack-react').then(module => ({
    default: module.SandpackConsole
  }))
);

const SandpackFileExplorer = lazy(() =>
  import('sandpack-file-explorer').then(module => ({
    default: module.SandpackFileExplorer
  }))
);

const Template = props => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      
        <SandpackProvider
          className='editor'
          files={props.files}
          options={props.options}
          template={props.template}
        >
          <div className='border-neutral'>
            <SandpackThemeProvider
              theme={{
                colors: {
                  surface1: '#0d141c',
                  surface2: '#21252b',
                  surface3: '#192636',
                  clickable: '#a8b1c2',
                  base: '#a8b1c2',
                  disabled: '#4d4d4d',
                  hover: '#e8effc',
                  accent: '#3b82f6',
                  error: '#e06c75',
                  errorSurface: '#ffeceb'
                },
                syntax: {
                  plain: '#a8b1c2',
                  comment: {
                    color: '#757575',
                    fontStyle: 'italic'
                  },
                  keyword: '#c678dd',
                  tag: '#e06c75',
                  punctuation: '#a8b1c2',
                  definition: '#62aeef',
                  property: '#d19a66',
                  static: '#a8b1c2',
                  string: '#98c379'
                },
                font: {
                  body: '"IBM Plex Sans",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                  mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
                  size: '14px',
                  lineHeight: '18px'
                }
              }}
            >
              <SandpackStack>
                <SandpackLayout>
                  <div
                    style={{
                      display: 'flex',
                      width: '100%',
                      minHeight: '300px',
                      maxHeight: '500px',
                      backgroundColor: `var(--sp-colors-surface1)`
                    }}
                  >
                    <div
                      className='hidden sm:block'
                      style={{
                        minWidth: 150,
                        maxWidth: '300px',
                        overflow: 'hidden'
                      }}
                    >
                      <SandpackFileExplorer />
                    </div>
                    <div style={{ flex: 'min-content' }}>
                      <SandpackCodeEditor
                        wrapContent
                        style={{
                          minHeight: '100%',
                          maxHeight: '100%',
                          overflow: 'auto'
                        }}
                        showTabs
                        showLineNumbers='true'
                        closableTabs
                        /*showInlineErrors
                      extensions={[autocompletion()]}
                      extensionsKeymap={[completionKeymap]}*/
                      />
                    </div>
                  </div>
                  <SandpackPreview
                    showNavigator={true}
                    showOpenInCodeSandbox={false}
                    /*showSyntaxError={true}*/
                  />
                  <SandpackConsole />
                </SandpackLayout>
              </SandpackStack>
            </SandpackThemeProvider>
          </div>
        </SandpackProvider>
    </Suspense>
  );
};

export default Template;
